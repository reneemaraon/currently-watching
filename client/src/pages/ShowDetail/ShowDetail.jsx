import React from 'react'

export default function ShowDetail() {
  return (
    <div className="w-full inline-flex flex-col items-center relative">
      

      <div className="w-full max-w-[1200px] px-16 max-[900px]:px-8 max-[600px]:px-5 py-8 flex-col justify-start items-center gap-24 inline-flex">
      {/* Main contentt */}
      <div className="z-10 Main w-[1080px] h-[2083px] pb-[50px] flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="ReviewWriteContainer w-[1080px] h-[1628px] px-[35px] py-[30px] bg-white rounded-[15px] flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="Header self-stretch h-[474px] pb-[15px] flex-col justify-start items-start gap-[13px] flex">
            <div className="TitleLine self-stretch justify-between items-start inline-flex">
              <div className="Details grow shrink basis-0 h-[459px] justify-start items-start gap-5 flex">
                <div className="PosterContainer rounded-[10px] justify-start items-start gap-2.5 flex">
                  <img className="W29ab2oleis9iwitus8bkfva0cp1 w-[299px] h-[448px]" src="https://via.placeholder.com/299x448" />
                </div>
                <div className="ShowDetails grow shrink basis-0 px-[15px] flex-col justify-start items-start gap-[15px] inline-flex">
                  <div className="ShowHeader self-stretch pb-[5px] border-b border-slate-200 justify-between items-start inline-flex">
                    <div className="TitleGenre w-[482.50px] py-2.5 flex-col justify-start items-start gap-[15px] inline-flex">
                      <div className="TitleAndViews self-stretch justify-start items-center gap-[5px] inline-flex">
                        <div className="TheGlory2022 text-gray-800 text-2xl font-medium font-['Inter']">The Glory (2022)</div>
                        <div className="454kWatched text-zinc-500 text-[13px] font-normal font-['Inter']">• 454k watched</div>
                      </div>
                      <div className="SeasonsPg13ThrillerRevenge self-stretch text-indigo-800 text-base font-normal font-['Inter']">2 seasons | PG-13 | Thriller, Revenge</div>
                    </div>
                    <div className="ReviewActions justify-start items-start gap-2.5 flex">
                      <div className="CircularButton w-10 h-10 bg-zinc-100 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="Icon w-[22px] h-[22px] relative" />
                      </div>
                      <div className="CircularButton w-10 h-10 bg-zinc-100 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="Icon w-[22px] h-[22px] relative" />
                      </div>
                      <div className="CircularButton w-10 h-10 bg-zinc-100 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="Icon w-[22px] h-[22px] relative" />
                      </div>
                      <div className="CircularButton w-10 h-10 bg-zinc-100 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
                        <div className="Icon w-[22px] h-[22px] relative" />
                      </div>
                    </div>
                  </div>
                  <div className="AYoungWomanBulliedToThePointOfDecidingToDropOutOfSchoolPlansTheBestWayToGetRevengeAfterBecomingAPrimarySchoolTeacherSheTakesInTheSonOfTheManWhoTormentedHerTheMostToEnactHerVengeance self-stretch text-gray-800 text-base font-normal leading-7">A young woman, bullied to the point of deciding to drop out of school, plans the best way to get revenge. After becoming a primary school teacher, she takes in the son of the man who tormented her the most to enact her vengeance.</div>
                  <div className="Cast pb-1.5 justify-start items-start gap-2.5 inline-flex">
                    <div className="Cast text-gray-800 text-sm font-medium font-['Inter']">Cast:</div>
                    <div className="SongHyeKyoLeeDohyunLimJiyeon text-gray-800 text-sm font-bold font-['Inter']">Song Hye Kyo, Lee Dohyun, Lim Jiyeon</div>
                  </div>
                  <div className="StatContainer py-[15px] flex-col justify-start items-start gap-2.5 flex">
                    <div className="Ratings px-5 py-[15px] rounded-[10px] border border-slate-200 justify-start items-start gap-[42px] inline-flex">
                      <div className="AspectRatings flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="RatingHeader pb-1.5 justify-start items-start gap-2.5 inline-flex">
                          <div className="AveragePerAspect text-gray-800 text-sm font-medium font-['Inter']">Average per aspect</div>
                        </div>
                        <div className="Right flex-col justify-start items-start gap-3 flex">
                          <div className="RatingRow w-[149px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
                            <div className="Acting text-gray-800 text-[13px] font-bold font-['Inter']">Acting</div>
                            <div className="Rating w-[37.66px] self-stretch justify-start items-center gap-0.5 flex">
                              <div className="0 text-right text-gray-800 text-[13px] font-medium font-['Inter']">2.6</div>
                            </div>
                          </div>
                          <div className="RatingRow w-[149px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
                            <div className="Acting text-gray-800 text-[13px] font-bold font-['Inter']">Plot</div>
                            <div className="Rating w-[34.66px] self-stretch justify-start items-center gap-0.5 flex">
                              <div className="0 text-right text-gray-800 text-[13px] font-medium font-['Inter']">3.1</div>
                            </div>
                          </div>
                          <div className="RatingRow w-[149px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
                            <div className="Acting text-gray-800 text-[13px] font-bold font-['Inter']">Visuals</div>
                            <div className="Rating w-[37.66px] self-stretch justify-start items-center gap-0.5 flex">
                              <div className="0 text-right text-gray-800 text-[13px] font-medium font-['Inter']">2.0</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="AspectRatings self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                        <div className="RatingHeader pb-1.5 justify-start items-start gap-2.5 inline-flex">
                          <div className="AverageTotalRating text-gray-800 text-sm font-medium font-['Inter']">Average Total Rating</div>
                        </div>
                        <div className="RatingsContainer self-stretch py-[5px] justify-center items-center gap-2.5 inline-flex">
                          <div className="StarRating w-20 h-20 px-2.5 py-5 rounded-[40px] border-2 border-cyan-500 justify-center items-center gap-[5px] flex">
                            <div className="8 text-black text-xl font-bold leading-[14px]">4.8</div>
                          </div>
                        </div>
                        <div className="From234kReviews self-stretch text-center"><span className="text-gray-800 text-[13px] font-normal leading-normal">from </span><span className="text-gray-800 text-[13px] font-bold leading-normal">23.4k</span><span className="text-gray-800 text-[13px] font-normal leading-normal"> reviews</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Footer self-stretch h-[1084px] px-5 py-[30px] rounded-[17px] flex-col justify-center items-start gap-[50px] flex">
            <div className="ReviewSection self-stretch h-[1024px] pt-[30px] border-t border-slate-200 flex-col justify-center items-center gap-[15px] flex">
              <div className="Header self-stretch pb-5 border-b justify-between items-start inline-flex">
                <div className="Reviews20"><span className="text-gray-800 text-2xl font-medium font-['Inter']">Reviews </span><span className="text-neutral-300 text-2xl font-medium font-['Inter']">(20)</span></div>
                <div className="ActionsList w-[146px] justify-end items-start gap-2.5 flex">
                  <div className="Button px-5 py-[15px] bg-gray-800 rounded-lg justify-center items-center gap-2 flex">
                    <div className="Button grow shrink basis-0 text-center text-white text-base font-semibold font-['Inter']">+ Add Review</div>
                  </div>
                </div>
              </div>
              <div className="CommentList self-stretch h-[909px] px-5 flex-col justify-center items-start gap-[15px] flex">
                <div className="ReviewListItem w-[940px] bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
                  <div className="ReviewDetails grow shrink basis-0 p-[15px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="Author self-stretch pl-[5px] justify-between items-start inline-flex">
                      <div className="Profile justify-start items-center gap-3 flex">
                        <img className="ProfilePhoto w-[41px] h-[42px] relative rounded-[40px]" src="https://via.placeholder.com/41x42" />
                        <div className="AccDetails flex-col justify-center items-start gap-0.5 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-medium font-['Inter']">Hwang Inyoup</div>
                          <div className="Username text-slate-500 text-sm font-normal font-['Inter']">@hi_high_hiy</div>
                        </div>
                      </div>
                      <div className="Frame w-5 h-5 relative" />
                    </div>
                    <div className="ReviewSnippets self-stretch h-[70px] pl-[5px] flex-col justify-start items-start gap-2 flex">
                      <div className="Title text-gray-800 text-xl font-medium font-['Inter']">This was such a great watch</div>
                      <div className="Preview self-stretch text-zinc-500 text-base font-normal font-['Inter']">I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...Whenever there was something bla ba bla. So heartbreaking to see them not </div>
                    </div>
                    <div className="Footer self-stretch justify-between items-end inline-flex">
                      <div className="Ratings justify-start items-start gap-[7px] flex">
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Acting</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Plot</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Visuals</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                      </div>
                      <div className="Options justify-end items-start gap-4 flex">
                        <div className="Like flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                        <div className="Share flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ReviewListItem w-[940px] bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
                  <div className="ReviewDetails grow shrink basis-0 p-[15px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="Author self-stretch pl-[5px] justify-between items-start inline-flex">
                      <div className="Profile justify-start items-center gap-3 flex">
                        <img className="ProfilePhoto w-[41px] h-[42px] relative rounded-[40px]" src="https://via.placeholder.com/41x42" />
                        <div className="AccDetails flex-col justify-center items-start gap-0.5 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-medium font-['Inter']">Hwang Inyoup</div>
                          <div className="Username text-slate-500 text-sm font-normal font-['Inter']">@hi_high_hiy</div>
                        </div>
                      </div>
                      <div className="Frame w-5 h-5 relative" />
                    </div>
                    <div className="ReviewSnippets self-stretch h-[70px] pl-[5px] flex-col justify-start items-start gap-2 flex">
                      <div className="Title text-gray-800 text-xl font-medium font-['Inter']">This was such a great watch</div>
                      <div className="Preview self-stretch text-zinc-500 text-base font-normal font-['Inter']">I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...Whenever there was something bla ba bla. So heartbreaking to see them not </div>
                    </div>
                    <div className="Footer self-stretch justify-between items-end inline-flex">
                      <div className="Ratings justify-start items-start gap-[7px] flex">
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Acting</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Plot</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Visuals</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                      </div>
                      <div className="Options justify-end items-start gap-4 flex">
                        <div className="Like flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                        <div className="Share flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ReviewListItem w-[940px] bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
                  <div className="ReviewDetails grow shrink basis-0 p-[15px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="Author self-stretch pl-[5px] justify-between items-start inline-flex">
                      <div className="Profile justify-start items-center gap-3 flex">
                        <img className="ProfilePhoto w-[41px] h-[42px] relative rounded-[40px]" src="https://via.placeholder.com/41x42" />
                        <div className="AccDetails flex-col justify-center items-start gap-0.5 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-medium font-['Inter']">Hwang Inyoup</div>
                          <div className="Username text-slate-500 text-sm font-normal font-['Inter']">@hi_high_hiy</div>
                        </div>
                      </div>
                      <div className="Frame w-5 h-5 relative" />
                    </div>
                    <div className="ReviewSnippets self-stretch h-[70px] pl-[5px] flex-col justify-start items-start gap-2 flex">
                      <div className="Title text-gray-800 text-xl font-medium font-['Inter']">This was such a great watch</div>
                      <div className="Preview self-stretch text-zinc-500 text-base font-normal font-['Inter']">I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...Whenever there was something bla ba bla. So heartbreaking to see them not </div>
                    </div>
                    <div className="Footer self-stretch justify-between items-end inline-flex">
                      <div className="Ratings justify-start items-start gap-[7px] flex">
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Acting</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Plot</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Visuals</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                      </div>
                      <div className="Options justify-end items-start gap-4 flex">
                        <div className="Like flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                        <div className="Share flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ReviewListItem w-[940px] bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
                  <div className="ReviewDetails grow shrink basis-0 p-[15px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="Author self-stretch pl-[5px] justify-between items-start inline-flex">
                      <div className="Profile justify-start items-center gap-3 flex">
                        <img className="ProfilePhoto w-[41px] h-[42px] relative rounded-[40px]" src="https://via.placeholder.com/41x42" />
                        <div className="AccDetails flex-col justify-center items-start gap-0.5 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-medium font-['Inter']">Hwang Inyoup</div>
                          <div className="Username text-slate-500 text-sm font-normal font-['Inter']">@hi_high_hiy</div>
                        </div>
                      </div>
                      <div className="Frame w-5 h-5 relative" />
                    </div>
                    <div className="ReviewSnippets self-stretch h-[70px] pl-[5px] flex-col justify-start items-start gap-2 flex">
                      <div className="Title text-gray-800 text-xl font-medium font-['Inter']">This was such a great watch</div>
                      <div className="Preview self-stretch text-zinc-500 text-base font-normal font-['Inter']">I had a great time watching this drama. Whenever there was something bla ba bla. So heartbreaking to see them not end up together and what happ...Whenever there was something bla ba bla. So heartbreaking to see them not </div>
                    </div>
                    <div className="Footer self-stretch justify-between items-end inline-flex">
                      <div className="Ratings justify-start items-start gap-[7px] flex">
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Acting</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Plot</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                        <div className="RatingRow p-[5px] rounded-[5px] border border-yellow-300 border-opacity-80 justify-start items-center gap-2.5 flex">
                          <div className="Acting text-gray-800 text-xs font-medium font-['Inter']">Visuals</div>
                          <div className="Rating w-[82.65px] self-stretch justify-start items-center gap-[5px] flex" />
                        </div>
                      </div>
                      <div className="Options justify-end items-start gap-4 flex">
                        <div className="Like flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                        <div className="Share flex-col justify-start items-end inline-flex">
                          <div className="Frame w-5 h-5 relative" />
                          <div className=" text-zinc-500 text-[8px] font-medium font-['Inter']">1234</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="LoadMorePanel self-stretch h-[65px] flex-col justify-end items-center gap-2.5 flex">
                  <div className="Button px-5 py-[15px] bg-zinc-100 rounded-[30px] border border-slate-200 justify-center items-center gap-2 inline-flex">
                    <div className="Button grow shrink basis-0 text-center text-gray-800 text-base font-semibold font-['Inter']">Load More</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
