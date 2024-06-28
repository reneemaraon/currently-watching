import Icon from "./Icon";

const CircularButton = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`${
      active ? "bg-brand-pink" : "bg-main-bg"
    } hover:bg-brand-pink w-7 h-7 group p-1.5 sm:p-2.5 sm:w-10 sm:h-10 rounded-full flex-col justify-center items-center inline-flex`}
  >
    <Icon
      fill={!active && "fill-transparent"}
      sizeRules={`${
        active ? "text-theme-base fill-theme-base" : "text-text-dark"
      } group-hover:text-theme-base group-hover:fill-theme-base group-hover:stroke-2 stroke-1 sm:stroke-1.5 w-full h-full`}
    >
      {children}
    </Icon>
  </button>
);

export default CircularButton;
