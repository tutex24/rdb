import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Form'

function NotFound() {
	const navigate = useNavigate()
	return (
		<div className="h-screen w-full flex-colo bg-dry text-center">
			<img src="/images/404.svg" alt="404" className="max-h-96 w-full object-contain" />
			<h1 className="mt-10 font-bold text-4xl">Page Not Found</h1>
			<p className="my-3 text-lg text-textGray">The page you are looking for does not exist or has been moved.</p>
			<div className="w-48">
				<Button label={'Back to Home'} Icon={null} onClick={() => navigate('/')} />
			</div>
		</div>
	)
}

export default NotFound
