import { BiPlus } from 'react-icons/bi'

function SenderReceverComp({ item, functions, button }) {
	return (
		<div className="mt-4 grid items-center gap-6 sm:grid-cols-2">
			<div className="rounded-xl border border-border p-5">
				<div className="flex-btn gap-4">
					<h1 className="font-semibold text-md">From:</h1>
				</div>
				<div className="mt-4 flex flex-col gap-2">
					<h6 className="font-medium text-xs">Delight Dental Clinic</h6>
					<p className="text-textGray text-xs">delightdental@gmail.com</p>
					<p className="text-textGray text-xs">+ (456) 786, 972, 90</p>
				</div>
			</div>
			<div className="rounded-xl border border-border p-5">
				<div className="flex-btn gap-4">
					<h1 className="font-semibold text-md">To:</h1>
					{button && (
						<button
							type="button"
							onClick={() => functions.openModal()}
							className="flex-rows gap-2 rounded-lg border border-border bg-dry px-4 py-2 text-sm text-subMain"
						>
							<BiPlus /> Add
						</button>
					)}
				</div>
				<div className="mt-4 flex flex-col gap-2">
					<h6 className="font-medium text-xs">{item?.title}</h6>
					<p className="text-textGray text-xs">{item?.email}</p>
					<p className="text-textGray text-xs">{item?.phone}</p>
				</div>
			</div>
		</div>
	)
}

export default SenderReceverComp
