import React from 'react'

export default function ProfilePage() {
  return (
    <div className="w-full inline-flex flex-col items-center relative">
      

      <div className="w-full max-w-[1200px] px-16 max-[900px]:px-8 max-[600px]:px-5 py-8 flex-col justify-start items-center gap-24 inline-flex">
      {/* Main contentt */}
      <div className="z-10 Main w-[1080px] h-[2083px] pb-[50px] flex-col justify-start items-start gap-2.5 inline-flex">
				<div className="ReviewWriteContainer w-full h-[1831px] px-5 py-[30px] bg-white rounded-[15px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
					<div className="TitleLine self-stretch pt-2.5 justify-between items-start inline-flex">
						<div className="ProfileHeader grow shrink basis-0 self-stretch px-[15px] justify-between items-start flex">
							<div className="ProfileDetails w-[482.50px] pb-[15px] flex-col justify-start items-start gap-[15px] inline-flex">
								<div className="Profile justify-start items-start gap-6 inline-flex">
									<img className="ProfilePhoto w-20 h-[82px] relative rounded-[40px]" src="https://via.placeholder.com/80x82" />
									<div className="Text self-stretch flex-col justify-center items-start gap-[5px] inline-flex">
										<div className="TwitterNameAndButton justify-start items-start gap-3 inline-flex">
											<div className="TwtDisplayName text-gray-800 text-2xl font-medium font-['Inter']">Hwang Inyoup</div>
											<div className="Button px-2.5 py-2 bg-cyan-500 bg-opacity-20 rounded-[5px] justify-center items-center gap-[5px] flex">
												<div className="Icon w-2.5 h-2.5 relative" />
												<div className="Button text-center text-cyan-500 text-[13px] font-medium font-['Inter']">Open on Twitter</div>
											</div>
										</div>
										<div className="Username text-zinc-500 text-base font-normal font-['Inter']">@hi_high_hiy</div>
										<div className="DatePublished text-gray-800 text-sm font-normal font-['Inter']">Joined Dec 2024</div>
									</div>
								</div>
							</div>
							<div className="ReviewActions justify-start items-center gap-[15px] flex">
								<div className="CircularButton w-10 h-10 bg-zinc-100 rounded-[20px] flex-col justify-center items-center gap-2.5 inline-flex">
									<div className="Icon w-[22px] h-[22px] relative" />
								</div>
							</div>
						</div>
					</div>
					<div className="Footer self-stretch h-[1654px] px-5 py-[15px] rounded-[17px] shadow flex-col justify-center items-start gap-[30px] flex">
						<div className="ReviewSection self-stretch h-[907px] pt-[30px] border-t border-slate-200 flex-col justify-center items-center gap-[15px] flex">
							<div className="Header self-stretch border-b justify-between items-start inline-flex">
								<div className="Reviews20"><span className="text-gray-800 text-2xl font-medium font-['Inter']">Reviews </span><span className="text-neutral-300 text-2xl font-medium font-['Inter']">(20)</span></div>
								<div className="ActionsList w-[146px] justify-end items-start gap-2.5 flex" />
							</div>
							<div className="CommentList self-stretch h-[812px] flex-col justify-center items-start gap-[15px] flex">
								<div className="ReviewListItem self-stretch bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
									<div className="Show w-60 self-stretch flex-col justify-start items-center gap-[3px] inline-flex">
										<div className="Title w-60 h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-black to-black justify-start items-end gap-2.5 inline-flex">
											<div className="Title grow shrink basis-0 text-white text-sm font-semibold font-['Inter']">Twenty Five Twenty One</div>
										</div>
									</div>
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
										<div className="ReviewSnippets self-stretch h-[108px] pl-[5px] flex-col justify-start items-start gap-2 flex">
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
								<div className="ReviewListItem self-stretch bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
									<div className="Show w-60 self-stretch flex-col justify-start items-center gap-[3px] inline-flex">
										<div className="Title w-60 h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-black to-black justify-start items-end gap-2.5 inline-flex">
											<div className="Title grow shrink basis-0 text-white text-sm font-semibold font-['Inter']">Twenty Five Twenty One</div>
										</div>
									</div>
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
										<div className="ReviewSnippets self-stretch h-[108px] pl-[5px] flex-col justify-start items-start gap-2 flex">
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
								<div className="ReviewListItem self-stretch bg-white bg-opacity-70 rounded-[20px] border border-slate-200 justify-start items-start inline-flex">
									<div className="Show w-60 self-stretch flex-col justify-start items-center gap-[3px] inline-flex">
										<div className="Title w-60 h-[60px] pl-[15px] pr-2.5 pt-2.5 pb-[13px] bg-gradient-to-b from-black to-black justify-start items-end gap-2.5 inline-flex">
											<div className="Title grow shrink basis-0 text-white text-sm font-semibold font-['Inter']">Twenty Five Twenty One</div>
										</div>
									</div>
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
										<div className="ReviewSnippets self-stretch h-[108px] pl-[5px] flex-col justify-start items-start gap-2 flex">
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
								<div className="LoadMorePanel self-stretch h-[65px] shadow flex-col justify-end items-center gap-2.5 flex">
									<div className="Button px-5 py-[15px] bg-zinc-100 rounded-[30px] border border-slate-200 justify-center items-center gap-2 inline-flex">
										<div className="Button grow shrink basis-0 text-center text-gray-800 text-base font-semibold font-['Inter']">Load More Reviews</div>
									</div>
								</div>
							</div>
						</div>
						<div className="Lists self-stretch h-[687px] flex-col justify-center items-center gap-[15px] flex">
							<div className="Header self-stretch justify-between items-center inline-flex">
								<div className="Lists10"><span className="text-gray-800 text-2xl font-medium font-['Inter']">Lists </span><span className="text-neutral-300 text-2xl font-medium font-['Inter']">(10)</span></div>
								<div className="ActionsList w-[146px] justify-end items-start gap-2.5 flex" />
							</div>
							<div className="List self-stretch h-[542px] p-2.5 rounded-[15px] flex-col justify-start items-start gap-2.5 flex">
								<div className="ListHeader self-stretch px-[15px] py-2.5 justify-start items-start gap-2.5 inline-flex">
									<div className="ListTitle grow shrink basis-0 text-gray-800 text-2xl font-normal font-['Inter']">Favorites</div>
									<div className="Actions" />
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
											<div className="Right w-[75px] self-stretch justify-end items-center gap-10 flex">
												<div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
													<div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
														<div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
															<div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
														</div>
													</div>
												</div>
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
											<div className="Right w-[75px] self-stretch justify-end items-center gap-10 flex">
												<div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
													<div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
														<div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
															<div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
														</div>
													</div>
												</div>
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
											<div className="Right w-[75px] self-stretch justify-end items-center gap-10 flex">
												<div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
													<div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
														<div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
															<div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
														</div>
													</div>
												</div>
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
											<div className="Right w-[75px] self-stretch justify-end items-center gap-10 flex">
												<div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
													<div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
														<div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
															<div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
														</div>
													</div>
												</div>
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
											<div className="Right w-[75px] self-stretch justify-end items-center gap-5 flex">
												<div className="PersonalRating w-[75px] self-stretch px-2.5 justify-end items-center gap-[30px] flex">
													<div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
														<div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] justify-center items-center gap-0.5 flex">
															<div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="ShowDetailCard self-stretch h-[35px] bg-white bg-opacity-70 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[15px] rounded-br-[15px] border border-slate-200 justify-start items-center inline-flex">
										<div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
											<div className="Icon w-2.5 h-2.5 relative origin-top-left -rotate-180" />
										</div>
									</div>
								</div>
							</div>
							<div className="LoadMorePanel self-stretch h-[65px] shadow flex-col justify-end items-center gap-2.5 flex">
								<div className="Button px-5 py-[15px] bg-zinc-100 rounded-[30px] border border-slate-200 justify-center items-center gap-2 inline-flex">
									<div className="Button grow shrink basis-0 text-center text-gray-800 text-base font-semibold font-['Inter']">Load More Lists</div>
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
