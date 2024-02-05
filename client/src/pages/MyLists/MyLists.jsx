function MyListsPage() {
  return (
    <div className="w-full max-w-[1200px] px-16 max-[900px]:px-8 max-[600px]:px-5 py-8 flex-col justify-start items-center gap-24 inline-flex">
      <div className="ReviewsBody w-full h-[1391px] flex-col justify-start items-center gap-2.5 inline-flex">
        <div className="Header self-stretch pb-[30px] justify-center items-end gap-5 inline-flex">
          <div className="SecitonHeader grow shrink basis-0 h-[39px] justify-start items-start gap-2.5 flex">
            <div className="MyLists text-gray-800 text-[32px] font-medium font-['Inter']">My Lists</div>
          </div>
          <div className="AddReviewContainer flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="Button px-5 py-[15px] bg-gray-800 rounded-lg justify-center items-center gap-2 inline-flex">
              <div className="Button grow shrink basis-0 text-center text-white text-base font-semibold font-['Inter']">+ Add Custom List</div>
            </div>
          </div>
        </div>
        <div className="ListArea self-stretch h-[1301px] flex-col justify-start items-center gap-[50px] flex">
          <div className="List self-stretch h-[542px] p-2.5 rounded-[15px] flex-col justify-start items-start gap-2.5 flex">
            <div className="ListHeader self-stretch px-[15px] py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="ListTitle grow shrink basis-0 text-gray-800 text-2xl font-normal font-['Inter']">Favorites</div>
              <div className="Actions justify-start items-start gap-2.5 flex">
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[1.25px] justify-center items-center inline-flex" />
                </div>
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[1.25px] justify-center items-center inline-flex" />
                </div>
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[0.68px] justify-center items-center inline-flex" />
                </div>
                <div className="Button px-2.5 py-2 bg-cyan-500 bg-opacity-20 rounded-[18px] justify-center items-center gap-[5px] flex">
                  <div className="Icon w-2.5 h-2.5 justify-center items-center flex" />
                  <div className="Button text-center text-cyan-500 text-[13px] font-medium font-['Inter']">Add drama</div>
                </div>
              </div>
            </div>
            <div className="List self-stretch h-[460px] px-2.5 flex-col justify-start items-start gap-[5px] flex">
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[131px] self-stretch justify-end items-center gap-5 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-[35px] bg-white bg-opacity-70 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[15px] rounded-br-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
                  <div className="Icon w-2.5 h-2.5 py-[2.50px] origin-top-left -rotate-180 justify-center items-center flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="List self-stretch h-[117px] p-2.5 rounded-[15px] flex-col justify-start items-start gap-2.5 flex">
            <div className="ListHeader self-stretch px-[15px] py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="ListTitle grow shrink basis-0 text-gray-800 text-2xl font-normal font-['Inter']">Favorites</div>
              <div className="Actions justify-start items-start gap-2.5 flex">
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[1.25px] justify-center items-center inline-flex" />
                </div>
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[1.25px] justify-center items-center inline-flex" />
                </div>
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[0.68px] justify-center items-center inline-flex" />
                </div>
                <div className="Button px-2.5 py-2 bg-cyan-500 bg-opacity-20 rounded-[18px] justify-center items-center gap-[5px] flex">
                  <div className="Icon w-2.5 h-2.5 justify-center items-center flex" />
                  <div className="Button text-center text-cyan-500 text-[13px] font-medium font-['Inter']">Add drama</div>
                </div>
              </div>
            </div>
            <div className="List self-stretch h-[35px] px-2.5 flex-col justify-start items-start gap-[5px] flex">
              <div className="ShowDetailCard self-stretch h-[35px] bg-white bg-opacity-20 rounded-[10px] border border-slate-200 justify-start items-center inline-flex">
                <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
                  <div className="ExpandList20 text-cyan-500 text-xs font-normal font-['Inter']">Expand List (20)</div>
                  <div className="Icon w-2.5 h-2.5 py-[2.50px] justify-center items-center flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="List self-stretch h-[542px] p-2.5 rounded-[15px] flex-col justify-start items-start gap-2.5 flex">
            <div className="ListHeader self-stretch px-[15px] py-2.5 justify-start items-start gap-2.5 inline-flex">
              <div className="ListTitle grow shrink basis-0 text-gray-800 text-2xl font-normal font-['Inter']">Favorites</div>
              <div className="Actions justify-start items-start gap-2.5 flex">
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[1.25px] justify-center items-center inline-flex" />
                </div>
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[1.25px] justify-center items-center inline-flex" />
                </div>
                <div className="CircularButton w-[30px] h-[30px] bg-white bg-opacity-50 rounded-[15px] border border-slate-200 flex-col justify-center items-center gap-2.5 inline-flex">
                  <div className="Icon w-[15px] h-[15px] px-[0.68px] justify-center items-center inline-flex" />
                </div>
                <div className="Button px-2.5 py-2 bg-cyan-500 bg-opacity-20 rounded-[18px] justify-center items-center gap-[5px] flex">
                  <div className="Icon w-2.5 h-2.5 justify-center items-center flex" />
                  <div className="Button text-center text-cyan-500 text-[13px] font-medium font-['Inter']">Add drama</div>
                </div>
              </div>
            </div>
            <div className="List self-stretch h-[460px] px-2.5 flex-col justify-start items-start gap-[5px] flex">
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[151px] self-stretch justify-end items-center gap-10 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-20 bg-white bg-opacity-70 rounded-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="RankNumContainer h-[17px] px-10 justify-center items-center gap-2.5 flex">
                  <div className="RankNumber text-gray-800 text-2xl font-semibold leading-none">4</div>
                </div>
                <img className="ShowImage w-20 h-[60px] rounded-[10px]" src="https://via.placeholder.com/80x60" />
                <div className="ShowDetails grow shrink basis-0 self-stretch px-[26px] py-[11px] justify-between items-center flex">
                  <div className="ShowDetailsText pl-[5px] pt-[5px] flex-col justify-start items-start gap-[5px] inline-flex">
                    <div className="Title"><span className="text-gray-800 text-lg font-semibold font-['Inter']">The Glory</span><span className="text-gray-800 text-lg font-bold font-['Inter']"> </span><span className="text-gray-800 text-lg font-normal font-['Inter']">(2022)</span></div>
                    <div className="RatingRow justify-start items-center gap-[5px] inline-flex">
                      <div className="Score info-text font-medium font-['Inter']">Score</div>
                      <div className="Rating w-[32.53px] self-stretch justify-start items-center gap-0.5 flex">
                        <div className="0 info-text font-bold font-['Inter']">5.0</div>
                      </div>
                      <div className="NoOfReviews text-slate-500 text-[11px] font-normal font-['Inter']">(12.5k)</div>
                    </div>
                  </div>
                  <div className="Right w-[131px] self-stretch justify-end items-center gap-5 flex">
                    <div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
                      <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                        <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
                          <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                        </div>
                      </div>
                    </div>
                    <div className="MoveIcon w-9 h-9 px-[5.62px] py-[10.12px] justify-center items-center flex" />
                  </div>
                </div>
              </div>
              <div className="ShowDetailCard self-stretch h-[35px] bg-white bg-opacity-70 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[15px] rounded-br-[15px] border border-slate-200 justify-start items-center inline-flex">
                <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
                  <div className="Icon w-2.5 h-2.5 py-[2.50px] origin-top-left -rotate-180 justify-center items-center flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default MyListsPage;
