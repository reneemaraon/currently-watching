import React from 'react'
import MainContentEditor from './components/RichTextEditorBody';
import StarInput from './components/StarInput';

 
const ShowDetail = () => {
  return (
    <div className="max-[500px]:h-[285px] h-[175px] w-full max-w-[800px] border-light-stroke overflow-hidden border rounded-lg max-[500px]:flex-col justify-start items-start inline-flex">
      <div className="max-[500px]:w-full w-1/3 max-[500px]:h-1/3 h-full">
        <img className="object-cover w-full h-full" src="https://via.placeholder.com/220x214" />
      </div>
      <div className="h-full max-[500px]:h-2/3 w-full p-3">
        <div className="w-full h-full flex flex-col gap-1">
          <div className="text-l md:text-l font-semibold">The Glory (2022)</div>
          <div className="text-[12px] h-5 font-normal w-full">
            Ji Changwook, Choi Sungeun, Hwang Inyoup
          </div>
          <div className="Preview grow overflow-hidden">
            <div className="info-text font-normal">
              I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happI had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...
            </div>
          </div>
          <div className="pt-3 border-t border-zinc-300 border-opacity-50 justify-start items-start gap-2.5 inline-flex">
            <div className="justify-center items-center gap-[3px] flex">
              <div className="text-gray-800 text-[11px] font-normal">Acting</div>
              <div className="w-[31.49px] justify-start items-center gap-0.5 flex">
                <div className="text-gray-800 text-[11px] font-bold">5.0</div>
              </div>
            </div>
            <div className="justify-center items-center gap-[3px] flex">
              <div className="text-gray-800 text-[11px] font-normal">Plot</div>
              <div className="w-[31.49px] justify-start items-center gap-0.5 flex">
                <div className="text-gray-800 text-[11px] font-bold">5.0</div>
              </div>
            </div>
            <div className="justify-center items-center gap-[3px] flex">
              <div className="text-gray-800 text-[11px] font-normal">Visuals</div>
              <div className="w-[31.49px] justify-start items-center gap-0.5 flex">
                <div className="text-gray-800 text-[11px] font-bold">5.0</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function CreateReview() {
  return (
    <div className="
      w-full max-w-[1200px] 
      px-8 max-[900px]:px-4 max-[600px]:px-2 max-[400px]:px-0.5
      py-8 max-[400px]:py-4

      flex-col justify-start items-center gap-24 inline-flex">
      <div className="WhiteContainer w-full 
        px-2 min-[500px]:px-6 py-0.5 min-[500px]:py-2 
        bg-theme-base rounded-[15px] flex-col justify-start items-start inline-flex">
        <div className="pt-4 max-[400px]:pt-2 pb-6 w-full flex-col justify-start gap-4 inline-flex">
          <div className="text-l md:text-xl font-semibold">Your Review</div>
          <div className="w-full inline-flex">
            <ShowDetail />
          </div>
        </div>
        <div className="w-full pt-4 pb-8 justify-start gap-10 inline-flex flex-col">
          <StarInput />
        </div>
        <div className="w-full py-8 border-b flex-col justify-center items-start gap-5 flex">
          <div className="w-full h-[59px] pb-[15px] flex-col justify-start items-start gap-[5px] flex">
            <div><span className="subheader-text">Write a narrative review </span><span className="text-zinc-500 text-xs font-normal">(optional)</span></div>
            <div className="text-zinc-500 text-sm font-normal">Share your thoughts of this drama below.</div>
          </div>
          <div className="w-full h-[87px] flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="subheader-text">Headline</div>
            </div>
            <div className="w-full max-w-[600px] h-[55px] px-5 bg-theme-base rounded-[10px] border border-slate-200 flex-col justify-center items-start gap-2.5 flex">
              <div className="text-gray-800 text-base font-normal leading-tight">This was bearable to watch</div>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="subheader-text">Body</div>
            </div>
            <MainContentEditor />
          </div>
          <div className="px-2.5 py-[5px] justify-end items-start gap-[5px] inline-flex">
            <div className="px-5 py-[15px] bg-slate-500 rounded-lg justify-center items-center gap-2 flex">
              <div className="grow shrink basis-0 text-center text-white text-base font-semibold">Cancel</div>
            </div>
            <div className="px-5 py-[15px] bg-cyan-500 rounded-lg justify-center items-center gap-2 flex">
              <div className="grow shrink basis-0 text-center text-white text-base font-semibold">Save</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
