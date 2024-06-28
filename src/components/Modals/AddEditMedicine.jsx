import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown } from 'react-icons/bi'
import { HiOutlineCheckCircle } from 'react-icons/hi'
import { sortsDatas } from '../Datas'
import { Button, Input, Select, Textarea } from '../Form'
import Modal from './Modal'

function AddEditMedicineModal({ closeModal, isOpen, datas }) {
	const [measures, setMeasures] = useState(sortsDatas.measure[0])

	useEffect(() => {
		if (datas?.name) {
			setMeasures({
				id: datas.measure,
				name: datas.measure,
			})
		}
	}, [datas])

	return (
		<Modal
			closeModal={closeModal}
			isOpen={isOpen}
			title={datas?.name ? 'Edit Medicine' : 'New Medicine'}
			width={'max-w-3xl'}
		>
			<div className="flex-colo gap-6">
				<div className="grid w-full gap-4 sm:grid-cols-2">
					<Input label="Medicine Name" color={true} placeholder={datas?.name && datas.name} />
					<div className="flex w-full flex-col gap-3">
						<p className="text-black text-sm">Measure</p>
						<Select selectedPerson={measures} setSelectedPerson={setMeasures} datas={sortsDatas.measure}>
							<div className="w-full flex-btn rounded-lg border border-border p-4 font-light text-sm text-textGray focus:border focus:border-subMain">
								{measures?.name} <BiChevronDown className="text-xl" />
							</div>
						</Select>
					</div>
				</div>

				<div className="grid w-full gap-4 sm:grid-cols-2">
					<Input label="Price (Tsh)" type="number" color={true} placeholder={datas?.price ? datas.price : 0} />
					<Input label="Instock" type="number" color={true} placeholder={datas?.stock ? datas.stock : 0} />
				</div>

				{/* des */}
				<Textarea label="Description" placeholder="Write description here..." color={true} rows={5} />
				{/* buttones */}
				<div className="grid w-full gap-4 sm:grid-cols-2">
					<button
						type="button"
						onClick={closeModal}
						className="rounded-lg bg-red-600 bg-opacity-5 p-4 font-light text-red-600 text-sm"
					>
						{datas?.name ? 'Discard' : 'Cancel'}
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

export default AddEditMedicineModal
