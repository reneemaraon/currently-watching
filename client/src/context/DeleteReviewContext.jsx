import { createContext, useContext, useEffect, useState } from 'react';
import { deleteReviewRequest } from '../api/reviewsApi';

const deleteReviewContext = createContext();

export const useDeleteReviewContext = () => {
  const context = useContext(deleteReviewContext);
  if (!context) throw new Error('Delete Review Provider is missing');
  return context;
};

export const DeleteReviewProvider = ({ children }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [deleteLoading, setLoading] = useState(false);

  const deleteReview = async () => {
    setLoading(true);
    const response = await deleteReviewRequest(reviewToDelete);

    if (response) {
      setLoading(false);
      return response;
    }
  };

  return (
    <deleteReviewContext.Provider
      value={{
        deleteReview,
        showDeleteModal,
        setShowDeleteModal,
        reviewToDelete,
        setReviewToDelete,
        deleteLoading,
      }}
    >
      {children}
    </deleteReviewContext.Provider>
  );
};
