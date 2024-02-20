import React, { useState } from "react";

import PopularCarousel from "./PopularCarousel";
import { useShowsContext } from "../../../context/ShowContext";
import SectionHeader from "./SectionHeader";

const PopularSection = () => {
  const [active, setActive] = useState(2);
  const {
    shows: { shows },
  } = useShowsContext();
  return (
    <div className="w-full mt-5 flex-col justify-center items-start gap-5 inline-flex">
      <SectionHeader
        sectionName="Popular"
        arrowLeftFunction={() => setActive((i) => i - 1)}
        arrowRightFunction={() => setActive((i) => i + 1)}
      />
      <div className="self-stretch flex-col justify-start items-center flex">
        <PopularCarousel active={active} shows={shows} />
        <div className="flex-wrap justify-center max-[500px]:justify-start items-start gap-8 inline-flex">
          <div className="min-w-[340px] grow shrink basis-0 max-h-[130px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="title-text font-medium">
              {shows[active] && shows[active].title}
            </div>

            <p className="text-light-text text-ellipsis overflow-hidden text-sm self-stretch font-normal leading-[30.60px]">
              {shows[active] && shows[active].synopsis}
            </p>
          </div>
          <div className="grow shrink min-w-[200px] max-w-[400px] basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-base sm:text-lg font-medium leading-[18px]">
              Cast
            </div>
            <div className="justify-start items-start inline-flex">
              <div className="w-[35px] h-[35px] bg-theme-base rounded-full" />
              <div className="w-[35px] h-[35px] bg-theme-base rounded-full" />
              <div className="w-[35px] h-[35px] bg-theme-base rounded-full" />
              <div className="w-[35px] h-[35px] bg-theme-base rounded-full" />
              <div className="w-[35px] h-[35px] bg-theme-base rounded-full" />
            </div>
            <div className="self-stretch text-gray-800 text-base font-normal leading-[25.20px]">
              Lee Jung-jae, Park Hae soo, Wi Ha-joon...
            </div>
          </div>
          <div className="w-[271px] p-5 bg-theme-base bg-opacity-70 rounded-xl flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="self-stretch pb-[5px] justify-between items-start inline-flex">
              <div className="justify-start items-center gap-[13px] flex">
                <div className="text-gray-800 text-base font-medium">
                  Overall
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      className="fill-yellow-500"
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="text-yellow-500 text-base font-medium">
                    3.5
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-1.5 flex">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    className="w-5 h-5"
                  >
                    <path
                      className="fill-gray-800"
                      d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                    />
                    <path
                      className="fill-gray-800"
                      fillRule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-gray-800 text-[15px] font-medium">23k</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="text-gray-800 text-sm font-medium">
                Performance
              </div>
              <div className="justify-start items-center gap-0.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                >
                  <path
                    className="fill-yellow-500"
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="text-yellow-500 text-sm font-medium">4.2</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="text-gray-800 text-sm font-medium">Narrative</div>
              <div className="justify-start items-center gap-0.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                >
                  <path
                    className="fill-yellow-500"
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-yellow-500 text-sm font-medium">2.9</div>
              </div>
            </div>
            <div className="justify-start items-start gap-2.5 inline-flex">
              <div className="text-gray-800 text-sm font-medium">
                Cinematography
              </div>
              <div className="justify-start items-center gap-0.5 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                >
                  <path
                    className="fill-yellow-500"
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="text-yellow-500 text-sm font-medium">3.5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
