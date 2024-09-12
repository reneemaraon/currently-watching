import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { NavItem } from "./SideBar";

const PopupSidebar = ({ toggleSidebar, anchor }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const onClickNav = (path) => {
    return () => {
      toggleSidebar();
      navigate(path);
    };
  };

  return (
    <div
      ref={anchor}
      className="fixed top-0 left-0 inline-flex w-60 border border-light-stroke z-20 h-screen supports-backdrop-blur:bg-theme-base/100 py-16 bg-main-bg flex-col justify-start items-start gap-[15px]"
    >
      <div className="p-4 absolute right-0 top-0">
        <div
          onClick={toggleSidebar}
          className="xl:hidden move_icon px-1.5 py-1.5 rounded-full hover:bg-main-bg hover:cursor-pointer"
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
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <NavItem onClick={onClickNav("/")} itemName="Home" />
      <NavItem onClick={onClickNav("/shows")} path="/shows" itemName="Shows" />
      <NavItem
        onClick={onClickNav("/reviews")}
        path="/reviews"
        itemName="Reviews"
      />
      {user && user._id && (
        <NavItem
          path={`/users/${user._id}/lists`}
          onClick={onClickNav(`/users/${user._id}/lists`)}
          itemName="My Lists"
        />
      )}
    </div>
  );
};

export default PopupSidebar;
