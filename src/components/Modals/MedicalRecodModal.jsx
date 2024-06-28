import { FiEye } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { medicineData } from '../Datas'
import { Button } from '../Form'
import { MedicineDosageTable } from '../Tables'
import Modal from './Modal'

function MedicalRecodModal({ closeModal, isOpen, datas }) {
	const navigate = useNavigate()
	return (
		<Modal closeModal={closeModal} isOpen={isOpen} title="12 May 2021" width={'max-w-4xl'}>
			<div className="flex-colo gap-6">
				{datas?.data?.slice(0, 3).map((data) => (
					<div key={data.id} className="grid w-full grid-cols-12 gap-4">
						<div className="col-span-12 md:col-span-3">
							<p className="font-medium text-sm">{data.title}:</p>
						</div>
						<div className="col-span-12 rounded-xl border-[1px] border-border p-6 md:col-span-9">
							<p className="font-light text-main text-xs leading-5">{data.value}</p>
						</div>
					</div>
				))}
				{/* visual sign */}
				<div className="grid w-full grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-3">
						<p className="font-medium text-sm">Vital Signs:</p>
					</div>
					<div className="col-span-12 rounded-xl border-[1px] border-border p-6 md:col-span-9">
						<p className="font-light text-main text-xs leading-5">
							{datas?.vitalSigns?.map((item) => (
								// separate each item with comma
								<span key={item} className="mr-1">
									{item},
								</span>
							))}
						</p>
					</div>
				</div>
				{/* medicine */}
				<div className="grid w-full grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-3">
						<p className="font-medium text-sm">Prescriptions</p>
					</div>
					<div className="col-span-12 overflow-hidden rounded-xl border-[1px] border-border p-4 md:col-span-9">
						<MedicineDosageTable data={medicineData?.slice(0, 3)} functions={{}} button={false} />
					</div>
				</div>
				{/* attachments */}
				<div className="grid w-full grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-3">
						<p className="font-medium text-sm">Attachments:</p>
					</div>
					<div className="col-span-12 grid xs:grid-cols-2 gap-4 rounded-xl border-[1px] border-border p-6 md:col-span-9 md:grid-cols-4">
						{
							// show attachments
							datas?.attachments?.map((item) => (
								<img key={item} src={item} alt="attachment" className="w-full rounded-md object-cover md:h-32" />
							))
						}
					</div>
				</div>

				{/* view Invoice */}
				<div className="flex w-full items-center justify-end">
					<div className="w-full md:w-3/4">
						<Button
							label="View Invoice"
							Icon={FiEye}
							onClick={() => {
								closeModal()
								navigate('/invoices/preview/198772')
							}}
						/>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default MedicalRecodModal
