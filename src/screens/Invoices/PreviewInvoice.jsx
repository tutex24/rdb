import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlinePrinter } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { IoArrowBackOutline } from 'react-icons/io5'
import { MdOutlineCloudDownload } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../Layout'
import { invoicesData } from '../../components/Datas'
import PaymentModal from '../../components/Modals/PaymentModal'
import ShareModal from '../../components/Modals/ShareModal'
import SenderReceverComp from '../../components/SenderReceverComp'
import { InvoiceProductsTable } from '../../components/Tables'

function PreviewInvoice() {
	const { id } = useParams()
	const [isOpen, setIsoOpen] = useState(false)
	const [isShareOpen, setIsShareOpen] = useState(false)

	const buttonClass =
		'bg-subMain flex-rows gap-3 bg-opacity-5 text-subMain rounded-lg border border-subMain border-dashed px-4 py-3 text-sm'

	const invoice = invoicesData.find((invoice) => invoice.id.toString() === id)

	return (
		<Layout>
			{isOpen && (
				<PaymentModal
					isOpen={isOpen}
					closeModal={() => {
						setIsoOpen(false)
					}}
				/>
			)}
			{isShareOpen && (
				<ShareModal
					isOpen={isShareOpen}
					closeModal={() => {
						setIsShareOpen(false)
					}}
				/>
			)}
			<div className="flex-btn flex-wrap gap-4">
				<div className="flex items-center gap-4">
					<Link to="/invoices" className="rounded-lg border border-subMain border-dashed bg-white px-4 py-3 text-md">
						<IoArrowBackOutline />
					</Link>
					<h1 className="font-semibold text-xl">Preview Invoice</h1>
				</div>
				<div className="flex flex-wrap items-center gap-4">
					{/* button */}
					<button
						type="button"
						onClick={() => {
							setIsShareOpen(true)
						}}
						className={buttonClass}
					>
						Share <RiShareBoxLine />
					</button>
					<button
						type="button"
						onClick={() => {
							toast.error('This feature is not available yet')
						}}
						className={buttonClass}
					>
						Download <MdOutlineCloudDownload />
					</button>
					<button
						type="button"
						onClick={() => {
							toast.error('This feature is not available yet')
						}}
						className={buttonClass}
					>
						Print <AiOutlinePrinter />
					</button>
					<Link to={`/invoices/edit/${invoice?.id}`} className={buttonClass}>
						Edit <FiEdit />
					</Link>
					<button
						type="button"
						onClick={() => {
							setIsoOpen(true)
						}}
						className="rounded-lg bg-subMain px-6 py-3 text-sm text-white"
					>
						Generate To Payment
					</button>
				</div>
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
						<img src="/images/logo.png" alt="logo" className=" h-12 object-contain" />
					</div>

					<div className="flex flex-col gap-4 sm:items-end">
						<h6 className="font-medium text-xs">#{invoice?.id}</h6>

						<div className="flex gap-4">
							<p className="font-extralight text-sm">Date:</p>
							<h6 className="font-medium text-xs">{invoice?.createdDate}</h6>
						</div>
						<div className="flex gap-4">
							<p className="font-extralight text-sm">Due Date:</p>
							<h6 className="font-medium text-xs">{invoice?.dueDate}</h6>
						</div>
					</div>
				</div>
				{/* sender and recever */}
				<SenderReceverComp item={invoice.to} functions={{}} button={false} />
				{/* products */}
				<div className="mt-8 grid grid-cols-6 gap-6">
					<div className="col-span-6 overflow-hidden rounded-xl border border-border p-6 lg:col-span-4">
						<InvoiceProductsTable data={invoice?.items} functions={{}} button={false} />
					</div>
					<div className="col-span-6 flex flex-col gap-6 lg:col-span-2">
						<div className="flex-btn gap-4">
							<p className="font-extralight text-sm">Currency:</p>
							<h6 className="font-medium text-sm">USD ($)</h6>
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
						<div className="w-full rounded-lg border border-border p-4">
							<h1 className="font-medium text-sm">Notes</h1>
							<p className="mt-2 font-light text-xs leading-5">
								Thank you for your business. We hope to work with you again soon. You can pay your invoice online at
								www.example.com/payments
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default PreviewInvoice
