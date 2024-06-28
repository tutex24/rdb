import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Layout from '../../PrivateLayout'
import { patientTab } from '../../components/Datas'
import AppointmentsUsed from '../../components/UsedComp/AppointmentsUsed'
import InvoiceUsed from '../../components/UsedComp/InvoiceUsed'
import PersonalInfo from '../../components/UsedComp/PersonalInfo'
import HealthInfomation from './HealthInfomation'
import MedicalRecord from './MedicalRecord'
import PatientImages from './PatientImages'

function PatientProfile() {
	const [activeTab, setActiveTab] = React.useState(1)

	const tabPanel = () => {
		switch (activeTab) {
			case 1:
				return <MedicalRecord />
			case 2:
				return <AppointmentsUsed doctor={false} />
			case 3:
				return <InvoiceUsed />
			case 5:
				return <PatientImages />
			case 7:
				return <PersonalInfo titles={false} />
			case 8:
				return <HealthInfomation />
			default:
				return
		}
	}

	return (
		<Layout>
			<div className="flex items-center gap-4">
				<Link to="/patients" className="rounded-lg border border-subMain border-dashed bg-white px-4 py-3 text-md">
					<IoArrowBackOutline />
				</Link>
				<h1 className="font-semibold text-xl">Amani Mmassy</h1>
			</div>
			<div className=" my-8 grid grid-cols-12 items-start gap-6">
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					data-aos-delay="100"
					data-aos-offset="200"
					className="top-28 col-span-12 flex-colo gap-6 rounded-xl border-[1px] border-border bg-white p-6 lg:sticky lg:col-span-4"
				>
					{/* <img
            src="/images/user7.png"
            alt="setting"
            className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
          /> */}
					<div className="flex-colo gap-2">
						<h2 className="font-semibold text-sm">Amani Mmassy</h2>
						<p className="text-textGray text-xs">amanimmassy@gmail.com</p>
						<p className="text-xs">+254 712 345 678</p>
					</div>
					{/* tabs */}
					<div className="w-full flex-colo gap-3 px-2 xl:px-12">
						{patientTab.map((tab, index) => (
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

export default PatientProfile
