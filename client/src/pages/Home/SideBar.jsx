import React from 'react'

export default function SideBar() {
  return (
    <div className="w-60  border-slate-50/[0.1] fixed top-0 left-0 z-40 h-screen supports-backdrop-blur:bg-white/60 bg-transparent py-5 bg-stone-50 bg-opacity-20 flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="self-stretch h-[60px] px-[30px] justify-start items-center gap-2.5 inline-flex">
            <div className="text-sky-800 text-base font-bold font-['Inter'] tracking-wide">Currently Watching</div>
        </div>
        <div className="self-stretch h-[55px] px-10 bg-indigo-200 justify-start items-center gap-2.5 inline-flex">
            <div className="text-sky-800 text-sm font-bold font-['Inter']">Home</div>
        </div>
        <div className="self-stretch h-[55px] px-10 justify-start items-center gap-2.5 inline-flex">
            <div className="text-sky-800 text-sm font-normal font-['Inter']">My Lists</div>
        </div>
        <div className="self-stretch h-[55px] px-10 justify-start items-center gap-2.5 inline-flex">
            <div className="text-sky-800 text-sm font-normal font-['Inter']">Trending</div>
        </div>
    </div>
  )
}
