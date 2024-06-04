import Icon from '../Common/Icon';

const ListOptionButton = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        active ? 'bg-brand-pink' : 'bg-theme-base'
      } p-1.5 sm:p-2 hover:bg-opacity-90 bg-opacity-60 rounded-full border flex-col justify-center items-center gap-2.5 inline-flex`}
    >
      <Icon
        fill={!active && 'fill-transparent'}
        sizeRules={`${
          active ? 'text-theme-base fill-theme-base' : 'text-text-dark'
        } w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:text-theme-base group-hover:fill-theme-base group-hover:stroke-2 stroke-1 sm:stroke-1.5`}
      >
        {children}
      </Icon>
    </button>
  );
};

export default ListOptionButton;
