import Icon from '../Common/Icon';
import StarIcon from '../Common/Star';

const Row = ({ name, value }) => (
  <div className="RatingRow w-full max-w-[150px] px-2.5 py-2 rounded-[5px] border border-slate-200 justify-between items-start inline-flex">
    <div className="Acting important-small-text font-bold">{name}</div>
    <div className="Rating justify-start items-center gap-0.5 flex">
      <div className="text-right important-small-text font-normal">
        {value || '2.4'}
      </div>
      <Icon>
        <StarIcon />
      </Icon>
    </div>
  </div>
);

const StatContainer = () => {
  return (
    <div className="Ratings w-full max-w-[400px] px-3 sm:px-5 py-3.5 sm:py-3.5 rounded-lg border border-slate-200 justify-start items-start gap-5 inline-flex">
      <div className="AspectRatings flex-col grow  justify-start items-start gap-2.5 inline-flex">
        <div className="RatingHeader pb-1.5 justify-start items-start gap-2.5 inline-flex">
          <div className="text-center w-full important-small-text">
            Average per aspect
          </div>
        </div>
        <div className="w-full flex-col justify-start items-start gap-3 flex">
          <Row name="Acting" value="2.5" />
          <Row name="Plot" value="4.5" />
          <Row name="Visuals" value="3.4" />
        </div>
      </div>
      <div className="AspectRatings flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="RatingHeader pb-1.5 justify-start items-start gap-2.5 inline-flex">
          <div className="text-center important-small-text">
            Average Total Rating
          </div>
        </div>
        <div className="RatingsContainer w-full py-[5px] justify-center items-center gap-2.5 inline-flex">
          <div className="StarRating w-20 h-20 px-2.5 py-5 rounded-[40px] border-2 border-brand-tq justify-center items-center gap-[5px] flex">
            <div className="8 text-black text-xl font-bold leading-[14px]">
              4.8
            </div>
            <Icon>
              <StarIcon />
            </Icon>
          </div>
        </div>
        <div className="From234kReviews w-full text-center">
          <span className="text-gray-800 text-[13px] font-normal leading-normal">
            from{' '}
          </span>
          <span className="text-gray-800 text-[13px] font-bold leading-normal">
            23.4k
          </span>
          <span className="text-gray-800 text-[13px] font-normal leading-normal">
            {' '}
            reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatContainer;
