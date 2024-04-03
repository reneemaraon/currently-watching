import CustomButton from './CustomButton';

const LoadMorePanel = ({ onClick = () => {}, buttonText = 'Load more' }) => {
  return (
    <div className="LoadMorePanel self-stretch h-[65px]  flex-col justify-end items-center gap-2.5 flex">
      <CustomButton
        onClick={onClick}
        styleSet="light"
        size="defaultResize"
        edge="rounded"
      >
        {buttonText}
      </CustomButton>
    </div>
  );
};

export default LoadMorePanel;
