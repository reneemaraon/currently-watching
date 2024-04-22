import { useState, useEffect, useRef } from 'react';
import CircularButton from '../Common/CircleButton';
import { HeartIcon, OptionsIcon, ShareIcon } from '../Common/IconList';
import { useReviewDetailContext } from '../../context/ReviewDetailContext';
import { useAuthContext } from '../../context/AuthContext';
import Dropdown, { Option } from '../Common/Dropdown';
import DeleteReview from '../Reviews/DeleteReview';
import { useDeleteReviewContext } from '../../context/DeleteReviewContext';
import { useToast } from '../../context/ToastContext';

const ReviewActions = () => {
  const [liked, setLiked] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useAuthContext();
  const { showToast } = useToast();
  const { review, deleteLike, postLike, heartError } = useReviewDetailContext();
  const { setShowDeleteModal, setReviewToDelete } = useDeleteReviewContext();

  useEffect(() => {
    if (heartError) {
      showToast('Something went wrong. Please try again.', 'error');
      setLiked(!liked);
    }
  }, [heartError]);

  useEffect(() => {
    if (review) {
      setLiked(review.liked);
    }
  }, [review]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const onAttemptDelete = (id) => {
    setReviewToDelete(id);
    setShowDeleteModal(true);
    setDropdownVisible(false);
  };

  const onLikeClick = () => {
    if (liked) {
      deleteLike();
      setLiked(false);
    } else {
      postLike();
      setLiked(true);
    }
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const copyPathToClipboard = () => {
    const baseUrl = window.location.origin;
    navigator.clipboard
      .writeText(baseUrl + `/reviews/${review._id}`)
      .then(() => {
        showToast('Path to this review is copied to clipboard', 'success');
      })
      .catch((error) => {
        console.error('Failed to copy path to clipboard:', error);
      });
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="ReviewActions float-right justify-start items-start gap-2 sm:gap-2.5 flex">
      <DeleteReview />
      <CircularButton active={liked} onClick={onLikeClick}>
        <HeartIcon />
      </CircularButton>
      <CircularButton>
        <ShareIcon />
      </CircularButton>
      <div className="relative" ref={dropdownRef}>
        <CircularButton active={isDropdownVisible} onClick={toggleDropdown}>
          <OptionsIcon />
        </CircularButton>
        {isDropdownVisible && (
          <div className="absolute cursor-pointer w-40 top-full right-0 mt-1 z-40">
            <Dropdown>
              {user && user._id == review.user._id && (
                <Option
                  key="Delete"
                  text="Delete"
                  onSelect={() => onAttemptDelete(review._id)}
                />
              )}
              <Option
                key="copy"
                text="Copy Link"
                onSelect={() => copyPathToClipboard(review._id)}
              />
            </Dropdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewActions;
