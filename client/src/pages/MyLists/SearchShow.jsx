import { useEffect, useRef, useState } from 'react';
import { useSearchContext } from '../../context/SearchContext';
import { SearchIcon } from '../Common/IconList';
import SearchResultItem from './SearchResultListItem';
import Icon from '../Common/Icon';

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const SearchInItem = ({ setShowToItem, order, searchRef }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSearchListVisible, setSearchListVisible] = useState(false);
  const searchListRef = useRef(null);

  const {
    searchTerm,
    setSearchTerm,
    refetchResults,
    searchResults: { shows: searchResults },
    loading,
  } = useSearchContext();

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
    <div className="relative grow inline-flex gap-5 ">
      <Icon fill="fill-none stroke-text-dark" sizeRules="h-7 w-7">
        <SearchIcon />
      </Icon>
      <input
        type="text"
        autoFocus
        className="text-sm sm:text-base grow placeholder-lighter-text leading-tight bg-transparent focus:outline-none"
        placeholder="Search by Keyword"
        value={searchTerm}
        ref={searchRef}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div
        className={`${
          isFocused || isSearchListVisible ? 'block' : 'hidden'
        }  py-1 w-full min-w-[400px] overflow-hidden absolute top-10 left-8 z-[300]`}
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
  );
};

export default SearchInItem;
