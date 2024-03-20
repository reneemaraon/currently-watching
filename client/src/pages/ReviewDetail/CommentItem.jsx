import formatDateTime from "../../utils/formatDate";
import Icon from "../Common/Icon";
import { OptionsIcon } from "../Common/IconList";

const Comment = ({ comment }) => {
  const {
    user: { screenName, name, profilePhotoUrl },
    commentBody,
    createdAt,
  } = comment;
  return (
    <div className="w-full p-4 bg-theme-base rounded-2xl border border-light-stroke flex-col justify-center items-start gap-4 flex">
      <div className="CommentHead w-full justify-between items-start inline-flex">
        <div className="Comment grow shrink basis-0 justify-start items-center gap-3 sm:gap-4 flex">
          <img
            className="ProfilePhoto w-7 h-7 sm:w-8 sm:h-8 rounded-full"
            src={profilePhotoUrl}
          />
          <div className="Details grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="NameUsername w-full justify-start items-center gap-1.5 inline-flex">
              <div className="author-name">{screenName || "Hwang Inyoup"}</div>
              <div className="Username info-text">@{name || "hi_high_hiy"}</div>
            </div>
            <div className="DatePublished info-text">
              {formatDateTime(createdAt)}
            </div>
          </div>
        </div>
        <div className="CommentActionOptions px-2 justify-center items-center gap-2.5 flex">
          <Icon size="h-2 w-2">
            <OptionsIcon />
          </Icon>
        </div>
      </div>
      <p className="CommentText w-full text-sm leading-6 font-normal">
        {commentBody || ""}
      </p>
    </div>
  );
};

export default Comment;
