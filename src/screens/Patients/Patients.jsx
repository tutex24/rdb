import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown, BiPlus, BiTime } from 'react-icons/bi'
import { BsCalendarMonth } from 'react-icons/bs'
import { MdFilterList, MdOutlineCalendarMonth } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../../Layout'
import { memberData, sortsDatas } from '../../components/Datas'
import { Button, FromToDate, Select } from '../../components/Form'
import { PatientTable } from '../../components/Tables'

function Patients() {
	const [status, setStatus] = useState(sortsDatas.filterPatient[0])
	const [gender, setGender] = useState(sortsDatas.genderFilter[0])
	const [dateRange, setDateRange] = useState([new Date(), new Date()])
	const [startDate, endDate] = dateRange
	const navigate = useNavigate()

	const sorts = [
		{
			id: 2,
			selected: status,
			setSelected: setStatus,
			datas: sortsDatas.filterPatient,
		},
		{
			id: 3,
			selected: gender,
			setSelected: setGender,
			datas: sortsDatas.genderFilter,
		},
	]
	// boxes
	const boxes = [
		{
			id: 1,
			title: 'Today Patients',
			value: '10',
			color: ['bg-subMain', 'text-subMain'],
			icon: BiTime,
		},
		{
			id: 2,
			title: 'Monthly Patients',
			value: '230',
			color: ['bg-orange-500', 'text-orange-500'],
			icon: BsCalendarMonth,
		},
		{
			id: 3,
			title: 'Yearly Patients',
			value: '1,500',
			color: ['bg-[#66B5A3]', 'text-[#66B5A3]'],
			icon: MdOutlineCalendarMonth,
		},
	]

	// preview
	const previewPayment = (id) => {
		navigate(`/patients/preview/${id}`)
	}

	return (
		<Layout>
			{/* add button */}
			<Link
				to="/patients/create"
				className="button-fb fixed right-12 bottom-8 z-50 h-16 w-16 flex-colo animate-bounce rounded-full border border-border bg-subMain text-white"
			>
				<BiPlus className="text-2xl" />
			</Link>
			<h1 className="font-semibold text-xl">Patients</h1>
			{/* boxes */}
			<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{boxes.map((box) => (
					<div key={box.id} className="flex-btn gap-4 rounded-xl border-[1px] border-border bg-white p-5">
						<div className="w-3/4">
							<h2 className="font-medium text-sm">{box.title}</h2>
							<h2 className="my-6 font-medium text-xl">{box.value}</h2>
							<p className="text-textGray text-xs">
								Total Patients <span className={box.color[1]}>{box.value}</span>{' '}
								{box.title === 'Today Patients'
									? 'today'
									: box.title === 'Monthly Patients'
										? 'this month'
										: 'this year'}
							</p>
						</div>
						<div className={`h-10 w-10 flex-colo rounded-md text-md text-white ${box.color[0]}`}>
							<box.icon />
						</div>
					</div>
				))}
			</div>
			{/* datas */}
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="10"
				data-aos-offset="200"
				className="my-8 rounded-xl border-[1px] border-border bg-white p-5"
			>
				<div className="grid grid-cols-1 xs:grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">
					<input
						type="text"
						placeholder='Search "Patients"'
						className="h-14 rounded-md border border-border bg-dry px-4 text-main text-sm"
					/>
					{/* sort  */}
					{sorts.map((item) => (
						<Select
							key={item.id}
							selectedPerson={item.selected}
							setSelectedPerson={item.setSelected}
							datas={item.datas}
						>
							<div className="flex h-14 w-full items-center justify-between rounded-md border border-border bg-dry px-4 text-main text-xs">
								<p>{item.selected.name}</p>
								<BiChevronDown className="text-xl" />
							</div>
						</Select>
					))}
					{/* date */}
					<FromToDate startDate={startDate} endDate={endDate} bg="bg-dry" onChange={(update) => setDateRange(update)} />
					{/* export */}
					<Button
						label="Filter"
						Icon={MdFilterList}
						onClick={() => {
							toast.error('Filter data is not available yet')
						}}
					/>
				</div>
				<div className="mt-8 w-full overflow-x-scroll">
					<PatientTable
						data={memberData}
						functions={{
							preview: previewPayment,
						}}
						used={false}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Patients
