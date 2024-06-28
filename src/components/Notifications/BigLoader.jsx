import { PropagateLoader } from 'react-spinners'

function BigLoader() {
	return (
		<div className="h-screen w-full flex-colo px-2 py-4">
			<PropagateLoader color="#07b8db" />
		</div>
	)
}

export default BigLoader
