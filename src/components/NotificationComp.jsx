import { Menu } from '@headlessui/react'
import { BiCalendar } from 'react-icons/bi'
import { MdOutlineChat } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { notificationsData } from './Datas'

function NotificationComp({ children }) {
	return (
		<Menu>
			<Menu.Button>{children}</Menu.Button>
			<Menu.Items className="absolute top-20 right-0 z-50 flex w-full flex-col gap-4 rounded-md bg-white px-6 py-4 shadow-lg ring-1 ring-border focus:outline-none sm:w-8/12 md:w-6/12 xl:w-2/6">
				<div className="flex-btn flex-wrap gap-4">
					<h2 className="font-medium text-main text-md">Notifications</h2>
					<button type="button" className="rounded-md px-4 py-2 text-sm text-subMain hover:bg-text">
						Mark all read
					</button>
				</div>
				{/* notif */}
				<div className="flex max-h-[500px] flex-col gap-4 overflow-y-scroll">
					{notificationsData.map((item) => (
						<Link
							to={item.action === 1 ? '/chats' : '/appointments'}
							key={item.id}
							className="w-full rounded-lg border border-border p-4"
						>
							<div className="grid xs:grid-cols-12 items-center gap-4">
								<div className="xs:col-span-2">
									<div
										className={`${item.action === 1 ? 'bg-subMain text-white' : 'bg-text text-subMain'}h-12 w-12 flex-colo rounded-full border-[.5px] border-subMain text-md`}
									>
										{item.action === 1 ? <MdOutlineChat /> : <BiCalendar />}
									</div>
								</div>
								<div className="xs:col-span-10 ">
									{item.action === 1 ? (
										<p className="text-sm text-textGray">
											<span className="font-medium text-main">{item.user.title}</span> Sent you message
										</p>
									) : (
										<p className="text-sm text-textGray">
											Recent appointment with <span className="font-medium text-main">{item.user.title}</span> at 2:00
											PM
										</p>
									)}
									<div className="flex-btn gap-4">
										<p className="mt-2 font-light text-textGray text-xs">{item.time}</p>
										<p className="text-textGray text-xs">2:00 PM</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</Menu.Items>
		</Menu>
	)
}

export default NotificationComp
