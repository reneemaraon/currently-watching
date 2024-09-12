import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import ProfileView from "./ProfileDropdown";
import CustomButton from "../../Common/CustomButton";
import Icon from "../../Common/Icon";
import { MoonIcon, SunIcon, TwitterIcon } from "../../Common/IconList";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const LogInButton = ({ login }) => (
  <>
    <CustomButton onClick={login} styleSet="primary" size="defaultResize">
      <Icon fill="fill-white" sizeRules="h-5 w-5">
        <TwitterIcon />
      </Icon>
      Login with Twitter
    </CustomButton>
  </>
);

const TopNavBar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const { user, loginUser } = useAuthContext();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Check the system preference
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(systemPrefersDark);
  }, []);

  const navigateToShow = (id) => {
    navigate(`shows/${id}`);
  };

  return (
    <div className="top_nav z-20 w-full h-20 gap-5 max-[600px]:h-14 px-8 sm:px-10 max-[600px]:px-6 bg-theme-base/20 backdrop-blur-sm border-b border-light-stroke/[.45] items-center inline-flex sticky top-0">
      <div className="left_side grow justify-start items-center gap-[30px] flex">
        <div
          onClick={toggleSidebar}
          className="xl:hidden move_icon px-0.5 sm:px-1.5 py-1.5 rounded hover:bg-main-bg hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="max-[650px]:hidden grow w-full max-w-[260px] sm:max-w-[320px]">
          <SearchBar onItemClick={navigateToShow} />
        </div>
      </div>
      <div className="inline-flex gap-4 items-center">
        {isDarkMode ? (
          <div
            onClick={() => setIsDarkMode(false)}
            className="group rounded-xl hover:bg-orange-400 p-2 cursor-pointer transition-colors duration-300"
          >
            <Icon
              sizeRules="w-5 h-5"
              fill="group-hover:fill-white fill-light-text"
            >
              <SunIcon />
            </Icon>
          </div>
        ) : (
          <div
            onClick={() => setIsDarkMode(true)}
            className="group rounded-xl hover:bg-blue-950 p-2 cursor-pointer transition-colors duration-300"
          >
            <Icon
              sizeRules="w-5 h-5"
              fill="group-hover:fill-white fill-light-text"
            >
              <MoonIcon />
            </Icon>
          </div>
        )}

        {user ? (
          <ProfileView authUser={user} />
        ) : (
          <LogInButton login={loginUser} />
        )}
      </div>
    </div>
  );
};

export default TopNavBar;
