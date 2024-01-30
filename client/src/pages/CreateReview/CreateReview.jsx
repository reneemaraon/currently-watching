import React from 'react'

const StarInput = () => {
  return (
    <div className="flex-col justify-start items-start gap-[15px] inline-flex">
      <div className="flex-col justify-start items-start gap-1 flex">
        <div className="text-black text-lg font-medium">Star Ratings</div>
        <div className="text-zinc-500 text-sm font-normal">Rate the following aspects of this drama from 1 to 5 stars</div>
      </div>
      <div className="flex-col justify-start items-start gap-3 flex">
        <div className="w-[430px] px-3.5 py-2 rounded-[10px] border border-slate-200 justify-between items-start inline-flex">
          <div className="grow shrink basis-0 pr-2.5 flex-col justify-end items-start gap-[3px] inline-flex">
            <div className="text-black text-base font-bold">Acting</div>
            <div className="self-stretch text-zinc-500 text-xs font-normal">Cast performances and portrayals</div>
          </div>
          <div className="w-[154.86px] self-stretch justify-start items-center gap-2.5 flex"></div>
        </div>
        <div className="w-[430px] px-3.5 py-2 rounded-[10px] border border-slate-200 justify-between items-start inline-flex">
          <div className="grow shrink basis-0 pr-2.5 flex-col justify-end items-start gap-[3px] inline-flex">
            <div className="text-black text-base font-bold">Plot</div>
            <div className="self-stretch text-zinc-500 text-xs font-normal">Story, script, writing, pace</div>
          </div>
          <div className="w-[154.86px] self-stretch justify-start items-center gap-2.5 flex"></div>
        </div>
        <div className="w-[430px] px-3.5 py-2 rounded-[10px] border border-slate-200 justify-between items-start inline-flex">
          <div className="grow shrink basis-0 pr-2.5 flex-col justify-end items-start gap-[3px] inline-flex">
            <div className="text-black text-base font-bold">Visuals</div>
            <div className="self-stretch text-zinc-500 text-xs font-normal">Cinematography, shots, setting, props</div>
          </div>
          <div className="w-[154.86px] self-stretch justify-start items-center gap-2.5 flex"></div>
        </div>
      </div>
    </div>
  );
}
 
const ShowDetail = () => {
  return (
    <div className="grow h-[220px] w-[480px] rounded-[17px] shadow flex-col justify-center items-end gap-2.5 inline-flex">
      <div className="bg-theme-base w-full h-full bg-opacity-70 rounded-[17px] justify-start items-start inline-flex">
        <img className="grow shrink basis-0 self-stretch" src="https://via.placeholder.com/220x214" />
        <div className="grow shrink basis-0 self-stretch p-[15px] flex-col justify-between items-start inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-[5px] flex">
            <div className="self-stretch text-xl font-semibold">The Glory (2022)</div>
            <div className="self-stretch text-sm font-normal">Ji Changwook, Choi Sungeun, Hwang Inyoup</div>
            <div className="self-stretch grow shrink basis-0 text-zinc-500 text-xs font-normal">I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happI had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...</div>
          </div>
          <div className="self-stretch h-[57px] py-[3px] flex-col justify-start items-end gap-1 flex">
            <div className="self-stretch h-[51px] flex-col justify-start items-end gap-[3px] flex">
              <div className="self-stretch py-2 border-t border-zinc-300 border-opacity-50 justify-start items-start gap-2.5 inline-flex">
                <div className="justify-center items-center gap-[3px] flex">
                  <div className="text-gray-800 text-[11px] font-normal">Acting</div>
                  <div className="w-[31.49px] self-stretch justify-start items-center gap-0.5 flex">
                    <div className="text-gray-800 text-[11px] font-bold">5.0</div>
                  </div>
                </div>
                <div className="justify-center items-center gap-[3px] flex">
                  <div className="text-gray-800 text-[11px] font-normal">Plot</div>
                  <div className="w-[31.49px] self-stretch justify-start items-center gap-0.5 flex">
                    <div className="text-gray-800 text-[11px] font-bold">5.0</div>
                  </div>
                </div>
                <div className="justify-center items-center gap-[3px] flex">
                  <div className="text-gray-800 text-[11px] font-normal">Visuals</div>
                  <div className="w-[31.49px] self-stretch justify-start items-center gap-0.5 flex">
                    <div className="text-gray-800 text-[11px] font-bold">5.0</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="px-[5px] py-0.5 bg-cyan-500 rounded-[5px] justify-start items-start gap-[5px] flex">
                  <div className="text-white text-xs font-bold">5.0</div>
                </div>
                <div><span className="text-slate-500 text-[10px] font-medium">average from </span><span className="text-slate-500 text-[10px] font-bold">12333</span><span className="text-slate-500 text-[10px] font-medium"> reviews</span></div>
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
    <div className="w-full max-w-[1200px] px-8 max-[900px]:px-4 max-[600px]:px-2 py-8 flex-col justify-start items-center gap-24 inline-flex">
      <div className="w-full px-6 py-2 bg-theme-base rounded-[15px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch py-[15px] border-b border-slate-200 justify-start items-center gap-2.5 inline-flex">
          <div className="text-gray-800 text-xl font-semibold">Your Review</div>
        </div>
        <div className="w-full flex-row-reverse flex-wrap py-[30px] border-b justify-start items-center gap-[15px] inline-flex">
          <ShowDetail />
          <StarInput />
        </div>
        <div className="self-stretch h-[574px] py-5 border-b flex-col justify-center items-start gap-5 flex">
          <div className="self-stretch h-[59px] pb-[15px] border-b flex-col justify-start items-start gap-[5px] flex">
            <div><span className="text-black text-lg font-medium">Write a narrative review </span><span className="text-zinc-500 text-lg font-normal">(optional)</span></div>
            <div className="text-zinc-500 text-sm font-normal">Share your thoughts of this drama below.</div>
          </div>
          <div className="self-stretch h-[87px] flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-black text-lg font-medium">Headline</div>
            </div>
            <div className="w-[510px] h-[55px] px-5 bg-theme-base rounded-[10px] shadow border border-slate-200 flex-col justify-center items-start gap-2.5 flex">
              <div className="text-gray-800 text-base font-normal leading-tight">This was bearable to watch</div>
            </div>
          </div>
          <div className="self-stretch h-[268px] flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-black text-lg font-medium">Body</div>
            </div>
            <div className="self-stretch h-[236px] bg-theme-base rounded-[10px] shadow border border-slate-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="self-stretch p-[15px] rounded-[10px] border-b border-slate-200 justify-start items-start gap-2.5 inline-flex">
                <div className="justify-start items-start gap-5 flex">
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                  <div className="w-[30px] h-[30px] bg-zinc-100 rounded-[15px] flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="w-[15px] h-[15px] relative"></div>
                  </div>
                </div>
              </div>
              <div className="self-stretch grow shrink basis-0 px-[15px] py-[5px] justify-start items-start gap-2.5 inline-flex">
                <div className="grow shrink basis-0 self-stretch text-base font-normal leading-tight">I am so cool wow<br/><br/>sdskdksjdaks<br/>lorem ipsum<br/><br/></div>
              </div>
            </div>
          </div>
          <div className="self-stretch px-2.5 py-[5px] justify-end items-start gap-[5px] inline-flex">
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
