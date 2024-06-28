import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { IoCallOutline, IoCopyOutline, IoSearchSharp, IoVideocamOutline } from 'react-icons/io5'
import { LiaReplySolid } from 'react-icons/lia'
import { MdOutlineImage, MdOutlineKeyboardVoice, MdOutlineLink } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { convData } from '../../components/Datas'
import { MenuSelect } from '../../components/Form'
import ChatVideoAndCall from '../../components/Modals/ChatVideoAndCallModal'

const DropDown1 = [
	{
		title: 'Reply',
		icon: LiaReplySolid,
		onClick: (data) => {},
	},
	{
		title: 'Copy',
		icon: IoCopyOutline,
		onClick: () => {},
	},
	{
		title: 'Edit',
		icon: FiEdit,
		onClick: (data) => {},
	},
	{
		title: 'Delete',
		icon: RiDeleteBin6Line,
		onClick: () => {},
	},
]

function Coversation() {
	const [isOpen, setIsOpen] = React.useState(false)
	const [video, setVideo] = React.useState(false)
	const closeModal = () => {
		setIsOpen(!isOpen)
	}
	return (
		<>
			{isOpen && <ChatVideoAndCall isOpen={isOpen} closeModal={closeModal} video={video} />}{' '}
			<div className="space-y-6">
				{/* head */}
				<div className="flex-btn gap-4 rounded-xl border border-gray-100 bg-white p-2">
					<div className="xs:block hidden">
						<div className="flex-rows gap-2 px-2 py-4">
							<Link to="/doctors/preview/1" className="relative">
								<img className="h-10 w-10 rounded-full border object-cover" alt="user" src="/images/user1.png" />
								<span className="absolute top-0 right-0 h-[10px] w-[10px] rounded-full border border-white bg-subMain" />
							</Link>
							<div className="space-y-1 pl-2">
								<h2 className="font-medium text-xs">Minah mmassy</h2>
								<p className="truncate text-textGray text-xs">Active 4hr ago</p>
							</div>
						</div>
					</div>

					{/* buttones */}
					<div className="flex-rows gap-12 xs:gap-2">
						<button
							type="button"
							onClick={() => {
								setVideo(false)
								closeModal()
							}}
							className="transitions h-10 w-10 flex-colo rounded text-xl hover:bg-greyed"
						>
							<IoCallOutline />
						</button>
						<button
							type="button"
							onClick={() => {
								setVideo(true)
								closeModal()
							}}
							className="transitions h-10 w-10 flex-colo rounded text-xl hover:bg-greyed"
						>
							<IoVideocamOutline />
						</button>
						<button type="button" className="transitions h-10 w-10 flex-colo rounded text-xl hover:bg-greyed">
							<IoSearchSharp />
						</button>
					</div>
				</div>
				{/* conversation */}
				<div className="max-h-[300px] space-y-4 overflow-y-scroll sm:max-h-[650px] sm:px-4">
					{convData.map((conv) => (
						<div
							key={conv?.id}
							id={conv?.id}
							className={`flex w-full gap-4 ${conv?.value?.me ? 'flex-row-reverse' : ''}`}
						>
							<img src={conv?.user?.image} alt={conv?.user?.title} className="h-10 w-10 rounded-full object-cover" />
							<div className="space-y-1">
								<div
									className={`rounded px-4 py-3 text-xs ${
										conv?.value?.me ? 'bg-subMain text-white' : 'border border-gray-100 bg-white text-main'
									}`}
								>
									{conv?.value?.image ? (
										<img src={conv?.imageUrl} alt="user" className="h-32 w-32 rounded object-cover" />
									) : (
										<p className="max-w-68 text-wrap leading-5">{conv?.text}</p>
									)}
								</div>
								<p className="text-textGray text-xs">{conv?.time}</p>
							</div>
							<div className="">
								<MenuSelect datas={DropDown1} item={{}}>
									<div className="text-textGray">
										<BiDotsHorizontalRounded />
									</div>
								</MenuSelect>
							</div>
						</div>
					))}
				</div>
				{/* textarea */}
				<div className="grid grid-cols-12 gap-2 rounded bg-white p-4">
					<input
						className="col-span-8 xs:col-span-9 rounded border border-border px-2 py-4 text-xs"
						placeholder="Write text here.."
					/>
					<div className="col-span-4 xs:col-span-3 flex-btn gap-2">
						<button type="button" className="transitions h-10 w-10 flex-colo rounded text-xl hover:bg-greyed">
							<MdOutlineKeyboardVoice />
						</button>
						<button type="button" className="transitions h-10 w-10 flex-colo rounded text-xl hover:bg-greyed">
							<MdOutlineImage />
						</button>
						<button type="button" className="transitions h-10 w-10 flex-colo rounded text-xl hover:bg-greyed">
							<MdOutlineLink />
						</button>
						<button
							type="button"
							className="transitions hidden h-10 w-28 items-center justify-center rounded bg-main text-white text-xs md:flex"
						>
							Send
						</button>
					</div>
				</div>
				<button
					type="button"
					className="transitions flex h-12 w-full items-center justify-center rounded bg-main text-white text-xs md:hidden"
				>
					Send
				</button>
			</div>
		</>
	)
}

export default Coversation
