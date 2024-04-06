import { useNavigate } from "react-router-dom";

import CustomButton from "../Common/CustomButton";
import ReviewListItem from "./ReviewListItem";
import { useReviewsContext } from "../../context/ReviewContext";
import { useState } from "react";
import PopupModal from "../Common/PopupModal";
import SearchBar from "../Home/NavBar/SearchBar";
import CreateReviewShowDetail from "../CreateReview/components/CreateReviewShowDetail";
import { useSearchContext } from "../../context/SearchContext";
import { useToast } from "../../context/ToastContext";
import LoadMorePanel from "../Common/LoadMorePagination";
import ListLoading from "../Common/LoadingList";

const ReviewsPage = () => {
  const navigate = useNavigate();
  const {
    error,
    reviews: { totalCount, reviews },
    loading,
    deleteReview,
    loadNextPage,
  } = useReviewsContext();
  const { lastSelected } = useSearchContext();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [show, setShowId] = useState(null);
  const { showToast } = useToast();

  const handleClick = () => {
    setShowModal(true);
  };

  const startReview = () => {
    navigate(`/shows/${show}/create-review`);
  };

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
              ? "You are writing a review for:"
              : "Choose a drama you wish to write a review for."}
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

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full max-w-[1200px] px-10 max-[900px]:px-8 max-[600px]:px-5 max-[400px]:px-2 py-2 sm:py-8 flex-col justify-start items-center gap-6 sm:gap-8 md:gap-12 inline-flex">
      {renderPopup()}
      {renderDeletePopup()}
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
