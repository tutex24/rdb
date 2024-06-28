import { FaTimes } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
import Modal from './Modal'
function ChatVideoAndCall({ closeModal, isOpen, video }) {
	return (
		<Modal closeModal={closeModal} isOpen={isOpen} width={'max-w-xl'}>
			<div className="flex-colo space-y-4 pb-12 ">
				{!video ? (
					<>
						<img className="h-28 w-28 rounded-full border object-cover" alt="user" src="/images/user1.png" />
						<h2 className="font-semibold">Minah Mmassy</h2>
						<p className="text-subMain text-xs">Calling....</p>
						<div className="flex-rows gap-4">
							<button
								type="button"
								onClick={() => {
									closeModal()
								}}
								className="h-10 w-10 flex-colo rounded-full bg-subMain text-white"
							>
								<FiPhoneCall />
							</button>
							<button
								type="button"
								onClick={() => {
									closeModal()
								}}
								className="h-10 w-10 flex-colo rounded-full bg-red-500 text-white"
							>
								<FaTimes />
							</button>
						</div>
					</>
				) : (
					<>
						<img className="h-96 w-full rounded border object-cover" alt="user" src="/images/user1.png" />
						<h2 className="font-semibold">Minah Mmassy</h2>
						<p className="text-subMain text-xs">Calling....</p>
						<div className="flex-rows gap-4">
							<button
								type="button"
								onClick={() => {
									closeModal()
								}}
								className="h-10 w-10 flex-colo rounded-full bg-subMain text-white"
							>
								<FiPhoneCall />
							</button>
							<button
								type="button"
								onClick={() => {
									closeModal()
								}}
								className="h-10 w-10 flex-colo rounded-full bg-red-500 text-white"
							>
								<FaTimes />
							</button>
						</div>
					</>
				)}
			</div>
		</Modal>
	)
}

export default ChatVideoAndCall
