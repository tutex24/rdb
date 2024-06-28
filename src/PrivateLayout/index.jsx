import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePocket } from '../contexts/PocketContext'
import Header from './Header'
import Sidebar from './Sidebar'

function index({ children, title }) {
	const { user } = usePocket()
	const navigate = useNavigate()

	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [navigate, user])

	return (
		<div className="flex-colo bg-dry xl:h-screen ">
			<div className="grid w-full xl:grid-cols-12 2xl:max-w-[2000px]">
				<div className="col-span-2 hidden xl:block">
					<Sidebar />
				</div>
				<div className="relative col-span-10 overflow-y-scroll xl:h-screen">
					<Header title={title} />
					<div className="px-2 xs:px-8 pt-24">{children}</div>
				</div>
			</div>
		</div>
	)
}

export default index
