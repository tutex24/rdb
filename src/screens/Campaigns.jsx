import React from 'react'
import { toast } from 'react-hot-toast'
import { BiDotsVerticalRounded, BiPlus } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { TbBrandWhatsapp, TbMessage } from 'react-icons/tb'
import Layout from '../PrivateLayout'
import { campaignData } from '../components/Datas'
import { Button, MenuSelect } from '../components/Form'
import CampaignModal from '../components/Modals/AddCampagnModal'

function Campaings() {
	const [isOpen, setIsOpen] = React.useState(false)
	const [data, setData] = React.useState({})

	const closeModal = () => {
		setIsOpen(!isOpen)
		setData({})
	}

	const actions = [
		{
			title: 'View',
			icon: FiEye,
			onClick: (data) => {
				setIsOpen(true)
				setData(data)
			},
		},
		{
			title: 'Delete',
			icon: RiDeleteBinLine,
			onClick: () => {
				toast.error('This feature is not available yet')
			},
		},
	]

	return (
		<Layout>
			{isOpen && <CampaignModal isOpen={isOpen} closeModal={closeModal} data={data} />}
			<div className="flex-btn flex-wrap items-center gap-4">
				<h1 className="font-semibold text-xl">Campaings</h1>
				<div className="xs:w-56">
					<Button
						label="New Campaing"
						Icon={BiPlus}
						onClick={() => {
							closeModal()
						}}
					/>
				</div>
			</div>

			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="100"
				data-aos-offset="200"
				className="my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
			>
				{campaignData.map((item, index) => (
					<div key={index} className="rounded-xl border-[1px] border-border bg-white p-5">
						<div className="grid grid-cols-12 items-center gap-4 border-border border-b pb-4">
							<div className="col-span-2">
								<div
									className={`${item.type === 'sms' && 'bg-blue-500 text-blue-500'}${item.type === 'email' && 'bg-orange-500 text-orange-500'}${item.type === 'whatsapp' && 'bg-green-500 text-green-500'}h-12 w-full flex-colo rounded bg-opacity-10 text-lg`}
								>
									{item.type === 'email' && <HiOutlineMail />}
									{item.type === 'sms' && <TbMessage />}
									{item.type === 'whatsapp' && <TbBrandWhatsapp />}
								</div>
							</div>
							<div className="col-span-8">
								<h1 className="font-light text-sm">{item.title}</h1>
								<p className="mt-1 font-medium text-xs">{item.sendTo}</p>
							</div>
							<div className="col-span-2">
								<MenuSelect datas={actions} item={item}>
									<div className="h-12 w-12 flex-colo rounded text-lg hover:bg-subMain hover:bg-opacity-10 hover:text-subMain">
										<BiDotsVerticalRounded />
									</div>
								</MenuSelect>
							</div>
						</div>
						{/* message */}
						<div className="mt-4 flex flex-col gap-3">
							<h4 className="font-medium text-sm">Message</h4>
							<p className="text-textGray text-xs leading-5">{item.action.message}....</p>
							<div className="flex gap-2">
								<span className="rounded-xl border border-border bg-dry px-4 py-2 text-textGray text-xs">
									{item.date}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</Layout>
	)
}

export default Campaings
