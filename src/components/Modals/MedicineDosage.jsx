import { useState } from 'react'
import { BiChevronDown, BiPlus } from 'react-icons/bi'
import { sortsDatas } from '../Datas'
import { Button, Checkbox, Input, Select } from '../Form'
import Modal from './Modal'
import PatientMedicineServiceModal from './PatientMedicineServiceModal'

function MedicineDosageModal({ closeModal, isOpen }) {
	const [open, setOpen] = useState(false)
	const [instraction, setInstraction] = useState(sortsDatas.instractions[0])
	const [dosage, setDosage] = useState(
		sortsDatas.dosage.map((item) => {
			return {
				name: item.value,
				checked: false,
			}
		})
	)
	// on change dosage
	const onChangeDosage = (e) => {
		const { name, checked } = e.target
		const newDosage = dosage.map((item) => {
			if (item.name === name) {
				return {
					...item,
					checked: checked,
				}
			}
			return item
		})
		setDosage(newDosage)
	}

	const summery = [
		{
			title: 'Service Name',
			value: 'Paracetamol',
			color: false,
		},
		{
			title: 'Item Price',
			value: '$5500',
			color: false,
		},
		{
			title: 'Quantity',
			value: 6,
			color: false,
		},
		{
			title: 'Total',
			value: '$ 33000',
			color: true,
		},
	]

	return (
		<>
			{open && <PatientMedicineServiceModal closeModal={() => setOpen(!open)} isOpen={open} patient={false} />}
			<Modal closeModal={closeModal} isOpen={isOpen} title="Add Item" width={'max-w-xl'}>
				<div className="flex-colo gap-6">
					{/* title */}
					<div className="flex w-full flex-col gap-4">
						<p className="text-black text-sm">Choose Medicine</p>
						<button
							type="button"
							onClick={() => setOpen(!open)}
							className=" w-full flex-rows gap-2 rounded-lg border border-subMain border-dashed py-4 text-sm text-subMain"
						>
							<BiPlus /> Add Item
						</button>
					</div>
					{/* quantity */}
					<div className="flex w-full flex-col gap-3">
						<p className="text-black text-sm">Instruction</p>
						<Select selectedPerson={instraction} setSelectedPerson={setInstraction} datas={sortsDatas.instractions}>
							<div className="w-full flex-btn rounded-lg border border-border p-4 font-light text-sm text-textGray focus:border focus:border-subMain">
								{instraction.name} <BiChevronDown className="text-xl" />
							</div>
						</Select>
					</div>
					<Input label="Quantity" color={true} type={'number'} />
					{/* dosage */}
					<Input label="Dosage Quantity" color={true} type={'number'} />
					<div className="flex w-full flex-col gap-4">
						<p className="text-black text-sm">Dosage</p>
						<div className="grid xs:grid-cols-3 gap-6 pb-6">
							{sortsDatas?.dosage?.map((item) => (
								<Checkbox
									label={item.name}
									checked={dosage?.find((i) => i.name === item.value)?.checked}
									onChange={onChangeDosage}
									name={item.value}
									key={item.id}
								/>
							))}
						</div>
					</div>

					{/* summery */}
					<div className="flex w-full flex-col gap-4">
						<p className="text-black text-sm">Summary</p>
						<div className="flex flex-col gap-4">
							{summery.map((item, index) => (
								<div key={index} className="flex flex-row items-center justify-between">
									<p className="text-textGray text-xs">{item.title}</p>
									<p
										className={
											item.color
												? 'rounded-full bg-subMain bg-opacity-10 px-4 py-1 font-semibold text-subMain text-xs'
												: 'font-medium text-sm text-textGray'
										}
									>
										{item.value}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* button */}
					<Button onClick={closeModal} label="Add" Icon={BiPlus} />
				</div>
			</Modal>
		</>
	)
}

export default MedicineDosageModal
