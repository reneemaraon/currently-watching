import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = ({ itemName, path }) => (
  <Link
    className="
        w-full
        h-14
        px-10
        justify-start
        items-center
        gap-2.5 inline-flex
        group
        hover:bg-brand-lavender
        hover:bg-opacity-5
    "
    to={path || '/'}
  >
    <p className="group-hover:text-brand-dark-purple text-sm">{itemName}</p>
  </Link>
);

export default function SideBar() {
  return (
    <div className="hidden xl:inline-flex w-60 border border-zinc-300 fixed top-0 left-0 z-20 h-screen supports-backdrop-blur:bg-theme-base/100 bg-transparent py-5 bg-slate-100 bg-opacity-40 flex-col justify-start items-start gap-[15px]">
      <button className="w-full h-16 px-7 items-center gap-2.5 inline-flex">
        <div className="tracking-wide font-bold">Currently Watching</div>
      </button>
      <NavItem itemName="Home" />
      <NavItem itemName="Reviews" path="/reviews" />
      <NavItem itemName="My Lists" path="/my-lists" />
    </div>
  );
}
