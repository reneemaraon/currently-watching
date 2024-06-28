import StarIcon from "../Common/Star";

const RatingRowStars = ({ name, rating }) => {
  const stars = [];
  const renderStars = () => {
    for (let i = 0; i < rating; i++) {
      stars.push(
        <div key={i} className="w-3 h-3 sm:w-4 sm:h-4">
          <StarIcon />
        </div>
      );
    }
    return stars;
  };

  return (
    <div className="RatingInputRow px-2.5 py-2 rounded-lg border border-light-stroke justify-start items-center gap-3 sm:gap-4 flex">
      <div className="Acting subtext text-text-dark grow font-bold">
        {name || "Acting"}
      </div>
      <div className="Rating h-3 sm:h-4 w-full justify-start items-center gap-1 sm:gap-2 flex">
        {renderStars()}
      </div>
    </div>
  );
};

export default RatingRowStars;
