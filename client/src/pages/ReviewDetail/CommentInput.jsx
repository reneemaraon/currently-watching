import { useState, useRef } from 'react';
import CustomButton from '../Common/CustomButton';
import TextareaAutosize from 'react-textarea-autosize';
import { useReviewDetailContext } from '../../context/ReviewDetailContext';

const CommentInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { postComment, commentBody, setCommentBody } = useReviewDetailContext();
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onSubmit = () => {
    postComment();
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleInputChange = (event) => {
    setCommentBody(event.target.value);
  };

  return (
    <div
      onClick={focusInput}
      className={`${
        isFocused && 'border-brand-gray'
      } CommentInput w-full cursor-text rounded-lg border flex-col justify-start items-start flex`}
    >
      <TextareaAutosize
        placeholder="What are your thoughts on this review?"
        className="Preview resize-none px-4 pt-4 placeholder-lighter-text text-sm w-full bg-transparent focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={inputRef}
        value={commentBody}
        onChange={handleInputChange}
      />

      <div className="Action w-full justify-end items-start pr-3 pb-3 inline-flex">
        <CustomButton
          onClick={onSubmit}
          disabled={commentBody.length == 0}
          edge="rounded"
          size="smallSize"
        >
          <span className="font-semibold">Submit</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default CommentInput;
