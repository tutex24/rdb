import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown, BiPlus } from 'react-icons/bi'
import { BsSend } from 'react-icons/bs'
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../Layout'
import { invoicesData, sortsDatas } from '../../components/Datas'
import { Button, FromToDate, Input, Select, Textarea } from '../../components/Form'
import AddItemModal from '../../components/Modals/AddItemInvoiceModal'
import PatientMedicineServiceModal from '../../components/Modals/PatientMedicineServiceModal'
import SenderReceverComp from '../../components/SenderReceverComp'
import { InvoiceProductsTable } from '../../components/Tables'
function EditInvoice() {
	const { id } = useParams()
	const [dateRange, setDateRange] = useState([new Date(), new Date(new Date().setDate(new Date().getDate() + 7))])
	const [startDate, endDate] = dateRange
	const [isOpen, setIsOpen] = useState(false)
	const [itemOpen, setItemOpen] = useState(false)
	const [currency, setCurrency] = useState(sortsDatas.currency[0])

	// date picker
	const onChangeDates = (update) => {
		setDateRange(update)
	}

	const invoice = invoicesData.find((invoice) => invoice.id.toString() === id)

	return (
		<Layout>
			{isOpen && <PatientMedicineServiceModal closeModal={() => setIsOpen(!isOpen)} isOpen={isOpen} patient={true} />}
			{itemOpen && <AddItemModal closeModal={() => setItemOpen(!itemOpen)} isOpen={itemOpen} />}
			<div className="flex items-center gap-4">
				<Link to="/invoices" className="rounded-lg border border-subMain border-dashed bg-white px-4 py-3 text-md">
					<IoArrowBackOutline />
				</Link>
				<h1 className="font-semibold text-xl">Edit Invoice</h1>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="100"
				data-aos-offset="200"
				className="my-8 rounded-xl border-[1px] border-border bg-white p-5"
			>
				{/* header */}
				<div className="grid grid-cols-1 items-center gap-2 sm:grid-cols-2 lg:grid-cols-4">
					<div className="lg:col-span-3">
						<img src="/images/logo.png" alt="logo" className="h-12 object-contain" />
					</div>

					<div className="flex flex-col gap-4">
						<FromToDate startDate={startDate} endDate={endDate} label="Dates" onChange={onChangeDates} />
					</div>
				</div>
				{/* sender and recever */}
				<SenderReceverComp
					item={invoice?.to}
					functions={{
						openModal: () => {
							setIsOpen(!isOpen)
						},
					}}
					button={true}
				/>
				{/* products */}
				<div className="mt-8 grid grid-cols-6 gap-6">
					<div className="col-span-6 overflow-hidden rounded-xl border border-border p-6 lg:col-span-4">
						<InvoiceProductsTable
							data={invoice?.items}
							functions={{
								deleteItem: (id) => {
									toast.error('This feature is not available yet')
								},
							}}
							button={true}
						/>
						{/* add */}
						<button
							type="button"
							onClick={() => setItemOpen(!itemOpen)}
							className=" mt-4 w-full flex-rows gap-2 rounded-lg border border-subMain border-dashed py-4 text-sm text-subMain"
						>
							<BiPlus /> Add Item
						</button>
					</div>
					<div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
						<Select selectedPerson={currency} setSelectedPerson={setCurrency} datas={sortsDatas?.currency}>
							<div className="flex h-14 w-full items-center justify-between rounded-md border border-border px-4 text-main text-xs">
								<p>{currency?.name}</p>
								<BiChevronDown className="text-xl" />
							</div>
						</Select>
						<div className="grid gap-6 sm:grid-cols-2">
							<Input label="Discount" color={true} type="number" placeholder={'3000'} />
							<Input label="Tax(%)" color={true} type="number" placeholder={'3'} />
						</div>
						<div className="flex-btn gap-4">
							<p className="font-extralight text-sm">Sub Total:</p>
							<h6 className="font-medium text-sm">$459</h6>
						</div>
						<div className="flex-btn gap-4">
							<p className="font-extralight text-sm">Discount:</p>
							<h6 className="font-medium text-sm">$49</h6>
						</div>
						<div className="flex-btn gap-4">
							<p className="font-extralight text-sm">Tax:</p>
							<h6 className="font-medium text-sm">$4.90</h6>
						</div>
						<div className="flex-btn gap-4">
							<p className="font-extralight text-sm">Grand Total:</p>
							<h6 className="font-medium text-green-600 text-sm">$6000</h6>
						</div>
						{/* notes */}
						<Textarea
							label="Notes"
							placeholder="Thank you for your business. We hope to work with you again soon!"
							color={true}
							rows={3}
						/>
						{/* button */}
						<Button
							label="Update"
							onClick={() => {
								toast.error('This feature is not available yet')
							}}
							Icon={BsSend}
						/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default EditInvoice
