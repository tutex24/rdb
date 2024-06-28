import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown, BiPlus } from 'react-icons/bi'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { memberData, servicesData, sortsDatas } from '../Datas'
import { Button, Checkbox, DatePickerComp, Input, Select, Textarea, TimePickerComp } from '../Form'
import Modal from './Modal'
import PatientMedicineServiceModal from './PatientMedicineServiceModal'

// edit member data
const doctorsData = memberData.map((item) => {
	return {
		id: item.id,
		name: item.title,
	}
})

function AddAppointmentModal({ closeModal, isOpen, datas }) {
	const [services, setServices] = useState(servicesData[0])
	const [startDate, setStartDate] = useState(new Date())
	const [startTime, setStartTime] = useState(new Date())
	const [endTime, setEndTime] = useState(new Date())
	const [status, setStatus] = useState(sortsDatas.status[0])
	const [doctors, setDoctors] = useState(doctorsData[0])
	const [shares, setShares] = useState({
		email: false,
		sms: false,
		whatsapp: false,
	})
	const [open, setOpen] = useState(false)

	// on change share
	const onChangeShare = (e) => {
		setShares({ ...shares, [e.target.name]: e.target.checked })
	}

	// set data
	useEffect(() => {
		if (datas?.title) {
			setServices(datas?.service)
			setStartTime(datas?.start)
			setEndTime(datas?.end)
			setShares(datas?.shareData)
		}
	}, [datas])

	return (
		<Modal
			closeModal={closeModal}
			isOpen={isOpen}
			title={datas?.title ? 'Edit Appointment' : 'New Appointment'}
			width={'max-w-3xl'}
		>
			{open && <PatientMedicineServiceModal closeModal={() => setOpen(!isOpen)} isOpen={open} patient={true} />}
			<div className="flex-colo gap-6">
				<div className="grid w-full items-center gap-4 sm:grid-cols-12">
					<div className="sm:col-span-10">
						<Input
							label="Patient Name"
							color={true}
							placeholder={datas?.title ? datas.title : 'Select Patient and patient name will appear here'}
						/>
					</div>
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="flex-rows rounded border border-subMain border-dashed py-3.5 text-sm text-subMain sm:col-span-2 sm:mt-6"
					>
						<BiPlus /> Add
					</button>
				</div>

				<div className="grid w-full gap-4 sm:grid-cols-2">
					<div className="flex w-full flex-col gap-3">
						<p className="text-black text-sm">Purpose of visit</p>
						<Select selectedPerson={services} setSelectedPerson={setServices} datas={servicesData}>
							<div className="w-full flex-btn rounded-lg border border-border p-4 font-light text-sm text-textGray focus:border focus:border-subMain">
								{services.name} <BiChevronDown className="text-xl" />
							</div>
						</Select>
					</div>
					{/* date */}
					<DatePickerComp label="Date of visit" startDate={startDate} onChange={(date) => setStartDate(date)} />
				</div>

				<div className="grid w-full gap-4 sm:grid-cols-2">
					<TimePickerComp label="Start time" startDate={startTime} onChange={(date) => setStartTime(date)} />
					<TimePickerComp label="End time" startDate={endTime} onChange={(date) => setEndTime(date)} />
				</div>

				{/* status && doctor */}
				<div className="grid w-full gap-4 sm:grid-cols-2">
					<div className="flex w-full flex-col gap-3">
						<p className="text-black text-sm">Doctor</p>
						<Select selectedPerson={doctors} setSelectedPerson={setDoctors} datas={doctorsData}>
							<div className="w-full flex-btn rounded-lg border border-border p-4 font-light text-sm text-textGray focus:border focus:border-subMain">
								{doctors.name} <BiChevronDown className="text-xl" />
							</div>
						</Select>
					</div>
					<div className="flex w-full flex-col gap-3">
						<p className="text-black text-sm">Status</p>
						<Select selectedPerson={status} setSelectedPerson={setStatus} datas={sortsDatas.status}>
							<div className="w-full flex-btn rounded-lg border border-border p-4 font-light text-sm text-textGray focus:border focus:border-subMain">
								{status.name} <BiChevronDown className="text-xl" />
							</div>
						</Select>
					</div>
				</div>

				{/* des */}
				<Textarea
					label="Description"
					placeholder={datas?.message ? datas.message : 'She will be coming for a checkup.....'}
					color={true}
					rows={5}
				/>

				{/* share */}
				<div className="flex w-full flex-col gap-8">
					<p className="text-black text-sm">Share with patient via</p>
					<div className="flex flex-wrap gap-4 sm:flex-nowrap">
						<Checkbox name="email" checked={shares.email} onChange={onChangeShare} label="Email" />
						<Checkbox name="sms" checked={shares.sms} onChange={onChangeShare} label="SMS" />
						<Checkbox checked={shares.whatsapp} name="whatsapp" onChange={onChangeShare} label="WhatsApp" />
					</div>
				</div>
				{/* buttones */}
				<div className="grid w-full gap-4 sm:grid-cols-2">
					<button
						type="button"
						onClick={closeModal}
						className="rounded-lg bg-red-600 bg-opacity-5 p-4 font-light text-red-600 text-sm"
					>
						{datas?.title ? 'Discard' : 'Cancel'}
					</button>
					<Button
						label="Save"
						Icon={HiOutlineCheckCircle}
						onClick={() => {
							toast.error('This feature is not available yet')
						}}
					/>
				</div>
			</div>
		</Modal>
	)
}

export default AddAppointmentModal
