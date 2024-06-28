import { useCallback, useRef } from 'react'
import { BiLogInCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/Form'
import { usePocket } from '../contexts/PocketContext'

function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { login } = usePocket()
	const navigate = useNavigate()

	const handleOnSubmit = useCallback(
		async (evt) => {
			evt?.preventDefault()
			await login(emailRef.current.value, passwordRef.current.value)
			navigate('/')
		},
		[login, navigate]
	)

	return (
		<div className="h-screen w-full flex-colo bg-dry">
			<form className="mx-auto flex-colo rounded-2xl bg-white p-8 md:w-2/5" onSubmit={handleOnSubmit}>
				<img src="/images/logo.png" alt="logo" className="h-16 w-48 object-contain" />
				<div className="mb-6 flex w-full flex-col gap-4">
					<Input label="Email" type="email" color={true} placeholder={'admin@gmail.com'} ref={emailRef} />
					<Input label="Password" type="password" color={true} placeholder={'*********'} ref={passwordRef} />
				</div>
				<Button type="submit" label="Login" Icon={BiLogInCircle} />
			</form>
		</div>
	)
}

export default Login
