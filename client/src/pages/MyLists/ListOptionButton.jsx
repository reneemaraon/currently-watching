import Icon from '../Common/Icon';

const ListOptionButton = ({ children }) => {
  return (
    <div className="w-8 h-8 bg-theme-base bg-opacity-50 rounded-full border flex-col justify-center items-center gap-2.5 inline-flex">
      {children}
    </div>
  );
};

export default ListOptionButton;
