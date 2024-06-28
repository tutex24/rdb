import { useNavigate } from 'react-router-dom'
import { memberData } from '../Datas'
import { PatientTable } from '../Tables'

function PatientsUsed() {
	const navigate = useNavigate()
	// preview
	const preview = (id) => {
		navigate(`/patients/preview/${id}`)
	}
	return (
		<div className="w-full">
			<h1 className="mb-6 font-medium text-sm">Patients</h1>
			<div className="w-full overflow-x-scroll">
				<PatientTable
					used={true}
					data={memberData}
					functions={{
						preview: preview,
					}}
				/>
			</div>
		</div>
	)
}

export default PatientsUsed
