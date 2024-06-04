import React from 'react';

export const Option = ({ text, selected, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="Option w-full h-9 p-2.5 hover:bg-theme-base rounded-lg justify-between items-center inline-flex"
    >
      <div
        className={`OptionText text-text-dark text-sm ${
          selected && 'font-semibold'
        }`}
      >
        {text}
      </div>
      <div className="CheckContainer justify-between items-center flex">
        {selected && (
          <div className="Icon px-1 py-1 justify-center items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Dropdown({ children }) {
  return (
    <div className="Dropdown w-full p-2.5 bg-zinc-100 rounded-lg shadow border border-light-stroke flex-col justify-center items-center inline-flex">
      {children}
    </div>
  );
}
