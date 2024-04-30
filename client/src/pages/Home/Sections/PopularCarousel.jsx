import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWithOpacityTransition from '../../Common/ImageTransition';

const MAX_VISIBILITY = 3;

const Banner = ({ id, image_src }) => {
  const navigate = useNavigate();
  const onClickBanner = () => {
    navigate(`/shows/${id}`);
  };

  return (
    <div
      onClick={onClickBanner}
      className="card group hover:cursor-pointer w-full relative bg-indigo-200 overflow-hidden rounded-[15px] shadow"
    >
      <img
        className="transition-all object-cover group-hover:scale-[1.01] group-hover:ease-in duration-200 group-hover:opacity-95 w-full"
        src={'https://image.tmdb.org/t/p/w500' + image_src}
      />
    </div>
  );
};

export default function PopularCarousel({ shows, active }) {
  return (
    <div className="w-full flex-col h-[280px] min-[500px]:h-[320px] sm:h-[350px] justify-start items-center inline-flex overflow-hidden">
      <div className="carousel">
        {shows.map((show, i) => (
          <div
            className="card-container"
            key={show._id}
            style={{
              '--active': i === active ? 1 : 0,
              '--inactive': i === active ? 0 : 1,
              '--offset': active - i,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 1.5,
              pointerEvents: active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
              filter: `blur(${Math.abs(active - i)}px)`,
            }}
          >
            <Banner
              key={show._id}
              title={show.title}
              id={show._id}
              image_src={show.tmdbBackdrop}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
