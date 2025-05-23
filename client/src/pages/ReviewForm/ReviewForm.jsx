import React from 'react';

import MainContentEditor from './components/RichTextEditorBody';
import StarInput from './components/StarInput';
import CustomButton from '../Common/CustomButton';
import CreateReviewShowDetail from './components/CreateReviewShowDetail';
import TextInput from './components/TextInput';
import stripHtmlTags from '../../utils/stripTags';

const ReviewForm = ({ state, setField, setError, onSubmit, onCancel }) => {
  const handleTitleChange = (value) => {
    if (value && stripHtmlTags(value).length > 0) {
      setError('title', null);
    }
    setField('title', value);
  };

  const handleBodyChange = (value) => {
    // strip tags later here
    if (value && value.length > 0) {
      setError('body', null);
    }
    setField('body', value);
  };
  return (
    <div className="container-center-card">
      <div className="large-white-card">
        <div className="pt-4 max-[400px]:pt-2 pb-6 w-full flex-col justify-start gap-4 inline-flex">
          <div className="pl-1 section-header-text">Your Review</div>
        </div>
        <div className="max-w-[600px]">
          {state.show && <CreateReviewShowDetail show={state.show} />}
        </div>
        <StarInput state={state} setField={setField} setError={setError} />
        <div className="w-full py-8 flex-col justify-center items-start gap-5 flex">
          <div className="w-full h-[59px] pb-[15px] flex-col justify-start items-start gap-[5px] flex">
            <div>
              <span className="subheader-text">Write a narrative review </span>
            </div>
            <div className="text-zinc-500 text-sm font-normal">
              Share your thoughts of this drama below.
            </div>
          </div>
          <div className="w-full flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="subheader-text">Headline</div>
            </div>
            <TextInput
              value={state.title}
              onValueChange={handleTitleChange}
              errorMessage={state.errors.title}
            />
          </div>
          <div className="w-full flex-col justify-center items-start gap-2.5 flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="subheader-text">Body</div>
            </div>
            <MainContentEditor
              value={state.body}
              setContent={handleBodyChange}
              errorMessage={state.errors.body}
            />
          </div>
          <div className="px-2.5 py-[5px] justify-end items-start gap-[5px] inline-flex">
            <CustomButton
              onClick={onCancel}
              size="defaultResize"
              styleSet="secondary"
            >
              Cancel
            </CustomButton>
            <CustomButton
              size="defaultResize"
              onClick={onSubmit}
              styleSet="primary"
            >
              Publish
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
