import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Layout from '../../PrivateLayout'
import PersonalInfo from '../../components/UsedComp/PersonalInfo'

function CreatePatient() {
	return (
		<Layout>
			<div className="flex items-center gap-4">
				<Link to="/patients" className="rounded-lg border border-subMain border-dashed bg-white px-4 py-3 text-md">
					<IoArrowBackOutline />
				</Link>
				<h1 className="font-semibold text-xl">Create Patient</h1>
			</div>
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="100"
				data-aos-offset="200"
				className="my-8 rounded-xl border-[1px] border-border bg-white p-6"
			>
				<PersonalInfo titles={false} />
			</div>
		</Layout>
	)
}

export default CreatePatient
