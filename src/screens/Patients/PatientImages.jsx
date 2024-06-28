import React from 'react'
import { toast } from 'react-hot-toast'
import { FaTimes } from 'react-icons/fa'
import { patientImages } from '../../components/Datas'
import { Button } from '../../components/Form'
import Uploader from '../../components/Uploader'

function PatientImages() {
	const [image, setImage] = React.useState(null)
	return (
		<div className="flex-colo gap-8">
			<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				{patientImages?.map((image, i) => (
					<div key={i} className="relative w-full">
						<img src={image} alt="patient" className="h-72 w-full rounded-lg object-cover" />
						<button
							type="button"
							onClick={() => toast.error('This feature is not available yet.')}
							className="-top-1 -right-1 absolute h-8 w-8 flex-colo rounded-full bg-white"
						>
							<FaTimes className="text-red-500" />
						</button>
					</div>
				))}
			</div>
			<Uploader setImage={setImage} />
			<Button onClick={() => toast.error('This feature is not available yet.')} label="Save Changes" Icon={null} />
		</div>
	)
}

export default PatientImages
