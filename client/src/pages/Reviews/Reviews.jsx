import { useNavigate } from 'react-router-dom';

import CustomButton from '../Common/CustomButton';
import ReviewListItem from './ReviewListItem';
import { useReviewsContext } from '../../context/ReviewContext';
import { useEffect, useState } from 'react';
import PopupModal from '../Common/PopupModal';
import SearchBar from '../Home/NavBar/SearchBar';
import CreateReviewShowDetail from '../CreateReview/components/CreateReviewShowDetail';
import { useSearchContext } from '../../context/SearchContext';
import FullPageLoading from '../Common/FullPageLoading';

const ReviewsPage = () => {
  const navigate = useNavigate();
  const { error, reviews, loading } = useReviewsContext();
  const { lastSelected } = useSearchContext();
  const [showModal, setShowModal] = useState(false);
  const [show, setShowId] = useState(null);

  const handleClick = () => {
    setShowModal(true);
  };

  const startReview = () => {
    navigate(`/shows/${show}/create-review`);
  };

  if (loading) {
    return <FullPageLoading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full max-w-[1200px] px-16 max-[900px]:px-8 max-[600px]:px-5 py-2 sm:py-8 flex-col justify-start items-center gap-24 inline-flex">
      <PopupModal showModal={showModal} setShowModal={setShowModal}>
        <div className="w-full inline-flex flex-col items-center gap-8 py-7 px-4">
          <div className="gap-4 pb-2 flex-col inline-flex items-center w-full">
            <p className="title-text font-normal">Write Review</p>
            <p className="important-small-text font-normal">
              {show && lastSelected
                ? 'You are writing a review for:'
                : 'Choose a drama you wish to write a review for.'}
            </p>
          </div>
          {show && lastSelected && (
            <CreateReviewShowDetail show={lastSelected} />
          )}
          {!show && <SearchBar onItemClick={setShowId} />}
          <CustomButton disabled={show ? false : true} onClick={startReview}>
            Start review
          </CustomButton>
        </div>
      </PopupModal>
      <div className="ReviewsBody w-full flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="Header w-full pb-[30px] justify-center items-end gap-5 inline-flex">
          <div className="SecitonHeader grow shrink basis-0 h-[39px] justify-start items-end gap-2.5 flex">
            <div className="Reviews text-gray-800 text-2xl sm:text-3xl font-medium">
              Reviews
            </div>
          </div>
          <div className="AddReviewContainer flex-col justify-center items-center gap-2.5 inline-flex">
            <CustomButton
              size="defaultResize"
              onClick={handleClick}
              styleSet="dark"
            >
              + Add Review
            </CustomButton>
          </div>
        </div>
        <div className="ReviewsList w-full inline-flex px-0.5 pb-4 sm:px-2.5 flex-col justify-start items-start gap-5">
          {reviews &&
            reviews.map((review) => {
              return <ReviewListItem review={review}>hi</ReviewListItem>;
            })}
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
