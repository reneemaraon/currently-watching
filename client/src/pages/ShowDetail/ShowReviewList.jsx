import { useState } from "react";
import { useShowDetailContext } from "../../context/ShowDetailContext";
import { useToast } from "../../context/ToastContext";

import ReviewsListItem from "../Reviews/ReviewListItem";
import CustomButton from "../Common/CustomButton";
import ListLoading from "../Common/LoadingList";
import PopupModal from "../Common/PopupModal";
import LoadMorePanel from "../Common/LoadMorePagination";

const ShowReviewsList = () => {
  const {
    showReviews: { showReviews },
    show,
    showReviewsLoading,
    deleteReview,
    loadNextPage,
  } = useShowDetailContext();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const { showToast } = useToast();

  const confirmDelete = async () => {
    setShowDeleteModal(false);
    try {
      const response = await deleteReview(reviewToDelete);
      if (response) {
        showToast("Your review was deleted successfully", "success");
      }
    } catch (error) {
      console.log(error);
      showToast(error.response.data.message, "error");
    }
  };

  const onAttemptDelete = (id) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
  };

  const renderDeletePopup = () => (
    <PopupModal showModal={showDeleteModal} setShowModal={setShowDeleteModal}>
      <div className="w-full inline-flex flex-col items-center gap-8 py-7 px-4">
        <div className="gap-4 pb-2 flex-col inline-flex items-center w-full">
          <p className="title-text font-normal">Delete Review</p>
          <p className="important-small-text font-normal">
            Are you sure you want to delete this review?
          </p>
        </div>
        <div className="inline-flex gap-2">
          <CustomButton
            styleSet="light"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </CustomButton>
          <CustomButton onClick={confirmDelete}>Delete</CustomButton>
        </div>
      </div>
    </PopupModal>
  );

  return (
    <div className="w-full sm:px-2 flex-col justify-center items-start gap-4 flex">
      {renderDeletePopup()}
      {showReviews &&
        showReviews.map((showReview) => (
          <ReviewsListItem
            review={showReview}
            onDelete={() => onAttemptDelete(showReview._id)}
            noImage
          />
        ))}
      {showReviewsLoading && <ListLoading />}

      {showReviews && show.reviewCount > showReviews.length && (
        <LoadMorePanel onClick={loadNextPage} />
      )}
    </div>
  );
};

export default ShowReviewsList;
