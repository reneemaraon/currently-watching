import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export const NavItem = ({ itemName, onClick, path }) => {
  const { pathname } = useLocation();

  return (
    <button
      className={`
        w-full
        h-14
        px-10
        justify-start
        items-center
        gap-2.5 inline-flex
        group
        ${pathname.includes(path) && "bg-brand-lavender bg-opacity-25"}
        hover:bg-brand-lavender
        hover:bg-opacity-25
    `}
      onClick={onClick}
    >
      <p className="group-hover:text-theme-negative-base text-sm">{itemName}</p>
    </button>
  );
};

export default function SideBar() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="hidden xl:inline-flex w-60 border border-zinc-300 fixed top-0 left-0 z-20 h-screen supports-backdrop-blur:bg-theme-base/100 bg-transparent py-5 bg-slate-100 bg-opacity-40 flex-col justify-start items-start gap-[15px]">
      <button className="w-full h-16 px-7 items-center gap-2.5 inline-flex">
        <div className="tracking-wide font-bold">Currently Watching</div>
      </button>
      <NavItem itemName="Home" onClick={() => navigate("/")} />
      <NavItem
        itemName="Reviews"
        path="/reviews"
        onClick={() => navigate("/reviews")}
      />
      {user && user._id && (
        <NavItem
          itemName="My Lists"
          path={`/users/${user._id}/lists`}
          onClick={() => navigate(`/users/${user._id}/lists`)}
        />
      )}
    </div>
  );
}
