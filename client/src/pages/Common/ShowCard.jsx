import StarIcon from './Star';
import { useNavigate } from 'react-router-dom';

const ShowCardSmall = ({ id, show }) => {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(`/shows/${show._id || '1'}`);
  };

  return (
    <div
      onClick={onClickNavigate}
      className="cursor-pointer overflow-hidden border w-64 shrink-0 bg-theme-base bg-opacity-70 rounded-[17px] flex-col justify-start items-start inline-flex"
    >
      <img
        className="Show w-full object-cover h-[135px]"
        src={
          show
            ? `https://image.tmdb.org/t/p/w500${show.tmdbBackdrop}`
            : 'https://via.placeholder.com/262x135'
        }
      />
      <div className="ShowDetails w-full px-4 py-3 justify-between items-start inline-flex">
        <div className="ShowDetailsText h-full w-40 flex-col justify-center items-start inline-flex">
          <div className="inline-flex gap-1">
            <span className="text-sm font-medium">
              {show ? show.title : 'Drama Name'}
            </span>
          </div>
          <div className="NoOfReviews text-slate-500 text-xs font-medium">
            12333 reviews
          </div>
        </div>
        <div className="StarRating w-14 h-14 rounded-full border-2 border-brand-tq justify-center items-center gap-0.5 flex">
          <div className="text-[15px] font-bold leading-[10.50px]">4.8</div>
          <div className="w-4 h-4">
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCardSmall;
