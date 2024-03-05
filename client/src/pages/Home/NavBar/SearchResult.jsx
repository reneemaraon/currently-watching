import StarIcon from '../../Common/Star';

const RatingType = ({ name, rate }) => (
  <div className="justify-center items-center gap-[3px] flex">
    <div className="text-xs">{name || ''}</div>
    <div className="pl-1 justify-start items-center gap-0.5 flex">
      <div className="text-xs font-bold">{rate || '5.0'}</div>
      <StarIcon sizeRules="w-4 h-4" />
    </div>
  </div>
);

const SearchResult = ({ searchItem }) => {
  return (
    <div className="w-full inline-flex">
      <div className="bg-theme-base max-[500px]:h-[245px] h-[140px] w-full max-w-[800px] overflow-hidden border rounded-lg max-[500px]:flex-col justify-start items-start inline-flex">
        <div className="w-1/3 h-full">
          <img
            className="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/w500${searchItem.tmdbPoster}`}
          />
        </div>
        <div className="h-full max-[500px]:h-2/3 w-full p-2">
          <div className="w-full h-full flex flex-col gap-1">
            <div className="text-sm md:text-base font-medium">
              {searchItem.title}
            </div>
            <p className="text-[12px] shrink-0 line-clamp-1 pr-4 font-normal w-full">
              {searchItem.cast &&
                searchItem.cast.map((cast) => `${cast.name}, `)}
            </p>
            <p className="Preview line-clamp-1 grow info-text font-normal">
              {searchItem.synopsis}
            </p>
            <div className="pt-1 justify-start items-start gap-3 inline-flex">
              <RatingType name="Acting" rate="0" />
              <RatingType name="Plot" rate="0" />
              <RatingType name="Visuals" rate="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
