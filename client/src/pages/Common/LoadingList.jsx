import LoadingAnimation from './LoadingAnimation';

const ListLoading = () => {
  return (
    <div className="w-full justify-center inline-flex py-4">
      <div className="w-40">
        <LoadingAnimation />
      </div>
    </div>
  );
};

export default ListLoading;
