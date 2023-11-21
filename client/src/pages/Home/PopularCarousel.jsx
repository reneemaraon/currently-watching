import React from 'react'
import { useState } from 'react';

const CARDS = 10;
const MAX_VISIBILITY = 3;

const Banner = ({ title, image_src }) =>(
    <div className="card relative bg-indigo-200 overflow-hidden rounded-[15px] shadow">
        <img className="object-cover w-full h-full" src={"https://image.tmdb.org/t/p/w500"+image_src} />
        <p className="absolute bottom-3 left-3 text-base">{title}</p>
    </div>
)



export default function PopularCarousel({ shows, active }) {
    return (
        <div className="w-full flex-col h-[350px] justify-start items-center inline-flex overflow-hidden">
            <div className="carousel">
                
                {shows.map((show, i) => ( 
                    <div className='card-container' style={{
                        '--active': i === active ? 1 : 0,
                        '--inactive': i === active ? 0 : 1,
                        '--offset': (active - i),
                        '--direction': Math.sign(active - i),
                        '--abs-offset': Math.abs(active - i)/1.5,
                        'pointer-events': active === i ? 'auto' : 'none',
                        'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
                        'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
                    }}>
                        <Banner key={show.id} title={show.title} image_src={show.tmdbBackdrop} />
                    </div>
                ))}
                <button className='nav-right' onClick={() => setActive(i => i + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                </button>

            </div>
        </div>
  )
}
