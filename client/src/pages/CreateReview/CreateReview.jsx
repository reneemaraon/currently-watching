import React from 'react';
import MainContentEditor from './components/RichTextEditorBody';
import StarInput from './components/StarInput';
import CustomButton from '../Common/CustomButton';
import StarIcon from '../Common/Star';
import commaSeparatedString from '../Common/commaSeparate';

const RatingType = ({ name, rate }) => (
  <div className="justify-center items-center gap-[3px] flex">
    <div className="text-xs">{name || ''}</div>
    <div className="w-[31.49px] justify-start items-center gap-0.5 flex">
      <div className="text-xs font-bold">{rate || '5.0'}</div>
      <StarIcon />
    </div>
  </div>
);

export const ShowDetail = ({ show }) => {
  return (
    <div className="w-full inline-flex">
      <div className="max-[500px]:h-[285px] h-[175px] w-full max-w-[800px] border-light-stroke overflow-hidden border rounded-lg max-[500px]:flex-col justify-start items-start inline-flex">
        <div className="max-[500px]:w-full w-3/5 max-[500px]:h-1/3 h-full">
          <img
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/w500${show.tmdbPoster}`}
          />
        </div>
        <div className="h-full max-[500px]:h-2/3 w-full p-3">
          <div className="w-full h-full flex flex-col gap-1">
            <div className="text-l md:text-l font-semibold">{show.title}</div>
            <div className="text-[12px] h-5 font-normal w-full">
              {commaSeparatedString(
                show.cast.map((cast) => cast.name).slice(0, 3)
              )}
            </div>
            <div className="Preview grow overflow-hidden">
              <div className="info-text font-normal">{show.synopsis}</div>
            </div>
            <div className="pt-3 border-t border-zinc-300 border-opacity-50 justify-start items-start gap-2.5 inline-flex">
              <RatingType name="Acting" rate="4.2" />
              <RatingType name="Plot" rate="4.5" />
              <RatingType name="Visuals" rate="3.2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CreateReview() {
  return (
    <div className="container-center-card">
      <div className="large-white-card">
        <div className="pt-4 max-[400px]:pt-2 pb-6 w-full flex-col justify-start gap-4 inline-flex">
          <div className="pl-1 section-header-text">Your Review</div>
        </div>
        {/* <ShowDetail /> */}
        <StarInput />
        <div className="w-full py-8 border-b flex-col justify-center items-start gap-5 flex">
          <div className="w-full h-[59px] pb-[15px] flex-col justify-start items-start gap-[5px] flex">
            <div>
              <span className="subheader-text">Write a narrative review </span>
              <span className="text-zinc-500 text-xs font-normal">
                (optional)
              </span>
            </div>
            <div className="text-zinc-500 text-sm font-normal">
              Share your thoughts of this drama below.
            </div>
          </div>
          <div className="w-full h-[87px] flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="subheader-text">Headline</div>
            </div>
            <div className="w-full max-w-[600px] flex-col justify-center items-start gap-2.5 flex input-area">
              <div className="text-gray-800 text-base font-normal leading-tight">
                This was bearable to watch
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="subheader-text">Body</div>
            </div>
            <MainContentEditor />
          </div>
          <div className="px-2.5 py-[5px] justify-end items-start gap-[5px] inline-flex">
            <CustomButton size="defaultResize" styleSet="secondary">
              Cancel
            </CustomButton>
            <CustomButton size="defaultResize" styleSet="primary">
              Publish
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}
