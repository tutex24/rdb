import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown, BiPlus } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Layout from '../../PrivateLayout'
import { medicineData, memberData, patientImages, servicesData } from '../../components/Datas'
import { Button, Checkbox, Select, Textarea } from '../../components/Form'
import MedicineDosageModal from '../../components/Modals/MedicineDosage'
import { MedicineDosageTable } from '../../components/Tables'
import Uploader from '../../components/Uploader'

const doctorsData = memberData.map((item) => {
	return {
		id: item.id,
		name: item.title,
	}
})

function NewMedicalRecode() {
	const [doctors, setDoctors] = useState(doctorsData[0])
	const [isOpen, setIsOpen] = useState(false)
	const [treatmeants, setTreatmeants] = useState(
		servicesData.map((item) => {
			return {
				name: item.name,
				checked: false,
				price: item.price,
			}
		})
	)

	// on change treatmeants
	const onChangeTreatmeants = (e) => {
		const { name, checked } = e.target
		const newTreatmeants = treatmeants.map((item) => {
			if (item.name === name) {
				return {
					...item,
					checked: checked,
				}
			}
			return item
		})
		setTreatmeants(newTreatmeants)
	}

	return (
		<Layout>
			{
				// modal
				isOpen && (
					<MedicineDosageModal
						isOpen={isOpen}
						closeModal={() => {
							setIsOpen(false)
						}}
					/>
				)
			}
			<div className="flex items-center gap-4">
				<Link
					to={'/patients/preview/1'}
					className="rounded-lg border border-subMain border-dashed bg-white px-4 py-3 text-md"
				>
					<IoArrowBackOutline />
				</Link>
				<h1 className="font-semibold text-xl">New Medical Record</h1>
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
						src="/images/user7.png"
						alt="setting"
						className="h-40 w-40 rounded-full border border-subMain border-dashed object-cover"
					/>
					<div className="flex-colo gap-2">
						<h2 className="font-semibold text-sm">Amani Mmassy</h2>
						<p className="text-textGray text-xs">amanimmassy@gmail.com</p>
						<p className="text-xs">+254 712 345 678</p>
						<p className="rounded-full border-[0.5px] border-subMain bg-text px-4 py-1 font-medium text-subMain text-xs">
							45 yrs{' '}
						</p>
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
					<div className="flex w-full flex-col gap-5">
						{/* doctor */}
						<div className="flex w-full flex-col gap-3">
							<p className="text-black text-sm">Doctor</p>
							<Select selectedPerson={doctors} setSelectedPerson={setDoctors} datas={doctorsData}>
								<div className="w-full flex-btn rounded-lg border border-border p-4 font-light text-sm text-textGray focus:border focus:border-subMain">
									{doctors.name} <BiChevronDown className="text-xl" />
								</div>
							</Select>
						</div>
						{/* complains */}
						<Textarea label="Complains" color={true} rows={3} placeholder={'Sudden loss of vision,Red eyes ....'} />
						{/* Diagnosis */}
						<Textarea label="Diagnosis" color={true} rows={3} placeholder={'High blood pressure, Diabetes ....'} />
						{/* Vital Signs */}
						<Textarea label="Vital Signs" color={true} rows={3} placeholder={'Blood pressure, Pulse, ....'} />
						{/* Treatment */}
						<div className="flex w-full flex-col gap-4">
							<p className="text-black text-sm">Treatment</p>
							<div className="grid xs:grid-cols-2 gap-6 pb-6 md:grid-cols-3">
								{servicesData?.slice(1, 100).map((item) => (
									<Checkbox
										label={item.name}
										checked={treatmeants.find((i) => i.name === item.name).checked}
										onChange={onChangeTreatmeants}
										name={item.name}
										key={item.id}
									/>
								))}
							</div>
						</div>
						{/* medicine */}
						<div className="mb-6 flex w-full flex-col gap-4">
							<p className="text-black text-sm">Medicine</p>
							<div className="w-full overflow-x-scroll">
								<MedicineDosageTable
									data={medicineData?.slice(0, 3)}
									functions={{
										delete: (id) => {
											toast.error('This feature is not available yet')
										},
									}}
									button={true}
								/>
							</div>
							<button
								type="button"
								onClick={() => {
									setIsOpen(true)
								}}
								className=" w-full flex-rows gap-2 rounded-lg border border-subMain border-dashed py-4 text-sm text-subMain"
							>
								<BiPlus /> Add Medicine
							</button>
						</div>
						{/* attachment */}
						<div className="flex w-full flex-col gap-4">
							<p className="text-black text-sm">Attachments</p>
							<div className="grid w-full xs:grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
								{patientImages?.slice(0, 4)?.map((image, i) => (
									<div key={i} className="relative w-full">
										<img src={image} alt="patient" className="w-full rounded-lg object-cover md:h-40" />
										<button
											type="button"
											onClick={() => toast.error('This feature is not available yet.')}
											className="-top-1 -right-1 absolute h-8 w-8 flex-colo rounded-full bg-white"
										>
											<FaTimes className="text-red-500" />
										</button>
									</div>
								))}
							</div>
							<Uploader setImage={{}} />
						</div>
						{/* submit */}
						<Button
							type="button"
							label={'Save'}
							Icon={HiOutlineCheckCircle}
							onClick={() => {
								toast.error('This feature is not available yet')
							}}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default NewMedicalRecode
