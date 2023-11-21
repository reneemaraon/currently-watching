import React from 'react'

export default function NewHeader() {
  return (
    <div className="z-40 w-full h-20 px-[50px] bg-zinc-100 bg-opacity-25 backdrop-blur-sm justify-between items-center inline-flex sticky top-0">
    <div className="w-[260px] h-10 px-5 py-[15px] bg-white rounded-[10px] justify-start items-center gap-5 flex">
        <div className="pr-2.5 justify-start items-center gap-2.5 flex">
            <div className="text-gray-800 text-[15px] font-normal font-['Inter'] leading-tight">Search by Keyword</div>
        </div>
    </div>
    <div className="w-[142px] px-2.5 py-7 justify-end items-center gap-2.5 flex">
        <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" />
        <div className="text-gray-800 text-[15px] font-normal font-['Inter'] leading-tight">John Smith</div>
    </div>
</div>
  )
}
