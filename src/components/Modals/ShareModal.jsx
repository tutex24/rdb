import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { shareData } from '../Datas'
import { Button } from '../Form'
import Modal from './Modal'

function ShareModal({ closeModal, isOpen }) {
	const [selected, setSelected] = useState()
	return (
		<Modal closeModal={closeModal} isOpen={isOpen} title="Share with patient via" width={'max-w-xl'}>
			<div className="flex-colo gap-6">
				{/* data */}
				<div className="w-full">
					<RadioGroup value={selected} onChange={setSelected}>
						<div className="space-y-2">
							{shareData.map((user) => (
								<RadioGroup.Option
									key={user.id}
									value={user}
									className={({ active, checked }) =>
										`${active ? 'border-subMain bg-subMain text-white' : ''}group rounded-xl border-[1px] border-border p-4 hover:bg-subMain hover:text-white`
									}
								>
									{({ active, checked }) => (
										<div className="flex items-center gap-6">
											<div className="h-12 w-12 flex-colo rounded-full bg-text">
												<user.icon className="text-subMain text-xl" />
											</div>
											<div>
												<h6 className="text-sm">{user.title}</h6>
												<p className={`${active && 'text-white'} mt-1 text-textGray text-xs group-hover:text-white`}>
													{user.description}
												</p>
											</div>
										</div>
									)}
								</RadioGroup.Option>
							))}
						</div>
					</RadioGroup>
				</div>
				{/* button */}

				<Button
					onClick={() => {
						toast.error('This feature is not available yet')
						closeModal()
					}}
					label="Send"
				/>
			</div>
		</Modal>
	)
}

export default ShareModal
