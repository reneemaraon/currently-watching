import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

export const NavItem = ({ itemName, onClick, path }) => {
  const { pathname } = useLocation();

  return (
    <div
      className={`
        w-full
        h-14
        px-10
        justify-start
        items-center
        gap-2.5 inline-flex
        group
        cursor-pointer
        ${pathname.includes(path) && 'bg-brand-lavender bg-opacity-15'}
        hover:bg-brand-lavender
        hover:bg-opacity-15
    `}
      onClick={onClick}
    >
      <p className="group-hover:text-theme-negative-base text-sm">{itemName}</p>
    </div>
  );
};

export default function SideBar() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="hidden xl:inline-flex w-60 border-r border-light-stroke fixed top-0 left-0 z-20 h-screen supports-backdrop-blur:bg-theme-base/100 bg-transparent py-5 bg-opacity-40 flex-col justify-start items-start gap-1">
      <button className="w-full h-16 px-7 items-center gap-2.5 inline-flex">
        <div className="tracking-wide font-bold">Currently Watching</div>
      </button>
      <NavItem itemName="Home" onClick={() => navigate('/')} />
      <NavItem
        itemName="Shows"
        path="/shows"
        onClick={() => navigate('/shows')}
      />
      <NavItem
        itemName="Reviews"
        path="/reviews"
        onClick={() => navigate('/reviews')}
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
