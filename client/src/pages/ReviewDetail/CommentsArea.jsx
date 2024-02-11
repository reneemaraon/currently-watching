import CustomButton from "../Common/CustomButton";

const commentList = [
{ 
  'name': 'Han Seojun',
  'profile_pic': '',
  'comment': '',
}
];

const Comment = ({name, username, display_photo, comment}) => (
  <div className="w-full p-4 bg-theme-base rounded-2xl border border-light-stroke flex-col justify-center items-start gap-4 flex">
    <div className="CommentHead w-full justify-between items-start inline-flex">
      <div className="Comment grow shrink basis-0 justify-start items-start gap-4 sm:gap-5 flex">
        <img className="ProfilePhoto w-8 h-8 sm:w-10 sm:h-10 rounded-full" src="https://via.placeholder.com/50x51" />
        <div className="Details grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
          <div className="NameUsername w-full justify-start items-center gap-2 inline-flex">
            <div className="author-name">{name || "Hwang Inyoup"}</div>
            <div className="Username info-text">{username || "@hi_high_hiy"}</div>
          </div>
          <div className="AccDetails justify-start items-center gap-[5px] inline-flex">
            <div className="DatePublished info-text">6 days ago</div>
          </div>
        </div>
      </div>
      <div className="CommentActionOptions p-[15px] justify-center items-center gap-2.5 flex" />
    </div>
    <p className="CommentText w-full text-xs sm:text-sm leading-5 sm:leading-6 font-normal">
      {comment || ''}
    </p>
  </div>
)




const CommentsArea = () => {
  return (
    <div className="CommentSection w-full py-8 border-t border-slate-200 flex-col justify-start items-center gap-[15px] flex">
      <div className="Header w-full pt-2 pb-[15px] border-b justify-between items-start inline-flex">
        <div className="Comments20"><span className="title-text">Comments </span><span className="text-light-text">(20)</span></div>
        <div className="ActionList w-8 justify-end items-start gap-2.5 flex" />
      </div>
      <div className="CommentList w-full flex-col justify-center items-start gap-[15px] flex">
        <div className="CommentInput w-full h-[99px] p-[15px] bg-white rounded-[10px] border border-slate-200 flex-col justify-start items-start gap-5 flex">
          <div className="Preview text-neutral-300 text-[13px] font-normal leading-[16.90px]">What are your thoughts on this review?</div>
          <div className="Action w-full px-[5px] justify-end items-start gap-2.5 inline-flex">
            <CustomButton disabled edge="rounded" size="smallSize">
              <span className="font-semibold">Submit</span>
            </CustomButton> 
          </div>
        </div>
        <Comment 
          comment="Eternal Blossom is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a lasting impression."
        />
        <Comment
          comment="That's putting it mildly! What a wondrous story. Synchronicity is strong in you, young Jedi."
          name="Yuri Romano"
          username="@yuri_romano"
        />

        <Comment 
          comment="Eternal Blossom is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a lasting impression."
        />
        <Comment
          comment="That's putting it mildly! What a wondrous story. Synchronicity is strong in you, young Jedi."
          name="Yuri Romano"
          username="@yuri_romano"
        />

        <div className="LoadMorePanel w-full h-16 flex-col justify-end items-center gap-2.5 flex">
          <div className="Button py-2 px-4 sm:py-3 sm:px-5 bg-light-stroke rounded-full border justify-center items-center gap-2 inline-flex">
            <div className="Button grow shrink basis-0 text-center font-semibold text-sm sm:text-base ">Load More</div>
          </div>
        </div>
    </div>  
    </div>
  );
}
 
export default CommentsArea;