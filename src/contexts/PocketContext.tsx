import { jwtDecode } from 'jwt-decode'
import ms from 'ms'
import PocketBase from 'pocketbase'
import type { AuthModel, RecordAuthResponse, RecordModel } from 'pocketbase'
import { type ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useInterval } from 'usehooks-ts'

const BASE_URL = 'http://127.0.0.1:8090'
const fiveMinutesInMs = ms('5 minutes')
const twoMinutesInMs = ms('2 minutes')

// Define the types for context
interface PocketContextProps {
	register: (email: string, password: string) => Promise<RecordModel>
	login: (email: string, password: string) => Promise<RecordAuthResponse<RecordModel>>
	logout: () => void
	user: AuthModel | null
	token: string | null
	pb: PocketBase
}

const PocketContext = createContext<PocketContextProps | undefined>(undefined)

type PocketProviderProps = {
	children: ReactNode
}

export const PocketProvider = ({ children }: PocketProviderProps) => {
	const pb = useMemo(() => new PocketBase(BASE_URL), [])

	const [token, setToken] = useState<string | null>(pb.authStore.token)
	const [user, setUser] = useState<AuthModel | null>(pb.authStore.model as AuthModel)

	useEffect(() => {
		return pb.authStore.onChange((token, model) => {
			setToken(token)
			setUser(model as AuthModel)
		})
	}, [pb.authStore])

	const register = useCallback(
		async (email: string, password: string): Promise<RecordModel> => {
			return await pb.collection('users').create({ email, password, passwordConfirm: password })
		},
		[pb]
	)

	const login = useCallback(
		async (email: string, password: string): Promise<RecordAuthResponse<RecordModel>> => {
			return await pb.collection('users').authWithPassword(email, password)
		},
		[pb]
	)

	const logout = useCallback(() => {
		pb.authStore.clear()
	}, [pb])

	const refreshSession = useCallback(async () => {
		if (!pb.authStore.isValid) return
		const decoded: { exp: number } = jwtDecode(token as string)
		const tokenExpiration = decoded.exp
		const expirationWithBuffer = tokenExpiration - fiveMinutesInMs / 1000
		if (Date.now() / 1000 > expirationWithBuffer) {
			await pb.collection('users').authRefresh()
		}
	}, [pb, token])

	useInterval(refreshSession, token ? twoMinutesInMs : null)

	return (
		<PocketContext.Provider value={{ register, login, logout, user, token, pb }}>{children}</PocketContext.Provider>
	)
}

export const usePocket = (): PocketContextProps => {
	const context = useContext(PocketContext)
	if (!context) {
		throw new Error('usePocket must be used within a PocketProvider')
	}
	return context
}
