import { useNavigate } from 'react-router-dom';

import CustomButton from '../Common/CustomButton';
import ReviewListItem from './ReviewListItem';
import { useReviewsContext } from '../../context/ReviewContext';
import { useState } from 'react';
import PopupModal from '../Common/PopupModal';
import SearchBar from '../Home/NavBar/SearchBar';
import CreateReviewShowDetail from '../ReviewForm/components/CreateReviewShowDetail';
import { useSearchContext } from '../../context/SearchContext';
import { useDeleteReviewContext } from '../../context/DeleteReviewContext';
import LoadMorePanel from '../Common/LoadMorePagination';
import ListLoading from '../Common/LoadingList';
import DeleteReview from './DeleteReview';
import { Header, HeaderName } from '../Home/Sections/SectionHeader';
import Icon from '../Common/Icon';
import { CloseIcon } from '../Common/IconList';
import { useAuthContext } from '../../context/AuthContext';

const ReviewsPage = () => {
  const navigate = useNavigate();
  const { actionRequireLogIn } = useAuthContext();
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

  const removeShow = () => {
    setShowId(null);
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
        {show && (
          <div className="relative">
            <button
              onClick={removeShow}
              className="transition-colors duration-200 group rounded-full hover:bg-brand-lavender bg-theme-negative-base border-light-stroke border absolute top-0 right-0 p-2"
            >
              <Icon
                fill="text-theme-base"
                sizeRules="h-2.5 w-2.5 sm:h-3 sm:w-3"
              >
                <CloseIcon />
              </Icon>
            </button>
            <div className="p-2">
              {show && lastSelected && (
                <CreateReviewShowDetail show={lastSelected} />
              )}
            </div>
          </div>
        )}
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
      <Header>
        <HeaderName>Reviews</HeaderName>
        <CustomButton
          size="defaultResize"
          onClick={actionRequireLogIn(handleClick)}
          styleSet="dark"
        >
          + Add Review
        </CustomButton>
      </Header>
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
