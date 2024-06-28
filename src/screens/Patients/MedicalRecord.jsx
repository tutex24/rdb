import React from 'react'
import { toast } from 'react-hot-toast'
import { BiPlus } from 'react-icons/bi'
import { FiEye } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { medicalRecodData } from '../../components/Datas'
import { Button } from '../../components/Form'
import MedicalRecodModal from '../../components/Modals/MedicalRecodModal'

function MedicalRecord() {
	const [isOpen, setIsOpen] = React.useState(false)
	const [datas, setDatas] = React.useState({})
	const navigate = useNavigate()
	return (
		<>
			{
				// Modal
				isOpen && (
					<MedicalRecodModal
						closeModal={() => {
							setIsOpen(false)
							setDatas({})
						}}
						isOpen={isOpen}
						datas={datas}
					/>
				)
			}
			<div className="flex flex-col gap-6">
				<div className="flex-btn gap-4">
					<h1 className="hidden font-medium text-sm sm:block">Medical Record</h1>
					<div className="w-full sm:w-1/4">
						<Button
							label="New Record"
							Icon={BiPlus}
							onClick={() => {
								navigate('/patients/visiting/2')
							}}
						/>
					</div>
				</div>
				{medicalRecodData.map((data) => (
					<div
						key={data.id}
						className="grid grid-cols-12 items-start gap-4 rounded-xl border-[1px] border-border bg-dry p-6"
					>
						<div className="col-span-12 md:col-span-2">
							<p className="font-medium text-textGray text-xs">{data.date}</p>
						</div>
						<div className="col-span-12 flex flex-col gap-2 md:col-span-6">
							{data?.data?.map((item, index) => (
								<p key={item.id} className="font-light text-main text-xs">
									<span className="font-medium">{item?.title}:</span>{' '}
									{
										// if value character is more than 40, show only 40 characters
										item?.value?.length > 40 ? `${item?.value?.slice(0, 40)}...` : item?.value
									}
								</p>
							))}
						</div>
						{/* price */}
						<div className="col-span-12 md:col-span-2">
							<p className="font-semibold text-subMain text-xs">
								<span className="font-light text-main">(Tsh)</span> {data?.amount}
							</p>
						</div>
						{/* actions */}
						<div className="col-span-12 flex-rows gap-2 md:col-span-2">
							<button
								type="button"
								onClick={() => {
									setIsOpen(true)
									setDatas(data)
								}}
								className="h-10 w-2/4 flex-colo rounded-md border border-border bg-white text-sm text-subMain md:w-10"
							>
								<FiEye />
							</button>
							<button
								type="button"
								onClick={() => {
									toast.error('This feature is not available yet')
								}}
								className="h-10 w-2/4 flex-colo rounded-md border border-border bg-white text-red-600 text-sm md:w-10"
							>
								<RiDeleteBin6Line />
							</button>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default MedicalRecord
