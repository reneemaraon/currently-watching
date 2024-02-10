import React from 'react'
import Icon from '../Common/Icon'
import { BoldIcon, HeartIcon } from '../Common/IconList'

const CircularButton = ({ children }) => (
  <div className="w-7 h-7 p-1.5 sm:w-10 sm:h-10 bg-zinc-100 rounded-full flex-col justify-center items-center inline-flex">
    <Icon sizeRules="fill-none stroke-brand-tq stroke-1 w-full h-full">
      {children}
    </Icon>
  </div>
)


export default function ReviewDetail() {
  return (
    <div className="relative inline-flex flex-col items-center w-full">
      <img 
          className="object-cover w-full h-[541px] absolute z-0 top-0"
          src="https://image.tmdb.org/t/p/w500/4jY17xSgcZT9WodpXtnjVAJjSba.jpg"
      />
      <div className="Background w-full h-[541px] top-0 z-5 absolute bg-gradient-to-b from-transparent to-gray-100">
      </div>
      

      <div className="container-center-card pt-36">
      {/* Main contentt */}
      <div className="z-10 Main large-white-card p-6">
          <div className="w-full pb-4 flex-col justify-start items-start gap-3 flex">
            <div className="w-full justify-center items-start gap-2 sm:gap-4 inline-flex">
              <div className="text-l sm:text-l md:text-2xl font-medium grow shrink basis-0">
                Article Headline Here this is the title etc etc what if it is very long and very long indeed wow wow wow sjhdakjh
              </div>
              <div className="ReviewActions justify-start items-start gap-1.5 sm:gap-2.5 flex">
                <CircularButton><HeartIcon /></CircularButton>
                <CircularButton></CircularButton>
              </div>
            </div>
            <div className="Profile justify-start items-start gap-3 inline-flex">
              <img className="ProfilePhoto w-8 h-8 relative rounded-full" src="https://via.placeholder.com/34x35" />
              <div className="Text flex-col justify-start items-start gap-1 inline-flex">
                <div className="NameUsername justify-center items-center gap-1 inline-flex">
                  <div className="subheader-text">Hwang Inyoup</div>
                  <div className="info-text">@hi_high_hiy</div>
                </div>
                <div className="AccDetails justify-start items-center gap-[5px] inline-flex">
                  <div className="info-text">Dec 23, 2023</div>
                </div>
              </div>
            </div>
          </div>
            <div className="py-2 text-sm font-medium">This user rated <span className=" text-brand-tq">The Glory (2022)</span>:</div>
          <div className="Right w-full flex-wrap justify-start items-start gap-3 py-2 inline-flex">
            <div className="RatingInputRow px-2.5 py-2 rounded-[5px] border border-slate-200 justify-start items-center gap-[15px] flex">
              <div className="Rating flex-col justify-center items-start gap-[3px] inline-flex">
                <div className="Acting text-black text-xs font-bold font-['Inter']">Acting</div>
              </div>
              <div className="Rating w-full justify-start items-center gap-2 flex" />
            </div>
            <div className="RatingInputRow px-2.5 py-2 rounded-[5px] border border-slate-200 justify-start items-center gap-[15px] flex">
              <div className="Rating flex-col justify-end items-start gap-[3px] inline-flex">
                <div className="Plot text-black text-xs font-bold font-['Inter']">Plot</div>
              </div>
              <div className="Rating w-full justify-start items-center gap-2 flex" />
            </div>
            <div className="RatingInputRow px-2.5 py-2 rounded-[5px] border border-slate-200 justify-start items-center gap-[15px] flex">
              <div className="Rating flex-col justify-end items-start gap-[3px] inline-flex">
                <div className="Visuals text-black text-xs font-bold font-['Inter']">Visuals</div>
              </div>
              <div className="Rating w-[110.31px] w-full justify-start items-center gap-2 flex" />
            </div>
          </div>
          <div className="NarrativeContent hidden w-full h-[315px] py-5 border-b flex-col justify-center items-start gap-5 flex">
            <div className="EternalBlossomTookMeOnAnEmotionalRollercoasterFromStartToFinishTheIntricatePlotWeavesTogetherLoveLossAndTheResilienceOfTheHumanSpiritTheCharacterArcsAreWellDevelopedAndTheDialoguesAreBothPoignantAndMemorableThePacingOfTheNarrativeIsPerfectAllowingForMomentsOfQuietReflectionAndIntenseHeartPoundingScenesTheRomanceIsHeartwarmingAndTheMysteryElementKeepsYouGuessingUntilTheVeryEndIAppreciatedTheDepthOfTheThemesExploredAndTheConclusionLeftMeWithASenseOfFulfillmentInConclusionEternalBlossomIsAMustWatchKoreanDramaThatExcelsInEveryAspectTheStellarPerformancesEngagingNarrativeAndBreathtakingCinematographyMakeItAStandoutInTheGenreWhetherYouReAFanOfRomanceDramaOrMysteryThisSeriesOffersAPerfectBlendThatWillLeaveA w-full"><span className="text-gray-800 text-sm font-normal leading-[25.20px]">"Eternal Blossom" took me on an emotional rollercoaster from start to finish. The intricate plot weaves together love, loss, and the resilience of the human spirit. The character arcs are well-developed, and the dialogues are both poignant and memorable.<br/><br/>The pacing of the narrative is perfect, allowing for moments of quiet reflection and intense, heart-pounding scenes. The romance is heartwarming, and the mystery element keeps you guessing until the very end. I appreciated the depth of the themes explored, and the conclusion left me with a sense of fulfillment.<br/><br/></span><span className="text-gray-800 text-sm font-bold leading-[25.20px]">In Conclusion:<br/><br/></span><span className="text-gray-800 text-sm font-normal leading-[25.20px]">"Eternal Blossom" is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a </span></div>
          </div>
          <div className="Footer w-full h-[1349px] pt-[50px] pb-[30px] rounded-[17px] flex-col justify-center items-start gap-[50px] flex">
            <div className="Item flex-col justify-center items-start gap-[15px] flex">
              <div className="Header py-2 border-b flex-col justify-start items-start gap-[5px] flex">
                <div className="InterestedCheckOutTheDrama text-gray-800 text-sm font-medium font-['Inter']">Interested? Check out the drama.</div>
              </div>
              <div className="ShowDetailCard w-[262px] h-[214px] bg-white bg-opacity-70 rounded-[17px] flex-col justify-start items-start flex">
                <img className="Show w-full h-[135px]" src="https://via.placeholder.com/262x135" />
                <div className="ShowDetails w-full grow shrink basis-0 px-[13px] py-[11px] justify-between items-start inline-flex">
                  <div className="ShowDetailsText w-40 h-[50px] pl-[5px] pt-[5px] flex-col justify-between items-start inline-flex">
                    <div className="Title w-full"><span className="text-gray-800 text-[15px] font-bold font-['Inter']">The Glory </span><span className="text-gray-800 text-[15px] font-normal font-['Inter']">(2022)</span></div>
                    <div className="NoOfReviews w-full text-slate-500 text-xs font-medium font-['Inter']">12333 reviews</div>
                  </div>
                  <div className="RatingsContainer w-[55px] h-[55px] justify-between items-start flex">
                    <div className="StarRating w-[55px] h-[55px] px-2.5 py-5 rounded-[30px] border-2 border-cyan-500 justify-center items-center gap-0.5 flex">
                      <div className="8 text-gray-800 text-[15px] font-bold leading-[10.50px]">4.8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CommentSection w-full h-[957px] pt-[30px] border-t border-slate-200 flex-col justify-start items-center gap-[15px] flex">
              <div className="Header w-full pt-2 pb-[15px] border-b justify-between items-start inline-flex">
                <div className="Comments20"><span className="text-gray-800 text-2xl font-medium font-['Inter']">Comments </span><span className="text-neutral-300 text-2xl font-medium font-['Inter']">(20)</span></div>
                <div className="ActionList w-[30px] justify-end items-start gap-2.5 flex" />
              </div>
              <div className="CommentList w-full h-[839px] flex-col justify-center items-start gap-[15px] flex">
                <div className="CommentInput w-full h-[99px] p-[15px] bg-white rounded-[10px] border border-slate-200 flex-col justify-start items-start gap-5 flex">
                  <div className="Preview text-neutral-300 text-[13px] font-normal leading-[16.90px]">What are your thoughts on this review?</div>
                  <div className="Action w-full px-[5px] justify-end items-start gap-2.5 inline-flex">
                    <div className="Button px-2.5 py-2 opacity-50 bg-cyan-500 rounded-[18px] justify-center items-center gap-[5px] flex">
                      <div className="Button text-center text-white text-[13px] font-medium font-['Inter']">Submit</div>
                    </div>
                  </div>
                </div>
                <div className="CommentItem w-full h-[177px] p-[15px] bg-white rounded-[15px] border border-slate-200 flex-col justify-center items-start gap-[15px] flex">
                  <div className="CommentHead w-full justify-between items-start inline-flex">
                    <div className="Comment grow shrink basis-0 h-[51px] justify-start items-start gap-5 flex">
                      <img className="ProfilePhoto w-[50px] h-[51px] relative rounded-[40px]" src="https://via.placeholder.com/50x51" />
                      <div className="Details grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="NameUsername w-full justify-start items-center gap-1 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-normal font-['Inter']">Hwang Inyoup</div>
                          <div className="Username text-neutral-300 text-base font-normal font-['Inter']">@hi_high_hiy</div>
                        </div>
                        <div className="AccDetails justify-start items-center gap-[5px] inline-flex">
                          <div className="DatePublished text-neutral-300 text-sm font-normal font-['Inter']">6 days ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="CommentActionOptions p-[15px] justify-center items-center gap-2.5 flex" />
                  </div>
                  <div className="CommentText w-full text-gray-800 text-[15px] font-normal leading-[27px]">"Eternal Blossom" is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a lasting impression.</div>
                </div>
                <div className="CommentItem w-full h-[123px] p-[15px] bg-white rounded-[15px] border border-slate-200 flex-col justify-center items-start gap-[15px] flex">
                  <div className="CommentHead w-full justify-between items-start inline-flex">
                    <div className="Comment grow shrink basis-0 h-[51px] justify-start items-start gap-5 flex">
                      <img className="ProfilePhoto w-[50px] h-[51px] relative rounded-[40px]" src="https://via.placeholder.com/50x51" />
                      <div className="Details grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="NameUsername w-full justify-start items-center gap-1 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-normal font-['Inter']">Yuri Romano</div>
                          <div className="Username text-neutral-300 text-base font-normal font-['Inter']">@yuri_romano</div>
                        </div>
                        <div className="AccDetails justify-start items-center gap-[5px] inline-flex">
                          <div className="DatePublished text-neutral-300 text-sm font-normal font-['Inter']">6 days ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="CommentActionOptions p-[15px] justify-center items-center gap-2.5 flex" />
                  </div>
                  <div className="CommentText w-full text-gray-800 text-[15px] font-normal leading-[27px]">That's putting it mildly! What a wondrous story. Synchronicity is strong in you, young Jedi.</div>
                </div>
                <div className="CommentItem w-full h-[177px] p-[15px] bg-white rounded-[15px] border border-slate-200 flex-col justify-center items-start gap-[15px] flex">
                  <div className="CommentHead w-full justify-between items-start inline-flex">
                    <div className="Comment grow shrink basis-0 h-[51px] justify-start items-start gap-5 flex">
                      <img className="ProfilePhoto w-[50px] h-[51px] relative rounded-[40px]" src="https://via.placeholder.com/50x51" />
                      <div className="Details grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="NameUsername w-full justify-start items-center gap-1 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-normal font-['Inter']">Hwang Inyoup</div>
                          <div className="Username text-neutral-300 text-base font-normal font-['Inter']">@hi_high_hiy</div>
                        </div>
                        <div className="AccDetails justify-start items-center gap-[5px] inline-flex">
                          <div className="DatePublished text-neutral-300 text-sm font-normal font-['Inter']">6 days ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="CommentActionOptions p-[15px] justify-center items-center gap-2.5 flex" />
                  </div>
                  <div className="CommentText w-full text-gray-800 text-[15px] font-normal leading-[27px]">"Eternal Blossom" is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a lasting impression.</div>
                </div>
                <div className="CommentItem w-full h-[123px] p-[15px] bg-white rounded-[15px] border border-slate-200 flex-col justify-center items-start gap-[15px] flex">
                  <div className="CommentHead w-full justify-between items-start inline-flex">
                    <div className="Comment grow shrink basis-0 h-[51px] justify-start items-start gap-5 flex">
                      <img className="ProfilePhoto w-[50px] h-[51px] relative rounded-[40px]" src="https://via.placeholder.com/50x51" />
                      <div className="Details grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                        <div className="NameUsername w-full justify-start items-center gap-1 inline-flex">
                          <div className="TwtDisplayName text-gray-800 text-base font-normal font-['Inter']">Yuri Romano</div>
                          <div className="Username text-neutral-300 text-base font-normal font-['Inter']">@yuri_romano</div>
                        </div>
                        <div className="AccDetails justify-start items-center gap-[5px] inline-flex">
                          <div className="DatePublished text-neutral-300 text-sm font-normal font-['Inter']">6 days ago</div>
                        </div>
                      </div>
                    </div>
                    <div className="CommentActionOptions p-[15px] justify-center items-center gap-2.5 flex" />
                  </div>
                  <div className="CommentText w-full text-gray-800 text-[15px] font-normal leading-[27px]">That's putting it mildly! What a wondrous story. Synchronicity is strong in you, young Jedi.</div>
                </div>
                <div className="LoadMorePanel w-full h-[65px] flex-col justify-end items-center gap-2.5 flex">
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
  )
}
