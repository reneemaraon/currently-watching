import React from 'react';
import MainContentEditor from './components/RichTextEditorBody';
import StarInput from './components/StarInput';
import CustomButton from '../Common/CustomButton';
import CreateReviewShowDetail from './components/CreateReviewShowDetail';

export default function CreateReview() {
  return (
    <div className="container-center-card">
      <div className="large-white-card">
        <div className="pt-4 max-[400px]:pt-2 pb-6 w-full flex-col justify-start gap-4 inline-flex">
          <div className="pl-1 section-header-text">Your Review</div>
        </div>
        {/* <CreateReviewShowDetail /> */}
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
