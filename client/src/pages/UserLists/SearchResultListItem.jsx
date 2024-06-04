import { getYear } from '../../utils/formatDate';
import formatRating from '../../utils/formatRating';
import ImageWithOpacityTransition from '../Common/ImageTransition';
import StarIcon from '../Common/Star';
import commaSeparatedString from '../Common/commaSeparate';

const SearchResultItem = ({ searchItem, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-theme-base cursor-pointer hover:bg-opacity-50 hover:border-brand-lavender transition py-0.5 px-1 max-[400px]:h-14 h-16 sm:h-[70px] md:h-20 rounded-md border justify-start items-center inline-flex"
    >
      <div className="hidden min-[400px]:block ShowImage md:w-20 h-full px-1 py-1 sm:py-1.5 md:py-2">
        <div className="w-full h-full overflow-hidden rounded-sm sm:rounded-md">
          <ImageWithOpacityTransition
            styleAttach="h-full w-full object-cover"
            src={`https://image.tmdb.org/t/p/w500/${searchItem.tmdbPoster}`}
          />
        </div>
      </div>
      <div className="h-full inline-flex max-[500px]:h-2/3 w-full p-2">
        <div className="grow inline-flex flex-col justify-center gap-1">
          <p className="text-sm md:text-base font-medium">
            {`${searchItem.title} (${getYear(searchItem.firstAirDate)})`}
          </p>
          <p className="text-[12px] text-brand-pink shrink-0 line-clamp-1 pr-4 font-normal">
            {commaSeparatedString(
              searchItem.cast.map((cast) => cast.name).slice(0, 3)
            )}
          </p>
        </div>
        <div className="StarRating px-3 h-full rounded-[30px] justify-center items-center gap-1 flex">
          <div className="8 text-sm sm:text-base font-normal sm:font-medium leading-[10.50px]">
            {formatRating(searchItem.totalAverage)}
          </div>
          <StarIcon sizeRules="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default SearchResultItem;
