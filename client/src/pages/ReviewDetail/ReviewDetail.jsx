import React from 'react'
import Icon from '../Common/Icon'
import { BoldIcon, HeartIcon, ShareIcon } from '../Common/IconList'
import RatingRowStars from './RatingRow';
import ShowCardSmall from '../Common/ShowCard';
import CommentsArea from './CommentsArea';

const CircularButton = ({ children }) => (
  <div className="w-6 h-6 p-1 sm:p-2.5 sm:w-10 sm:h-10 bg-zinc-100 rounded-full flex-col justify-center items-center inline-flex">
    <Icon sizeRules="fill-transparent stroke-text-dark stroke-1 sm:stroke-1.5 w-full h-full">
      {children}
    </Icon>
  </div>
)



export default function ReviewDetail() {
  return (
    <div className="relative inline-flex flex-col items-center w-full ">
      <img 
          className="object-cover w-full h-auto md:h-[300px] absolute z-0 top-0"
          src="https://image.tmdb.org/t/p/w500/4jY17xSgcZT9WodpXtnjVAJjSba.jpg"
      />

      <div className="container-center-card pt-20 sm:pt-36">
      {/* Main contentt */}
      <div className="z-10 Main large-white-card p-4 sm:p-6">
          <div className="w-full pb-4 flex-col justify-start items-start gap-3 flex">
            <div className="w-full pb-2">
              <div className="ReviewActions float-right justify-start items-start gap-2 sm:gap-2.5 flex">
                <CircularButton><HeartIcon /></CircularButton>
                <CircularButton><ShareIcon /></CircularButton>
              </div>
              <p className="title-text text-wrap">
                One of the greatest shows to exist.
              </p>
              
            </div>
            <div className="Profile justify-start items-start gap-3 inline-flex">
              <img className="ProfilePhoto w-8 h-8 relative rounded-full" src="https://via.placeholder.com/34x35" />
              <div className="Text flex-col justify-start items-start gap-1 inline-flex">
                <div className="NameUsername justify-center items-center gap-2 inline-flex">
                  <div className="author-name">Hwang Inyoup</div>
                  <div className="info-text">@hi_high_hiy</div>
                </div>
                <div className="AccDetails justify-start items-center gap-1.5 inline-flex">
                  <div className="info-text">Dec 23, 2023</div>
                </div>
              </div>
            </div>
          </div>
            <div className="py-2 text-sm font-medium">This user rated <span className=" text-brand-tq">The Glory (2022)</span>:</div>
          <div className="Right w-full flex-wrap justify-start items-start gap-3 py-2 inline-flex">
            <RatingRowStars rating={5} name="Acting" />
            <RatingRowStars rating={3} name="Plot" />
            <RatingRowStars rating={2} name="Visuals" />
            
          </div>
          <div className="NarrativeContent w-full  py-5 border-b flex-col justify-center items-start gap-5 flex">
            <div className="w-full"><span className="text-gray-800 text-sm font-normal leading-[25.20px]">"Eternal Blossom" took me on an emotional rollercoaster from start to finish. The intricate plot weaves together love, loss, and the resilience of the human spirit. The character arcs are well-developed, and the dialogues are both poignant and memorable.<br/><br/>The pacing of the narrative is perfect, allowing for moments of quiet reflection and intense, heart-pounding scenes. The romance is heartwarming, and the mystery element keeps you guessing until the very end. I appreciated the depth of the themes explored, and the conclusion left me with a sense of fulfillment.<br/><br/></span><span className="text-gray-800 text-sm font-bold leading-[25.20px]">In Conclusion:<br/><br/></span><span className="text-gray-800 text-sm font-normal leading-[25.20px]">"Eternal Blossom" is a must-watch Korean drama that excels in every aspect. The stellar performances, engaging narrative, and breathtaking cinematography make it a standout in the genre. Whether you're a fan of romance, drama, or mystery, this series offers a perfect blend that will leave a </span></div>
          </div>
          <div className="Footer w-full pt-12 pb-7 rounded-lg flex-col justify-center items-start gap-[50px] flex">
            <div className="Item w-full flex-col justify-center items-start gap-4 flex">
              <div className="Header py-2 flex-col justify-start items-start w-full flex">
                <div className="text-sm font-medium">Interested? Check out the drama.</div>
              </div>
              <ShowCardSmall />
            </div>
          <CommentsArea />            
        </div>
      </div>
      </div>
    </div>
  )
}
