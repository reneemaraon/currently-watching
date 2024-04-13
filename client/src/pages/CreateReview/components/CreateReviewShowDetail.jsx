import ImageWithOpacityTransition from '../../Common/ImageTransition';
import StarIcon from '../../Common/Star';
import commaSeparatedString from '../../Common/commaSeparate';

export const RatingType = ({ name, rate }) => (
  <div className="justify-center items-center gap-[3px] flex">
    <div className="text-xs">{name || ''}</div>
    <div className="w-[31.49px] justify-start items-center gap-0.5 flex">
      <div className="text-xs font-bold">{rate ? rate.toFixed(1) : 0.0}</div>
      <StarIcon />
    </div>
  </div>
);

const CreateReviewShowDetail = ({ show }) => {
  return (
    <div className="w-full inline-flex">
      <div className="max-[500px]:h-[260px] h-[175px] w-full max-w-[800px] border-light-stroke overflow-hidden border rounded-lg max-[500px]:flex-col justify-start items-start inline-flex">
        <div className="max-[500px]:w-full w-3/5 max-[500px]:h-2/5 h-full">
          <ImageWithOpacityTransition
            styleAttach="object-cover w-full h-full"
            src={`https://image.tmdb.org/t/p/w500${show.tmdbPoster}`}
          />
        </div>
        <div className="h-full max-[500px]:h-3/5 w-full p-3">
          <div className="w-full h-full flex flex-col gap-1">
            <div className="text-l md:text-l font-semibold">{show.title}</div>
            <div className="text-[12px] max-h-5 overflow-ellipsis overflow-hidden font-normal w-full">
              {commaSeparatedString(
                show.cast.map((cast) => cast.name).slice(0, 3)
              )}
            </div>
            <div className="Preview grow overflow-hidden info-text line-clamp-3 font-normal">
              {show.synopsis}
            </div>
            <div className="pt-2 sm:pt-3 border-t border-zinc-300 border-opacity-50 justify-start items-start gap-2.5 inline-flex">
              <RatingType name="Acting" rate={show.actingAverage} />
              <RatingType name="Plot" rate={show.plotAverage} />
              <RatingType name="Visuals" rate={show.visualsAverage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReviewShowDetail;
