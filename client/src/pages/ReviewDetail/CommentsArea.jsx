import CommentInput from './CommentInput';
import Comment from './CommentItem';

const CommentsArea = () => {
  return (
    <div className="CommentSection w-full py-8  border-slate-200 flex-col justify-start items-center gap-[15px] flex">
      <div className="Header w-full pt-2 pb-[15px] justify-between items-start inline-flex">
        <div className="Comments20">
          <span className="title-text">Comments </span>
          <span className="text-light-text">(20)</span>
        </div>
        <div className="ActionList w-8 justify-end items-start gap-2.5 flex" />
      </div>
      <div className="CommentList w-full flex-col justify-center items-start gap-[15px] flex">
        <CommentInput />
        <Comment comment="Eternal Blossom is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a lasting impression." />
        <Comment
          comment="That's putting it mildly! What a wondrous story. Synchronicity is strong in you, young Jedi."
          name="Yuri Romano"
          username="@yuri_romano"
        />

        <Comment comment="Eternal Blossom is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a lasting impression." />
        <Comment
          comment="That's putting it mildly! What a wondrous story. Synchronicity is strong in you, young Jedi."
          name="Yuri Romano"
          username="@yuri_romano"
        />

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
