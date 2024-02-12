import Icon from './Icon';

const CircularButton = ({ children }) => (
  <div className="w-6 h-6 p-1 sm:p-2.5 sm:w-10 sm:h-10 bg-zinc-100 rounded-full flex-col justify-center items-center inline-flex">
    <Icon sizeRules="fill-transparent stroke-text-dark stroke-1 sm:stroke-1.5 w-full h-full">
      {children}
    </Icon>
  </div>
);

export default CircularButton;
