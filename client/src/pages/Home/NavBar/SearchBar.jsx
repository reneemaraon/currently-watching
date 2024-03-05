import { useState } from 'react';
import Icon from '../../Common/Icon';
import { SearchIcon } from '../../Common/IconList';
import SearchResult from './SearchResult';
import { useSearchContext } from '../../../context/SearchContext';

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const SearchBar = () => {
  const { searchTerm, setSearchTerm, refetchResults, searchResults, loading } =
    useSearchContext();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const debouncedRefetchResults = debounce(refetchResults, 800);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    debouncedRefetchResults();
  };

  return (
    <div className="relative">
      <div
        className={`${
          isFocused ? 'border-brand-gray' : 'border-transparent'
        }  border max-[600px]:hidden grow w-full max-w-[260px] sm:max-w-[320px] px-3 sm:px-5 sm:py-3.5 bg-theme-base rounded-xl justify-start items-center gap-5 flex`}
      >
        <div className="pr-2.5 justify-start items-center gap-3 flex">
          <Icon
            fill="fill-none stroke-2 stroke-text-dark"
            sizeRules="h-3.5 w-3.5"
          >
            <SearchIcon />
          </Icon>

          <input
            type="text"
            className="text-sm sm:text-base placeholder-lighter-text leading-tight bg-transparent focus:outline-none"
            placeholder="Search by Keyword"
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div
        className={`${
          isFocused ? 'block' : 'hidden'
        }  py-1 w-full min-w-[400px] overflow-hidden absolute top-full left-0`}
      >
        {searchTerm.length > 0 && (
          <div className="inline-flex flex-col gap-1 w-full rounded-md bg-light-stroke p-1">
            {searchResults.length === 0 && (
              <div className="w-full h-[50px] text-sm text-light-text inline-flex px-8 items-center">
                No shows match your search.
              </div>
            )}
            {loading && (
              <div className="w-full h-[50px] text-sm text-light-text inline-flex px-8 items-center">
                Loading...
              </div>
            )}
            {!loading &&
              searchResults &&
              searchResults.map((searchResult) => (
                <SearchResult searchItem={searchResult} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
