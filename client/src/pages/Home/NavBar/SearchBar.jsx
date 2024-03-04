import { useState } from 'react';
import Icon from '../../Common/Icon';
import { SearchIcon } from '../../Common/IconList';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
        }  py-1 w-full min-w-[500px] overflow-hidden absolute top-full left-0`}
      >
        <div className="inline-flex flex-col gap-2 w-full rounded-xl bg-theme-base p-2">
          <SearchResult />
          <SearchResult />
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
