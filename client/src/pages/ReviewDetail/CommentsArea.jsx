import { useReviewDetailContext } from '../../context/ReviewDetailContext';
import LoadingAnimation from '../Common/LoadingAnimation';
import CommentInput from './CommentInput';
import Comment from './CommentItem';

const CommentsArea = () => {
  const { comments, commentsLoading, postLoading } = useReviewDetailContext();

  const renderLoading = () => {
    return (
      <div className="w-full justify-center inline-flex py-4">
        <div className="w-40">
          <LoadingAnimation />
        </div>
      </div>
    );
  };

  const renderComments = () => {
    if (comments) {
      return comments.map((comment) => (
        <Comment
          name={comment.user.screenName}
          username={`@${comment.user.name}`}
          display_photo={comment.user.profilePhotoUrl}
          comment={comment.commentBody}
          createdDate={comment.createdAt}
        />
      ));
    }
  };
  return (
    <div className="CommentSection w-full py-8  border-slate-200 flex-col justify-start items-center gap-[15px] flex">
      <div className="Header w-full pt-2 pb-[15px] justify-between items-start inline-flex">
        <div className="Comments20">
          <span className="title-text">
            Comments{' '}
            <span className="text-light-text subheader-text">
              {comments && `(${comments.length})`}
            </span>
          </span>
        </div>
        <div className="ActionList w-8 justify-end items-start gap-2.5 flex" />
      </div>
      <div className="CommentList w-full flex-col justify-center items-start gap-[15px] flex">
        <CommentInput />
        {commentsLoading || postLoading ? renderLoading() : renderComments()}
        {}

        <div className="LoadMorePanel w-full h-16 flex-col justify-end items-center gap-2.5 flex">
          <div className="Button py-2 px-4 sm:py-3 sm:px-5 bg-light-stroke rounded-full border justify-center items-center gap-2 inline-flex">
            <div className="Button grow shrink basis-0 text-center font-semibold text-sm sm:text-base ">
              Load More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsArea;
