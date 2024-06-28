import * as jwtDecode from 'jwt-decode'
import ms from 'ms'
import PocketBase from 'pocketbase'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useInterval } from 'usehooks-ts'

const BASE_URL = 'http://127.0.0.1:8090'
const fiveMinutesInMs = ms('5 minutes')
const twoMinutesInMs = ms('2 minutes')

const PocketContext = createContext({})

export const PocketProvider = ({ children }) => {
	const pb = useMemo(() => new PocketBase(BASE_URL), [])

	const [token, setToken] = useState(pb.authStore.token)
	const [user, setUser] = useState(pb.authStore.model)

	useEffect(() => {
		return pb.authStore.onChange((token, model) => {
			setToken(token)
			setUser(model)
		})
	}, [pb.authStore.onChange])

	const register = useCallback(
		async (email, password) => {
			return await pb.collection('users').create({ email, password, passwordConfirm: password })
		},
		[pb.collection]
	)

	const login = useCallback(
		async (email, password) => {
			return await pb.collection('users').authWithPassword(email, password)
		},
		[pb.collection]
	)

	const logout = useCallback(() => {
		pb.authStore.clear()
	}, [pb.authStore.clear])

	const refreshSession = useCallback(async () => {
		if (!pb.authStore.isValid) return
		const decoded = jwtDecode(token)
		const tokenExpiration = decoded.exp
		const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000
		if (tokenExpiration < expirationWithBuffer) {
			await pb.collection('users').authRefresh()
		}
	}, [pb.authStore.isValid, pb.collection, token])

	useInterval(refreshSession, token ? twoMinutesInMs : null)

	return (
		<PocketContext.Provider value={{ register, login, logout, user, token, pb }}>{children}</PocketContext.Provider>
	)
}

export const usePocket = () => useContext(PocketContext)
