import { useNavigate } from 'react-router-dom';

import CustomButton from '../Common/CustomButton';
import ReviewListItem from './ReviewListItem';
import { useReviewsContext } from '../../context/ReviewContext';
import { useState } from 'react';
import PopupModal from '../Common/PopupModal';
import SearchBar from '../Home/NavBar/SearchBar';
import CreateReviewShowDetail from '../CreateReview/components/CreateReviewShowDetail';
import { useSearchContext } from '../../context/SearchContext';
import { useDeleteReviewContext } from '../../context/DeleteReviewContext';
import LoadMorePanel from '../Common/LoadMorePagination';
import ListLoading from '../Common/LoadingList';
import DeleteReview from './DeleteReview';

const ReviewsPage = () => {
  const navigate = useNavigate();
  const {
    error,
    reviews: { totalCount, reviews },
    loading,
    loadNextPage,
  } = useReviewsContext();
  const { setShowDeleteModal, setReviewToDelete } = useDeleteReviewContext();

  const { lastSelected } = useSearchContext();
  const [showModal, setShowModal] = useState(false);
  const [show, setShowId] = useState(null);

  const handleClick = () => {
    setShowModal(true);
  };

  const startReview = () => {
    navigate(`/shows/${show}/create-review`);
  };

  const onAttemptDelete = (id) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
  };

  const loadMoreItems = () => {
    loadNextPage();
  };

  const renderPopup = () => (
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
        {show && lastSelected && <CreateReviewShowDetail show={lastSelected} />}
        {!show && <SearchBar onItemClick={setShowId} />}
        <CustomButton disabled={show ? false : true} onClick={startReview}>
          Start review
        </CustomButton>
      </div>
    </PopupModal>
  );

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      <DeleteReview />
      {renderPopup()}
      <div className="Header w-full px-2 py-2 sm:py-4 justify-center items-center gap-5 inline-flex">
        <div className="grow shrink basis-0 justify-start items-start gap-2.5 flex">
          <div className="Reviews title-text">Reviews</div>
        </div>
        <CustomButton
          size="defaultResize"
          onClick={handleClick}
          styleSet="dark"
        >
          + Add Review
        </CustomButton>
      </div>
      <div className="ReviewsList w-full inline-flex px-0.5 pb-4 sm:px-2.5 flex-col justify-start items-center gap-5">
        {reviews &&
          reviews.map((review) => {
            return (
              <ReviewListItem
                onDelete={() => onAttemptDelete(review._id)}
                key={review._id}
                review={review}
              />
            );
          })}
        {loading && <ListLoading />}
        {!loading && totalCount > reviews.length && (
          <LoadMorePanel onClick={loadMoreItems} />
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;
