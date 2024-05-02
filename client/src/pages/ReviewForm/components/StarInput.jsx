import { useState } from 'react';
import { useCreateReviewContext } from '../../../context/CreateReviewContext';
import StarIcon from '../../Common/Star';
import ErrorMessage from './ErrorMessage';

const Star = ({ active }) => (
  <StarIcon
    fill={active ? null : 'fill-none'}
    stroke={active ? null : 'stroke-light-stroke stroke-1'}
    sizeRules="h-6 w-6 sm:h-7 sm:w-7"
  />
);

const StarInputItem = ({
  name,
  helperText,
  value,
  changeRating,
  errorMessage,
}) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="inline-flex flex-col w-full">
      <div className="w-full flex-wrap px-3.5 py-4 min-[500px]:py-2 gap-4 rounded-[10px] border border-slate-200 justify-between items-center inline-flex">
        <div className="w-full min-w-[200px] grow shrink basis-0 pr-2.5 flex-col justify-end items-start gap-[3px] inline-flex">
          <div className="text-sm md:text-base font-bold">{name}</div>
          <div className="info-text font-normal">{helperText}</div>
        </div>
        <div className="h-full justify-start items-center gap-0 flex">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                className="px-2.5 sm:px-1 py-2"
                key={index}
                onClick={() => changeRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(value)}
              >
                <Star active={index <= (hover || value)} />
              </button>
            );
          })}
        </div>
      </div>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

const StarInput = ({ state, setField, setError }) => {
  const handleRatingChange = (field, value) => {
    if (value) {
      setError(field, null);
    }
    setField(field, value);
  };

  return (
    <div className="w-full py-6 md:py-12 justify-start gap-10 inline-flex flex-col">
      <div className="w-full flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="subheader-text">Star Ratings</div>
          <div className="info-text">
            Rate the following aspects of this drama from 1 to 5 stars
          </div>
        </div>
        <div className="flex-col w-full max-w-[480px] justify-start items-start gap-3 flex">
          <StarInputItem
            value={state.actingRating}
            changeRating={(value) => handleRatingChange('actingRating', value)}
            errorMessage={state.errors.actingRating}
            name="Acting"
            helperText="Cast performances and portrayals"
          />
          <StarInputItem
            value={state.plotRating}
            changeRating={(value) => handleRatingChange('plotRating', value)}
            errorMessage={state.errors.plotRating}
            name="Plot"
            helperText="Story, script, writing, pace"
          />
          <StarInputItem
            value={state.visualsRating}
            changeRating={(value) => handleRatingChange('visualsRating', value)}
            errorMessage={state.errors.visualsRating}
            name="Visuals"
            helperText="Cinematography, shots, setting, props"
          />
        </div>
      </div>
    </div>
  );
};

export default StarInput;
