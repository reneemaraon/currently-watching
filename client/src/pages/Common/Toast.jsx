import { useState } from "react";
import {
  ErrorToastIcon,
  InfoToastIcon,
  SuccessToastIcon,
  WarningToastIcon,
} from "./IconList";

const types = {
  success: "text-emerald-700",
  error: "text-red-500",
  warning: "text-amber-500",
  info: "text-blue-500",
};

const icons = {
  success: <SuccessToastIcon />,
  error: <ErrorToastIcon />,
  warning: <WarningToastIcon />,
  info: <InfoToastIcon />,
};

const ToastMessage = ({ message, type, closeToast }) => {
  const selectedStyle = types[type] || types["info"];
  const icon = icons[type] || icons["info"];
  return (
    <div
      className={`${selectedStyle}  transition-opacity duration-500 shadow-xl backdrop-blur-sm bg-opacity-60 bg-theme-base flex z-[100] fixed items-center right-0 sm:right-6 top-24 max-[600px]:top-16 max-[550px]:right-4 max-[400px]:right-0 w-full max-w-[350px] p-4 mb-4 rounded-xl `}
      role="alert"
    >
      <div className="inline-flex items-center justify-center opacity-80 flex-shrink-0 w-8 h-8 rounded-lg">
        {icon}
      </div>
      <div className="mx-3 text-sm text-light-text font-medium">{message}</div>
      <button
        type="button"
        onClick={closeToast}
        className="ms-auto -mx-0.5 -my-0.5 text-light-text bg-theme-base bg-opacity-0 hover:bg-opacity-50 rounded-lg focus:ring-2 focus:ring-text-dark focus:ring-opacity-20  inline-flex items-center justify-center h-5 w-5"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-2.5 h-2.5"
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
