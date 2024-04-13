import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { useDeleteReviewContext } from '../../context/DeleteReviewContext';
import { useReviewsContext } from '../../context/ReviewContext';
import { useToast } from '../../context/ToastContext';
import CustomButton from '../Common/CustomButton';
import PopupModal from '../Common/PopupModal';
import { useShowDetailContext } from '../../context/ShowDetailContext';

const DeleteReview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { showDeleteModal, setShowDeleteModal, deleteReview, reviewToDelete } =
    useDeleteReviewContext();
  const { showToast } = useToast();

  const { removeReviewFromList } = useReviewsContext();
  const { removeReviewShowReviews } = useShowDetailContext();

  const confirmDelete = async () => {
    setShowDeleteModal(false);
    try {
      const response = await deleteReview();
      if (response) {
        showToast('Your review was deleted successfully', 'success');
        removeReviewFromList(reviewToDelete);
        removeReviewShowReviews(reviewToDelete);
        if (id && location.pathname.includes('/reviews')) {
          navigate('/reviews');
        }
      }
    } catch (error) {
      console.log(error);
      showToast(error.response.data.message, 'error');
    }
  };

  return (
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
};

export default DeleteReview;
