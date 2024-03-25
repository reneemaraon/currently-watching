import Icon from "./Icon";

const CircularButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`${
      active ? "bg-brand-tq" : "bg-theme-base"
    } w-8 h-8 p-1.5 sm:p-2.5 sm:w-10 sm:h-10 rounded-full flex-col justify-center items-center inline-flex`}
  >
    <Icon
      fill={!active && "fill-transparent"}
      sizeRules={`${
        active ? "text-theme-base fill-theme-base" : "text-text-dark"
      } stroke-1 sm:stroke-1.5 w-full h-full`}
    >
      {children}
    </Icon>
  </button>
);

export default CircularButton;
