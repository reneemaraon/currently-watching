import React, { useState } from 'react';

import PopularCarousel from './PopularCarousel';
import SectionHeader from './SectionHeader';
import ImageWithOpacityTransition from '../../Common/ImageTransition';
import commaSeparatedString from '../../Common/commaSeparate';
import StarIcon from '../../Common/Star';
import { useHomepageContext } from '../../../context/HomepageContext';
import ListLoading from '../../Common/LoadingList';
import { useNavigate } from 'react-router-dom';
import Icon from '../../Common/Icon';
import { WatchIcon } from '../../Common/IconList';

const StarRatingRow = ({ name, rating }) => (
  <div className="justify-start items-start gap-2.5 inline-flex">
    <div className="text-sm font-medium">{name}</div>
    <div className="justify-start items-center gap-0.5 flex">
      <div className="text-dark-yellow important-small-text font-medium">
        {rating}
      </div>
      <StarIcon fill="fill-dark-yellow" sizeRules="w-4 h-4" />
    </div>
  </div>
);

const PopularSection = () => {
  const [active, setActive] = useState(2);
  const {
    shows: { shows },
    showsLoading,
  } = useHomepageContext();
  const navigate = useNavigate();

  const goToShowDetail = () => {
    navigate(`/shows/${shows[active]._id}`);
  };

  const renderShowDetails = () => {
    const show = shows[active];
    if (shows[active]) {
      return (
        <div className="flex-wrap justify-center max-[500px]:justify-start items-start gap-8 inline-flex">
          <div
            onClick={goToShowDetail}
            className="cursor-pointer group min-w-[340px] grow shrink basis-0 max-h-[130px] flex-col justify-start items-start gap-2.5 inline-flex"
          >
            <div className="title-text group-hover:text-brand-dark-purple font-medium">
              {show.title}
            </div>

            <p className="text-light-text text-ellipsis overflow-hidden text-sm self-stretch font-normal leading-[30.60px]">
              {show.synopsis}
            </p>
          </div>
          <div className="grow shrink min-w-[200px] max-w-[400px] basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-base sm:text-lg font-medium leading-[18px]">
              Cast
            </div>
            <div className="justify-start gap-[-10px] items-start inline-flex">
              {show.cast.slice(0, 6).map((castMember) => (
                <div
                  key={castMember._id}
                  className="w-10 h-10 shadow overflow-hidden rounded-full"
                >
                  <ImageWithOpacityTransition
                    styleAttach="object-cover ease-out"
                    src={`https://image.tmdb.org/t/p/w500${castMember.profileImage}`}
                  />
                </div>
              ))}
            </div>
            <div className="self-stretch text-base font-normal leading-6">
              {commaSeparatedString(
                show.cast.map((cast) => cast.name).slice(0, 3)
              )}
            </div>
          </div>
          <div className="w-[271px] p-5 bg-theme-base bg-opacity-70 rounded-xl flex-col justify-start items-start gap-[5px] inline-flex">
            <div className="self-stretch pb-[5px] justify-between items-start inline-flex">
              <div className="justify-start items-center gap-[13px] flex">
                <div className="text-text-dark text-base font-medium">
                  Overall
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-dark-yellow paragraph-text font-medium">
                    {show.totalAverage}
                  </div>
                  <StarIcon
                    fill="fill-dark-yellow"
                    sizeRules="h-5 w-5 sm:w-6 sm:h-6"
                  />
                </div>
              </div>
              <div className="justify-start items-center gap-1.5 flex">
                <Icon sizeRules="w-4 h-4 sm:w-5 sm:h-5" fill="fill-text-dark">
                  <WatchIcon />
                </Icon>
                <div className="text-sm font-medium">
                  {show.watchCount || '0'}
                </div>
              </div>
            </div>
            <StarRatingRow rating={show.actingAverage} name="Acting" />
            <StarRatingRow rating={show.plotAverage} name="Plot" />
            <StarRatingRow rating={show.visualsAverage} name="Visuals" />
          </div>
        </div>
      );
    }
  };

  if (showsLoading) {
    return <ListLoading />;
  }
  return (
    <div className="w-full inline-flex flex-col">
      <SectionHeader
        sectionName="Popular"
        disabledRight={active == shows.length - 1}
        disabledLeft={active == 0}
        arrowLeftFunction={() => setActive((i) => i - 1)}
        arrowRightFunction={() => setActive((i) => i + 1)}
      />
      <div className="self-stretch flex-col justify-start items-center flex">
        <PopularCarousel active={active} shows={shows} />
        {renderShowDetails()}
      </div>
    </div>
  );
};

export default PopularSection;
