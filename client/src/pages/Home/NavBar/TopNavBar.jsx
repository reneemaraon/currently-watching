import React from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import ProfileView from './ProfileDropdown';
import CustomButton from '../../Common/CustomButton';
import Icon from '../../Common/Icon';
import { TwitterIcon, SearchIcon } from '../../Common/IconList';

const LogInButton = ({ login }) => (
  <>
    <CustomButton onClick={login} styleSet="gradient" size="defaultResize">
      <Icon fill="fill-theme-base" sizeRules="h-5 w-5">
        <TwitterIcon />
      </Icon>
      Login with Twitter
    </CustomButton>
  </>
);

const TopNavBar = ({ toggleSidebar }) => {
  const { user } = useAuthContext();

  const onTwitterLogin = async (e) => {
    window.open('http://127.0.0.1:3000/api/v1/auth/twitter/', '_self');
  };

  return (
    <div className="top_nav z-20 w-full h-20 max-[600px]:h-14 px-[50px] max-[600px]:px-6 bg-zinc-100 bg-opacity-25 backdrop-blur-sm border-b border-zinc-300 items-center inline-flex sticky top-0">
      <div className="left_side grow justify-start items-center gap-[30px] flex">
        <div
          onClick={toggleSidebar}
          className="xl:hidden move_icon px-1.5 py-1.5 rounded hover:bg-main-bg hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        {/* searchbar */}
        <div className="max-[600px]:hidden grow w-full max-w-[260px] sm:max-w-[320px] px-3 py-2.5 sm:px-5 sm:py-3.5 bg-theme-base rounded-lg justify-start items-center gap-5 flex">
          <div className="pr-2.5 justify-start items-center gap-3 flex">
            <Icon
              fill="fill-none stroke-2 stroke-text-dark"
              sizeRules="h-3.5 w-3.5"
            >
              <SearchIcon />
            </Icon>

            <div className=" text-sm sm:text-base font-normal leading-tight">
              Search by Keyword
            </div>
          </div>
          {/* searchbar end */}
        </div>
      </div>
      {user ? (
        <ProfileView
          name={user.screenName}
          profile_photo={user.profilePhotoUrl}
        />
      ) : (
        <LogInButton login={onTwitterLogin} />
      )}
    </div>
  );
};

export default TopNavBar;
