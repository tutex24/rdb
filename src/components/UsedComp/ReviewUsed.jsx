import { reviewData } from '../Datas'
import { ReviewTable } from '../Tables'

function ReviewsUsed() {
	return (
		<div className="w-full">
			<h1 className="mb-6 font-medium text-sm">Reviews</h1>
			<div className="w-full overflow-x-scroll">
				<ReviewTable doctor={true} data={reviewData.slice(0, 3)} />
			</div>
		</div>
	)
}

export default ReviewsUsed
