import React from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown, BiPlus } from 'react-icons/bi'
import { MdOutlineCloudDownload } from 'react-icons/md'
import Layout from '../Layout'
import { servicesData, sortsDatas } from '../components/Datas'
import { Button, Select } from '../components/Form'
import AddEditServiceModal from '../components/Modals/AddEditServiceModal'
import { ServiceTable } from '../components/Tables'

function Services() {
	const [isOpen, setIsOpen] = React.useState(false)
	const [data, setData] = React.useState({})
	const [status, setStatus] = React.useState(sortsDatas.service[0])

	const onCloseModal = () => {
		setIsOpen(false)
		setData({})
	}

	const onEdit = (datas) => {
		setIsOpen(true)
		setData(datas)
	}

	return (
		<Layout>
			{isOpen && <AddEditServiceModal datas={data} isOpen={isOpen} closeModal={onCloseModal} />}
			{/* add button */}
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="button-fb fixed right-12 bottom-8 z-50 h-16 w-16 flex-colo animate-bounce rounded-full border border-border bg-subMain text-white"
			>
				<BiPlus className="text-2xl" />
			</button>
			{/*  */}
			<h1 className="font-semibold text-xl">Services</h1>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="100"
				data-aos-offset="200"
				className="my-8 rounded-xl border-[1px] border-border bg-white p-5"
			>
				{/* datas */}

				<div className="grid grid-cols-1 gap-2 md:grid-cols-6">
					<div className="grid xs:grid-cols-2 items-center gap-2 md:col-span-5 lg:grid-cols-4">
						<input
							type="text"
							placeholder='Search "teeth cleaning"'
							className="h-14 w-full rounded-md border border-border bg-dry px-4 text-main text-sm"
						/>
						<Select selectedPerson={status} setSelectedPerson={setStatus} datas={sortsDatas.service}>
							<div className="w-full flex-btn rounded-lg border border-border bg-dry p-4 font-light text-main text-sm focus:border focus:border-subMain">
								{status.name} <BiChevronDown className="text-xl" />
							</div>
						</Select>
					</div>

					{/* export */}
					<Button
						label="Export"
						Icon={MdOutlineCloudDownload}
						onClick={() => {
							toast.error('Exporting is not available yet')
						}}
					/>
				</div>
				<div className="mt-8 w-full overflow-x-scroll">
					<ServiceTable data={servicesData.slice(1, 100)} onEdit={onEdit} />
				</div>
			</div>
		</Layout>
	)
}

export default Services
