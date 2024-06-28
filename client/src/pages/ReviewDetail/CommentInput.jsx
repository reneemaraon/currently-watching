import { useState, useRef } from "react";
import CustomButton from "../Common/CustomButton";
import TextareaAutosize from "react-textarea-autosize";
import { useReviewDetailContext } from "../../context/ReviewDetailContext";
import { useAuthContext } from "../../context/AuthContext";

const CommentInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { postComment, commentBody, setCommentBody } = useReviewDetailContext();
  const { user, loginUser } = useAuthContext();
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

  if (!user) {
    return (
      <div
        onClick={loginUser}
        className="p-4 bg-brand-gray-light w-full cursor-pointer rounded-lg border justify-between items-center flex"
      >
        <p className="text-xs sm:text-sm text-brand-dark-purple">
          Log in to leave a comment
        </p>
        <CustomButton styleSet="lavender" size="smallResize">
          Login with Twitter
        </CustomButton>
      </div>
    );
  }

  return (
    <div
      onClick={focusInput}
      className={`${
        isFocused && "border-brand-gray"
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

      <div className="Action w-full justify-end items-start pr-3 py-3 inline-flex">
        <CustomButton
          onClick={onSubmit}
          disabled={commentBody.length == 0}
          edge="rounded"
          size="smallResize"
        >
          <span className="font-semibold">Submit</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default CommentInput;
