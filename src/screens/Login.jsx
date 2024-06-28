import { BiLogInCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/Form'

function Login() {
	const navigate = useNavigate()

	return (
		<div className="h-screen w-full flex-colo bg-dry">
			<form className="mx-auto flex-colo rounded-2xl bg-white p-8 md:w-2/5">
				<img src="/images/logo.png" alt="logo" className="h-16 w-48 object-contain" />
				<div className="mb-6 flex w-full flex-col gap-4">
					<Input label="Email" type="email" color={true} placeholder={'admin@gmail.com'} />
					<Input label="Password" type="password" color={true} placeholder={'*********'} />
				</div>
				<Button label="Login" Icon={BiLogInCircle} onClick={() => navigate('/')} />
			</form>
		</div>
	)
}

export default Login
