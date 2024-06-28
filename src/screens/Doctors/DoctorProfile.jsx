import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineMarkChatUnread } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Layout from '../../PrivateLayout'
import Access from '../../components/Access'
import { doctorTab } from '../../components/Datas'
import AppointmentsUsed from '../../components/UsedComp/AppointmentsUsed'
import ChangePassword from '../../components/UsedComp/ChangePassword'
import InvoiceUsed from '../../components/UsedComp/InvoiceUsed'
import PatientsUsed from '../../components/UsedComp/PatientsUsed'
import PaymentsUsed from '../../components/UsedComp/PaymentUsed'
import PersonalInfo from '../../components/UsedComp/PersonalInfo'
import ReviewsUsed from '../../components/UsedComp/ReviewUsed'

function DoctorProfile() {
	const [activeTab, setActiveTab] = React.useState(1)
	const [access, setAccess] = React.useState({})

	const tabPanel = () => {
		switch (activeTab) {
			case 1:
				return <PersonalInfo titles={true} />
			case 2:
				return <PatientsUsed />
			case 3:
				return <AppointmentsUsed doctor={true} />
			case 4:
				return <PaymentsUsed doctor={true} />
			case 5:
				return <InvoiceUsed />
			case 6:
				return <ReviewsUsed />
			case 7:
				return <Access setAccess={setAccess} />
			case 8:
				return <ChangePassword />
			default:
				return
		}
	}

	return (
		<Layout>
			<div className="flex items-center gap-4">
				<Link to={-1} className="rounded-lg border border-subMain border-dashed bg-white px-4 py-3 text-md">
					<IoArrowBackOutline />
				</Link>
				<h1 className="font-semibold text-xl">Dr. Daudi Mburuge</h1>
			</div>
			<div className=" my-8 grid grid-cols-12 items-start gap-6">
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="100"
					data-aos-offset="200"
					className="top-28 col-span-12 flex-colo gap-6 rounded-xl border-[1px] border-border bg-white p-6 lg:sticky lg:col-span-4"
				>
					<img
						src="/images/user1.png"
						alt="setting"
						className="h-40 w-40 rounded-full border border-subMain border-dashed object-cover"
					/>
					<div className="flex-colo gap-3">
						<h2 className="font-semibold text-sm">Dr. Daudi Mburuge</h2>
						<p className="text-textGray text-xs">daudimburuge@gmail.com</p>
						<p className="text-xs">+254 712 345 678</p>
						<Link
							to="/chats"
							className="flex-rows gap-2 rounded-lg bg-subMain px-8 py-3 font-semibold text-white text-xs"
						>
							<MdOutlineMarkChatUnread className=" text-base" /> Start Chat
						</Link>
					</div>
					{/* tabs */}
					<div className="w-full flex-colo gap-3 px-2 2xl:px-12">
						{doctorTab.map((tab, index) => (
							<button
								type="button"
								onClick={() => setActiveTab(tab.id)}
								key={index}
								className={`${activeTab === tab.id ? 'bg-text text-subMain' : 'bg-dry text-main hover:bg-text hover:text-subMain'}flex w-full items-center gap-4 rounded p-4 text-xs`}
							>
								<tab.icon className="text-lg" /> {tab.title}
							</button>
						))}
					</div>
				</div>
				{/* tab panel */}
				<div
					data-aos="fade-left"
					data-aos-duration="1000"
					data-aos-delay="100"
					data-aos-offset="200"
					className="col-span-12 rounded-xl border-[1px] border-border bg-white p-6 lg:col-span-8"
				>
					{tabPanel()}
				</div>
			</div>
		</Layout>
	)
}

export default DoctorProfile
