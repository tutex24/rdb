import React from 'react'
import { toast } from 'react-hot-toast'
import { BiChevronDown } from 'react-icons/bi'
import { sortsDatas } from '../Datas'
import { Button, Input, Select, Textarea } from '../Form'

const sendToData = sortsDatas?.method.map((data) => {
	return {
		id: data.id,
		name: data.name,
		value: data.name,
	}
})

function WhatsappComp({ data }) {
	const [sendTo, setSendTo] = React.useState(sendToData[0])

	// useEffect
	React.useEffect(() => {
		if (data?.id) {
			setSendTo(data.sendTo)
		}
	}, [data])
	return (
		<div className="mt-4 flex w-full flex-col gap-4">
			{/* title */}
			<Input label="Campaign Title" color={true} placeholder={data?.id && data?.title} />
			{/* send to */}
			<div className="flex w-full flex-col gap-3">
				<p className="text-sm">Send To</p>
				<Select selectedPerson={sendTo} setSelectedPerson={setSendTo} datas={sendToData}>
					<div className="flex h-14 w-full items-center justify-between rounded-md border border-border bg-white px-4 text-main text-xs">
						<p>{sendTo?.name}</p>
						<BiChevronDown className="text-xl" />
					</div>
				</Select>
			</div>

			{/* message */}
			<Textarea
				label="Message"
				placeholder={data?.id ? data?.action?.message : 'Dear Delight patient ....'}
				color={true}
				rows={5}
			/>
			{/* button */}
			{!data?.id && (
				<Button
					label={'Send Campaign'}
					onClick={() => {
						toast.error('This feature is not available yet')
					}}
				/>
			)}
		</div>
	)
}

export default WhatsappComp
