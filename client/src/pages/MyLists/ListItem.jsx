import Icon from '../Common/Icon';
import { BarsIcon, SearchIcon } from '../Common/IconList';
import ImageWithOpacityTransition from '../Common/ImageTransition';
import StarIcon from '../Common/Star';
import { getYear } from '../../utils/formatDate';
import { useEffect, useRef, useState } from 'react';
import { isMarkActive } from '@tiptap/react';
import Insert from './Insert';
import { useSearchContext } from '../../context/SearchContext';
import SearchResultItem from './SearchResultListItem';

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const ListItem = ({
  dragging,
  insertVisible,
  selected,
  show,
  order,
  fromTop,
  setShowToItem,
  ...rest
}) => {
  const {
    searchTerm,
    setSearchTerm,
    refetchResults,
    searchResults: { shows: searchResults },
    loading,
  } = useSearchContext();
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchListVisible, setSearchListVisible] = useState(false);
  const searchListRef = useRef(null);

  const handleFocus = () => {
    setIsFocused(true);
    setSearchListVisible(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleOutsideClick = (event) => {
    if (
      searchListRef.current &&
      !searchListRef.current.contains(event.target)
    ) {
      setSearchListVisible(false);
    }
  };

  const onSearchItemClick = (searchResult) => {
    const { _id: id } = searchResult;
    setSearchTerm('');
    setShowToItem(order, searchResult);
    setSearchListVisible(false);
  };

  const debouncedRefetchResults = debounce(refetchResults, 800);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedRefetchResults();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div
      {...rest}
      className={`w-full ${
        !dragging && 'transition-transform ease-in-out duration-500'
      } flex-col inline-flex gap-1 sm:gap-1.5 justify-end ${
        selected && 'z-[10]'
      }`}
    >
      {insertVisible && !fromTop && <Insert />}
      <div className="bg-theme-base transition w-full max-[400px]:h-14 h-16 sm:h-[70px] md:h-20 rounded-2xl border justify-start items-center inline-flex">
        <div className="RankNumContainer px-5 sm:px-8 md:px-10 justify-center items-center gap-2.5 flex">
          <div className="RankNumber text-base sm:text-lg md:text-2xl font-base md:font-medium leading-none">
            {order}
          </div>
        </div>
        {show && (
          <div className="hidden min-[400px]:block ShowImage md:w-20 h-full px-1 py-1 sm:py-1.5 md:py-2">
            <div className="w-full h-full overflow-hidden rounded-lg sm:rounded-xl">
              <ImageWithOpacityTransition
                styleAttach="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${show.tmdbPoster}`}
              />
            </div>
          </div>
        )}

        <div className="ShowDetails grow shrink basis-0 self-stretch px-2 sm:px-5 md:px-7 py-[11px] justify-between items-center flex">
          {show ? (
            <div className="ShowDetailsText flex-col justify-start items-start gap-0.5 sm:gap-1 md:gap-2 inline-flex">
              <div className="Title">
                <span className="gap-1 text-sm sm:text-base md:text-lg">
                  <span className="font-normal sm:font-medium md:font-semibold">
                    {show.title}
                    <span className="font-extralight sm:font-light md:font-normal">
                      {` (${getYear(show.firstAirDate)})`}
                    </span>
                  </span>
                </span>
              </div>
              <div className="sm:inline-flex hidden justify-start items-center gap-1.5">
                <div className="Score info-text font-medium">Score</div>
                <div className="Rating self-stretch justify-start items-center gap-0.5 flex">
                  <div className="info-text font-bold">{show.totalAverage}</div>
                  <StarIcon sizeRules="h-3 w-3" />
                </div>
                <div className="NoOfReviews text-slate-500 text-[11px] font-normal">
                  ({show.reviewCount})
                </div>
              </div>
            </div>
          ) : (
            <div className="relative grow inline-flex gap-5 ">
              <Icon fill="fill-none stroke-text-dark" sizeRules="h-7 w-7">
                <SearchIcon />
              </Icon>
              <input
                type="text"
                className="text-sm sm:text-base grow placeholder-lighter-text leading-tight bg-transparent focus:outline-none"
                placeholder="Search by Keyword"
                value={isFocused ? searchTerm : ''}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <div
                className={`${
                  isFocused || isSearchListVisible ? 'block' : 'hidden'
                }  py-1 w-full min-w-[400px] overflow-hidden absolute top-10 left-8 z-[90]`}
              >
                {searchTerm.length > 0 && (
                  <div
                    ref={searchListRef}
                    className="inline-flex flex-col gap-1 rounded-md bg-opacity-20 bg-light-stroke p-1"
                  >
                    {searchResults.length === 0 && (
                      <div className="w-full h-[50px] text-sm text-light-text inline-flex px-8 items-center">
                        No shows match your search.
                      </div>
                    )}
                    {loading && isFocused && (
                      <div className="w-full h-[50px] text-sm text-light-text inline-flex px-8 items-center">
                        Loading...
                      </div>
                    )}
                    {!loading &&
                      searchResults &&
                      searchResults.map((searchResult) => (
                        <SearchResultItem
                          onClick={() => onSearchItemClick(searchResult)}
                          searchItem={searchResult}
                        />
                      ))}
                  </div>
                )}
              </div>
            </div>
          )}
          <div className="Right inline-flex justify-end items-center gap-2 min-[400px]:gap-4 sm:gap-6 md:gap-8">
            {show && (
              <div className="PersonalRating self-stretch sm:px-1.5 md:px-2.5 justify-end items-center flex">
                <div className="RatingsContainer justify-between items-start flex">
                  {show.myReview && show.myReview.length > 0 && (
                    <div className="StarRating h-full rounded-[30px] justify-center items-center gap-1 flex">
                      <div className="8 text-sm sm:text-base font-normal sm:font-medium leading-[10.50px]">
                        {show.myReview[0].overallRating}
                      </div>
                      <StarIcon sizeRules="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="MoveIcon w-7 h-7 sm:w-9 sm:h-9 justify-center items-center flex">
              <Icon
                sizeRules="h-5 w-5 sm:w-7 sm:h-7"
                fill="stroke-1 stroke-light-text"
              >
                <BarsIcon />
              </Icon>
            </div>
          </div>
        </div>
      </div>
      {insertVisible && fromTop && <Insert />}
    </div>
  );
};

export default ListItem;
