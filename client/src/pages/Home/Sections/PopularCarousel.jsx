import React from 'react';
import { useState } from 'react';
import ImageWithOpacityTransition from '../../Common/ImageTransition';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Banner = ({ title, image_src }) => (
  <div className="card relative bg-indigo-200 overflow-hidden rounded-[15px] shadow">
    <ImageWithOpacityTransition
      styleAttach="object-cover w-full h-full"
      src={'https://image.tmdb.org/t/p/w500' + image_src}
    />
    <p className="absolute bottom-3 left-3 text-base">{title}</p>
  </div>
);

export default function PopularCarousel({ shows, active }) {
  return (
    <div className="w-full flex-col h-[350px] justify-start items-center inline-flex overflow-hidden">
      <div className="carousel">
        {shows.map((show, i) => (
          <div
            className="card-container"
            style={{
              '--active': i === active ? 1 : 0,
              '--inactive': i === active ? 0 : 1,
              '--offset': active - i,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 1.5,
              pointerEvents: active === i ? 'auto' : 'none',
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}
          >
            <Banner
              key={show.id}
              title={show.title}
              image_src={show.tmdbBackdrop}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
