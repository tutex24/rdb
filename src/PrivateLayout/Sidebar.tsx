import { Link } from 'react-router-dom'
import { MenuDatas } from '../components/Datas'

function Sidebar() {
	// active link
	const currentPath = (path: string) => {
		const currentPath = window.location.pathname.split('/')[1] === path.split('/')[1]
		if (currentPath) {
			return path
		}
		return null
	}

	return (
		<div className="w-full border-border border-r bg-white px-4 py-6 xl:h-screen xl:shadow-lg">
			<Link to="/">
				<img src="/images/logo.png" alt="logo" className="ml-4 h-12 w-3/4 object-contain" />
			</Link>
			<div className="mt-6 flex-colo gap-2">
				{MenuDatas.map((item, index) => (
					<Link
						to={item.path}
						key={index}
						className={`${currentPath(item.path) === item.path ? 'bg-text' : ''}transitions group flex w-full items-center gap-4 rounded-lg p-4 hover:bg-text`}
					>
						<item.icon className={'text-subMain text-xl '} />
						<p
							className={`font-medium text-sm group-hover:text-subMain ${
								currentPath(item.path) === item.path ? 'text-subMain' : 'text-gray-500'
							}`}
						>
							{item.title}
						</p>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Sidebar
