import formatDateTime from "../../utils/formatDate";
import Icon from "../Common/Icon";
import { OptionsIcon } from "../Common/IconList";
import Dropdown, { Option } from "../Common/Dropdown";
import { useState, useRef, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Comment = ({ comment, onDelete }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const {
    user: { screenName, name, profilePhotoUrl },
    commentBody,
    createdAt,
  } = comment;
  const { user } = useAuthContext();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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
        {user && user._id == comment.user._id && (
          <div
            onClick={toggleDropdown}
            ref={dropdownRef}
            className="relative px-2 justify-center items-center cursor-pointer flex"
          >
            <Icon size="h-2 w-2">
              <OptionsIcon />
            </Icon>
            {isDropdownVisible && (
              <div className="absolute w-40 top-full right-0 mt-1 z-40">
                <Dropdown>
                  <Option
                    key="Delete"
                    text="Delete"
                    onSelect={() => onDelete(comment._id)}
                  />
                </Dropdown>
              </div>
            )}
          </div>
        )}
      </div>
      <p className="CommentText w-full text-sm leading-6 font-normal">
        {commentBody || ""}
      </p>
    </div>
  );
};

export default Comment;
