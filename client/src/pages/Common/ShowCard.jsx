import { useEffect, useState } from 'react';
import { useWatchShowContext } from '../../context/WatchShowContext';
import formatRating from '../../utils/formatRating';
import Icon from './Icon';
import { SuccessToastIcon, WatchIcon } from './IconList';
import StarIcon from './Star';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';
import { useAuthContext } from '../../context/AuthContext';

const ShowCardSmall = ({ id, show }) => {
  const [watched, setWatched] = useState(false);
  const navigate = useNavigate();
  const { postWatch, deleteWatch } = useWatchShowContext();
  const { actionRequireLogIn } = useAuthContext();
  const { showToast } = useToast();

  useEffect(() => {
    if (show) {
      setWatched(show.watched);
    }
  }, [show]);

  const onClickNavigate = () => {
    navigate(`/shows/${show._id || '1'}`);
  };

  const onWatchClick = async (event) => {
    event.stopPropagation();
    setWatched(true);
    const response = await postWatch(show._id);
    if (!response.watchedShow) {
      showToast('Something went wrong. Please try again.', 'error');
      setWatched(false);
    }
  };

  const turnOffWatched = async (event) => {
    event.stopPropagation();
    setWatched(false);
    const response = await deleteWatch(show._id);
    if (!response.deleteWatch) {
      showToast('Something went wrong. Please try again.', 'error');
      setWatched(true);
    }
  };

  return (
    <div
      onClick={onClickNavigate}
      className="relative white-bg-hover cursor-pointer transition duration-300 group overflow-hidden border-light-stroke border w-52 sm:w-64 shrink-0 rounded-lg flex-col justify-start items-start inline-flex"
    >
      <div
        onClick={actionRequireLogIn(watched ? turnOffWatched : onWatchClick)}
        className="group/watch transition-colors duration-00 z-[5] right-0 top-0 absolute p-2 hover:bg-main-bg rounded-bl-2xl"
      >
        {watched ? (
          <Icon
            sizeRules="w-5 h-5"
            fill="opacity-80 text-main-bg group-hover/watch:text-emerald-700 group-hover/watch:opacity-100"
          >
            <SuccessToastIcon />
          </Icon>
        ) : (
          <Icon
            sizeRules="w-5 h-5"
            fill="group-hover/watch:text-brand-pink text-main-bg/80"
          >
            <WatchIcon />
          </Icon>
        )}
        <div className="transition-opacity duration-300 bg-main-bg bg-opacity-90 px-1 rounded group-hover/watch:opacity-100 opacity-0 group-hover/watch:block hidden absolute top-full mt-1 right-1">
          <span className="text-nowrap text-xs">
            {watched ? 'Watched' : 'Mark as watched'}
          </span>
        </div>
      </div>
      <div className="h-28 sm:h-[135px] overflow-hidden">
        <img
          className="Show w-full group-hover:scale-[1.02] group-hover:opacity-90 ease-in-out duration-300 object-cover"
          src={
            show
              ? `https://image.tmdb.org/t/p/w500${show.tmdbBackdrop}`
              : 'https://via.placeholder.com/262x135'
          }
        />
      </div>
      <div className="ShowDetails w-full h-16 sm:h-20 px-4 py-3 justify-between items-center inline-flex">
        <div className="ShowDetailsText flex-col justify-center gap-1 items-start inline-flex">
          <div className="inline-flex gap-1">
            <span className="hover:text-brand-dark-purple text-text-dark subtext font-medium">
              {show ? show.title : 'Drama Name'}
            </span>
          </div>
          <div className="NoOfReviews text-light-text small-author-username font-medium">
            {show.reviewCount} reviews
          </div>
        </div>
        <div className="StarRating w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl justify-center items-center bg-main-bg gap-0.5 flex">
          <div className="paragraph-text font-medium sm:font-semibold leading-[10.50px]">
            {formatRating(show.totalAverage)}
          </div>
          <div className="h-3 w-3 sm:w-4 sm:h-4">
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCardSmall;
