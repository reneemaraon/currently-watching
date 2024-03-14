import { useState } from 'react';
import {
  ErrorToastIcon,
  InfoToastIcon,
  SuccessToastIcon,
  WarningToastIcon,
} from './IconList';

const types = {
  success: 'bg-emerald-500 text-emerald-700',
  error: 'bg-red-500 text-red-500',
  warning: 'bg-amber-500 text-amber-500',
  info: 'bg-blue-500 text-blue-500',
};

const icons = {
  success: <SuccessToastIcon />,
  error: <ErrorToastIcon />,
  warning: <WarningToastIcon />,
  info: <InfoToastIcon />,
};

const ToastMessage = ({ message, type }) => {
  const selectedStyle = types[type] || types['info'];
  const icon = icons[type] || icons['info'];
  return (
    <div
      className={`${selectedStyle} bg-opacity-20 flex z-[100] fixed right-6 top-24 items-center w-full max-w-xs p-4 mb-4 rounded-xl `}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
        {icon}
      </div>
      <div className="ms-3 text-base font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-theme-base bg-opacity-0 hover:bg-opacity-50 rounded-lg focus:ring-2 focus:ring-text-dark focus:ring-opacity-20  inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToastMessage;
