import { useState } from 'react';
import { useShowDetailContext } from '../../context/ShowDetailContext';
import { useToast } from '../../context/ToastContext';

import ReviewsListItem from '../Reviews/ReviewListItem';
import CustomButton from '../Common/CustomButton';
import ListLoading from '../Common/LoadingList';
import PopupModal from '../Common/PopupModal';
import LoadMorePanel from '../Common/LoadMorePagination';
import { useDeleteReviewContext } from '../../context/DeleteReviewContext';
import DeleteReview from '../Reviews/DeleteReview';

const ShowReviewsList = () => {
  const {
    showReviews: { showReviews, totalCount },
    show,
    showReviewsLoading,
    loadNextPage,
  } = useShowDetailContext();
  const { setShowDeleteModal, setReviewToDelete } = useDeleteReviewContext();

  const onAttemptDelete = (id) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
  };

  return (
    <div className="w-full sm:px-2 flex-col justify-center items-start gap-4 flex">
      <DeleteReview />
      {showReviews &&
        showReviews.map((showReview) => (
          <ReviewsListItem
            review={showReview}
            key={showReview._id}
            onDelete={() => onAttemptDelete(showReview._id)}
            noImage
          />
        ))}
      {showReviewsLoading && <ListLoading />}

      {showReviews && totalCount > showReviews.length && (
        <LoadMorePanel onClick={loadNextPage} />
      )}
    </div>
  );
};

export default ShowReviewsList;
