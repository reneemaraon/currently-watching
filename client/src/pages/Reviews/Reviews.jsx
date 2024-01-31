import CustomButton from "../Common/CustomButton";
import ReviewListItem from "./ReviewListItem";
import { Link, useNavigate } from "react-router-dom";


const ReviewsPage = () => {
    const navigate = useNavigate()

		const handleClick = () => {
			navigate('/create-review')
		}
  return (
    <div className="w-full max-w-[1200px] px-16 max-[900px]:px-8 max-[600px]:px-5 py-2 sm:py-8 flex-col justify-start items-center gap-24 inline-flex">
        <div className="ReviewsBody w-full flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="Header self-stretch pb-[30px] justify-center items-end gap-5 inline-flex">
                <div className="SecitonHeader grow shrink basis-0 h-[39px] justify-start items-end gap-2.5 flex">
                    <div className="Reviews text-gray-800 text-2xl sm:text-3xl font-medium">
                        Reviews
                    </div>
                </div>
                <div className="AddReviewContainer flex-col justify-center items-center gap-2.5 inline-flex">
										<CustomButton size="defaultResize" onClick={handleClick} styleSet="dark">
											+ Add Review
										</CustomButton>
                </div>
            </div>
            <div className="ReviewsList self-stretch h-[920px] px-0.5 sm:px-2.5 flex-col justify-start items-start gap-5 flex">
                <ReviewListItem />
                <ReviewListItem />
                <ReviewListItem />
                <ReviewListItem />
                <ReviewListItem />
            </div>
        </div>
    </div>
  );
}

export default ReviewsPage;
