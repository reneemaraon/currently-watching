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
      <div className="py-0.5 px-2 Profile justify-start items-start gap-1.5 inline-flex">
        <div onClick={onClickUser} className="pr-1 font-light author-username">
          by{" "}
        </div>
        <ImageWithOpacityTransition
          onClick={onClickUser}
          styleAttach="hover:opacity-80 cursor-pointer w-5 h-5 relative rounded-full"
          src={list.user.profilePhotoUrl}
        />
        <div
          onClick={onClickUser}
          className="NameUsername justify-start flex-wrap items-center gap-0.5 sm:gap-2 inline-flex"
        >
          <div className="author-username">{list.user.screenName}</div>
        </div>
      </div>
    );
  }
};

export default ListAuthor;
