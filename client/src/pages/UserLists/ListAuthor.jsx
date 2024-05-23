import { useNavigate } from "react-router-dom";
import ImageWithOpacityTransition from "../Common/ImageTransition";

const ListAuthor = ({ list }) => {
  const navigate = useNavigate();
  const onClickUser = () => {
    if (list.user) {
      navigate(`/users/${list.user._id}`);
    }
  };
  if (list.user) {
    return (
      <div
        onClick={onClickUser}
        className="group py-0.5 px-2 Profile justify-start items-start gap-1.5 inline-flex"
      >
        <div className="pr-1 font-light small-author-username">by </div>
        <ImageWithOpacityTransition
          styleAttach="hover:opacity-80 cursor-pointer w-4 h-4 relative rounded-full"
          src={list.user.profilePhotoUrl}
        />
        <div className="NameUsername justify-start flex-wrap items-center gap-0.5 sm:gap-2 inline-flex">
          <div className="small-author-username">{list.user.screenName}</div>
        </div>
      </div>
    );
  }
};

export default ListAuthor;
