// Tooltip.js
import React, { useState } from "react";

const Tooltip = ({ children, text, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getPositionClasses = (position) => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div
        className={`absolute ${getPositionClasses(position)} ${
          !visible && "opacity-0"
        } z-[200] transition-opacity delay-500 duration-300 ease-out inline-flex items-center justify-center text-center text-nowrap p-1.5 bg-theme-base text-text-dark text-[10px] rounded shadow`}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
