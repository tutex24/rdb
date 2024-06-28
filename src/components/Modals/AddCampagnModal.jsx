import React, { useEffect } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineTextsms } from 'react-icons/md'
import { TbBrandWhatsapp } from 'react-icons/tb'
import EmailComp from '../Campaign/EmailComp'
import SmsComp from '../Campaign/SmsComp'
import WhatsappComp from '../Campaign/Whatsapp'
import Modal from './Modal'

function CampaignModal({ closeModal, isOpen, data }) {
	const [indexs, setIndexs] = React.useState(0)

	// change tab
	const changeTab = (value) => {
		setIndexs(value)
	}

	const tabs = [
		{
			title: 'Email',
			value: 'email',
			icon: TbBrandWhatsapp,
		},
		{
			title: 'Whatsapp',
			value: 'whatsapp',
			icon: HiOutlineMail,
		},

		{
			title: 'SMS',
			value: 'sms',
			icon: MdOutlineTextsms,
		},
	]

	// edit
	useEffect(() => {
		if (data?.id) {
			if (data?.type === 'email') {
				setIndexs(0)
			} else if (data?.type === 'whatsapp') {
				setIndexs(1)
			} else if (data?.type === 'sms') {
				setIndexs(2)
			}
		}
	}, [data])

	return (
		<Modal
			closeModal={closeModal}
			isOpen={isOpen}
			title={data?.id ? 'View Campaign' : 'Create Campaign'}
			width={'max-w-3xl'}
		>
			<div className="flex-colo gap-6">
				{/* radio */}
				{!data?.id && (
					<div className="grid w-full gap-4 overflow-hidden rounded-md bg-dry sm:grid-cols-3 sm:rounded-full">
						{tabs.map((item, index) => (
							<button
								type="button"
								onClick={() => changeTab(index)}
								key={index}
								className={`flex items-center gap-4 rounded-full p-2 ${
									indexs === 0 && item.value === 'email'
										? 'bg-subMain text-white'
										: indexs === 1 && item.value === 'whatsapp'
											? 'bg-subMain text-white'
											: indexs === 2 && item.value === 'sms'
												? 'bg-subMain text-white'
												: 'text-black'
								}`}
							>
								<div
									className={`${
										indexs === 0 && item.value === 'email'
											? 'bg-white text-black'
											: indexs === 1 && item.value === 'whatsapp'
												? 'bg-white text-black'
												: indexs === 2 && item.value === 'sms'
													? 'bg-white text-black'
													: 'bg-white'
									} h-10 w-10 flex-colo rounded-full text-md`}
								>
									<item.icon />
								</div>
								<h5 className="font-medium text-xs ">{item.title}</h5>
							</button>
						))}
					</div>
				)}

				{/* compo */}
				{indexs === 0 && <EmailComp data={data} />}
				{indexs === 2 && <SmsComp data={data} />}
				{indexs === 1 && <WhatsappComp data={data} />}
			</div>
		</Modal>
	)
}

export default CampaignModal
