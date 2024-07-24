import { useEffect, useRef, useState } from 'react';
import Dropdown, { Option } from '../Common/Dropdown';
import Icon from '../Common/Icon';
import { AlignLeftIcon } from '../Common/IconList';
import { useShowsContext } from '../../context/ShowsContext';

const SORT_VALUES = [
  { name: 'Date', value: 'firstAirDate' },
  { name: 'Popularity', value: 'popularity' },
  { name: 'Title', value: 'title' },
];

const SortShows = () => {
  const { setSortField, sortField, refreshResults, ascending, setAscending } =
    useShowsContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  const setSortFilter = (field) => {
    setSortField(field);
    refreshResults();
    setIsDropdownVisible(false);
  };

  const setAscendingField = (val) => {
    setAscending(val);
    refreshResults();
    setIsDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer bg-opacity-50 hover:bg-theme-base py-2 px-3 rounded-lg flex gap-2 items-center"
      >
        <div className="subtext">Sort</div>
        <Icon fill="stroke-text-dark" sizeRules="w-3.5 h-3.5">
          <AlignLeftIcon />
        </Icon>
      </div>
      {isDropdownVisible && (
        <div className="flex w-40 absolute z-20 right-1 top-full mt-4">
          <Dropdown>
            <div className="w-full px-1 py-1.5 smallest-text text-brand-pink">
              Sort by
            </div>
            {SORT_VALUES.map((sortItem) => (
              <Option
                text={sortItem.name}
                onSelect={() => setSortFilter(sortItem.value)}
                selected={sortField == sortItem.value}
                key={sortItem.value}
              />
            ))}
            <div className="w-full px-1 py-1.5 smallest-text text-brand-pink">
              Order
            </div>
            <Option
              selected={!ascending}
              onSelect={() => setAscendingField(false)}
              text="Descending"
            />
            <Option
              selected={ascending}
              onSelect={() => setAscendingField(true)}
              text="Ascending"
            />
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default SortShows;
