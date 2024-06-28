import { useNavigate } from 'react-router-dom'
import { invoicesData } from '../Datas'
import { InvoiceUsedTable } from '../Tables'

function InvoiceUsed() {
	const navigate = useNavigate()
	// preview
	const preview = (id) => {
		navigate(`/invoices/preview/${id}`)
	}
	return (
		<div className="w-full">
			<h1 className="mb-6 font-medium text-sm">Invoices</h1>
			<div className="w-full overflow-x-scroll">
				<InvoiceUsedTable
					data={invoicesData}
					functions={{
						preview: preview,
					}}
				/>
			</div>
		</div>
	)
}

export default InvoiceUsed
