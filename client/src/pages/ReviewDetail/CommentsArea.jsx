import { useState } from "react";
import { useReviewDetailContext } from "../../context/ReviewDetailContext";
import LoadingAnimation from "../Common/LoadingAnimation";
import CommentInput from "./CommentInput";
import Comment from "./CommentItem";
import PopupModal from "../Common/PopupModal";
import CustomButton from "../Common/CustomButton";
import { useToast } from "../../context/ToastContext";
import ListLoading from "../Common/LoadingList";
import LoadMorePanel from "../Common/LoadMorePagination";

const CommentsArea = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const {
    comments: { comments, totalCount },
    commentsLoading,
    postLoading,
    loadNextPage,
    deleteComment,
  } = useReviewDetailContext();
  const { showToast } = useToast();

  const onAttemptDelete = (id) => {
    setCommentToDelete(id);
    setShowDeletePopup(true);
  };

  const confirmDelete = async () => {
    setShowDeletePopup(false);
    try {
      const response = await deleteComment(commentToDelete);
      if (response) {
        showToast("Your comment was deleted successfully", "success");
      }
    } catch (error) {
      console.log(error);
      showToast(error.response.data.message, "error");
    }
  };

  const renderPopup = () => (
    <PopupModal showModal={showDeletePopup} setShowModal={setShowDeletePopup}>
      <div className="w-full inline-flex flex-col items-center gap-8 py-7 px-4">
        <div className="gap-4 pb-2 flex-col inline-flex items-center w-full">
          <p className="title-text font-normal">Delete Comment</p>
          <p className="important-small-text font-normal">
            Are you sure you want to delete this comment?
          </p>
        </div>
        <div className="inline-flex gap-2">
          <CustomButton
            styleSet="light"
            onClick={() => setShowDeletePopup(false)}
          >
            Cancel
          </CustomButton>
          <CustomButton onClick={confirmDelete}>Delete</CustomButton>
        </div>
      </div>
    </PopupModal>
  );

  const renderComments = () => {
    if (comments) {
      return comments.map((comment) => (
        <Comment onDelete={onAttemptDelete} comment={comment} />
      ));
    }
  };

  return (
    <div className="CommentSection w-full py-8  border-slate-200 flex-col justify-start items-center gap-[15px] flex">
      {renderPopup()}
      <div className="Header w-full pt-2 pb-[15px] justify-between items-start inline-flex">
        <div className="Comments20">
          <span className="title-text">
            Comments{" "}
            <span className="text-light-text subheader-text">
              {`(${totalCount})`}
            </span>
          </span>
        </div>
        <div className="ActionList w-8 justify-end items-start gap-2.5 flex" />
      </div>
      <div className="CommentList w-full flex-col justify-center items-start gap-[15px] flex">
        <CommentInput />
        {renderComments()}
        {(commentsLoading || postLoading) && <ListLoading />}
        {!commentsLoading && comments && comments.length < totalCount && (
          <LoadMorePanel onClick={loadNextPage} />
        )}
      </div>
    </div>
  );
};

export default CommentsArea;
