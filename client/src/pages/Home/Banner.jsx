import React from 'react'
import { useShowsContext } from '../../context/ShowContext'

const Banner = () => {
  const { shows: { shows } } = useShowsContext()
  console.log(shows)
  return (
      <div className="max-w-[1080px] px-10 flex items-stretch gap-6 flex-col w-full">
        <div className="flex flex-col items-center">
          <span className="font-bold text-2xl lg:text-3xl">
            Popular Shows Today
          </span>
        </div>
        <div className="invisible lg:visible flex flex-row w-100%">
          {shows.slice(0,5).map((show) => {
            return (
            <div key={show.id} className="overflow-hidden relative w-40 bg-[#332E84] h-100%">
              <img className="object-cover" src={"https://image.tmdb.org/t/p/w500"+show.tmdbPoster} />
              <p className="absolute bottom-3 left-3">{show.title}</p>
            </div>
            )
          }

          )}
        </div>
      </div>
  );
}

export default Banner;
