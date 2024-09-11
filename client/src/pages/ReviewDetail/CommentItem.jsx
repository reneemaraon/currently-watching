import formatDateTime from '../../utils/formatDate';
import Icon from '../Common/Icon';
import { OptionsIcon } from '../Common/IconList';
import Dropdown, { Option } from '../Common/Dropdown';
import { useState, useRef, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Comment = ({ comment, onDelete }) => {
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const {
    user: { _id: userId, screenName, name, profilePhotoUrl },
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

  const onClickUser = (event) => {
    navigate(`/users/${userId}`);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full p-4 hover:bg-main-bg/20 bg-theme-base rounded-2xl border border-light-stroke flex-col justify-center items-start gap-4 flex">
      <div className="CommentHead gap-1 w-full items-start inline-flex">
        <div className="py-0.5 grow shrink basis-0 justify-start items-start gap-3 sm:gap-4 flex">
          <img
            onClick={onClickUser}
            className="ProfilePhoto hover:cursor-pointer hover:opacity-70 w-5 h-5 sm:w-6 sm:h-6 rounded-full"
            src={profilePhotoUrl}
          />
          <div className="Details grow shrink basis-0 flex-col justify-start items-end gap-1.5 sm:gap-2 inline-flex">
            <div className="w-full flex-wrap justify-start items-start gap-1.5 inline-flex">
              <div
                onClick={onClickUser}
                className="hover:cursor-pointer hover:text-brand-dark-purple author-name"
              >
                {name}
              </div>
              <div
                onClick={onClickUser}
                className="hover:cursor-pointer  hover:text-brand-dark-purple author-username"
              >
                @{screenName}
              </div>
              <div className="DatePublished text-lighter-text leading-[12px] text-[10px] sm:text-xs">
                {formatDateTime(createdAt)}
              </div>
            </div>
          </div>
        </div>
        {user && user._id == comment.user._id && (
          <div
            onClick={toggleDropdown}
            ref={dropdownRef}
            className="relative px-0.5 sm:px-1 justify-center items-center cursor-pointer flex"
          >
            <Icon size="h-1.5 w-1.5 sm:h-2 sm:w-2">
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
        {commentBody || ''}
      </p>
    </div>
  );
};

export default Comment;
