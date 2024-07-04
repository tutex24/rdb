import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { TbUser } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import MenuDrawer from '../components/Drawer/MenuDrawer'
import { MenuSelect } from '../components/Form'
import NotificationComp from '../components/NotificationComp'
import { usePocket } from '../contexts/PocketContext'

function Header() {
	const { user } = usePocket()
	const [isOpen, setIsOpen] = React.useState(false)

	// toggle drawer
	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState)
	}

	const navigate = useNavigate()
	const DropDown1 = [
		{
			title: 'Profile',
			icon: TbUser,
			onClick: () => {
				navigate('/settings')
			},
		},
		{
			title: 'Logout',
			icon: AiOutlinePoweroff,
			onClick: () => {
				navigate('/login')
			},
		},
	]

	const { avatar, collectionId, name } = user || {}

	return (
		<>
			{isOpen && <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}

			{/* cmp */}
			<div className="fixed top-0 z-40 grid w-full grid-cols-12 items-center bg-dry bg-opacity-95 px-2 xs:px-8 md:grid-cols-2 xl:w-5/6 2xl:max-w-[1640px]">
				<div className="col-span-10 flex items-center gap-4 py-4 sm:col-span-11 md:col-span-1 md:py-0">
					<button
						type="button"
						onClick={toggleDrawer}
						className="transitions block h-12 w-16 flex-colo rounded-md border bg-greyed text-2xl text-textGray hover:bg-border md:w-12 xl:hidden"
					>
						<BiMenu />
					</button>
					{/* search */}
					<input
						type="text"
						placeholder='Search "Patients"'
						className="h-12 w-full rounded-md border border-border bg-dry px-4 text-main text-sm md:w-96"
					/>
				</div>
				<div className="col-span-2 items-center justify-end pr-4 sm:col-span-1 md:col-span-1 md:pr-0">
					<div className="float-right flex items-center justify-center gap-4">
						<NotificationComp>
							<div className="relative">
								<MdOutlineNotificationsNone className="text-2xl hover:text-subMain" />
								<span className="-top-2.5 -right-2.5 absolute rounded-full bg-subMain px-1.5 py-0.5 text-center font-semibold text-white text-xs">
									5
								</span>
							</div>
						</NotificationComp>

						<div className=" hidden items-center md:flex">
							<MenuSelect datas={DropDown1}>
								<div className="flex items-center gap-4 rounded-lg p-4">
									<img
										src={`../../pb_data/storage/${collectionId}/${avatar}`}
										alt={`${name} Avatar`}
										className="h-12 w-12 rounded-full border border-border object-cover"
									/>
									<p className="font-medium text-sm text-textGray">{name}</p>
								</div>
							</MenuSelect>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
