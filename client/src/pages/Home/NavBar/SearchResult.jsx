import StarIcon from '../../Common/Star';

const RatingType = ({ name, rate }) => (
  <div className="justify-center items-center gap-[3px] flex">
    <div className="text-xs">{name || ''}</div>
    <div className="w-[31.49px] justify-start items-center gap-0.5 flex">
      <div className="text-xs font-bold">{rate || '5.0'}</div>
      <StarIcon />
    </div>
  </div>
);

const SearchResult = () => {
  return (
    <div className="w-full inline-flex">
      <div className="bg-theme-base max-[500px]:h-[245px] h-[140px] w-full max-w-[800px] overflow-hidden border rounded-lg max-[500px]:flex-col justify-start items-start inline-flex">
        <div className="max-[500px]:w-full w-1/3 max-[500px]:h-1/3 h-full">
          <img
            className="object-cover w-full h-full"
            src="https://via.placeholder.com/220x214"
          />
        </div>
        <div className="h-full max-[500px]:h-2/3 w-full p-2">
          <div className="w-full h-full flex flex-col gap-1">
            <div className="text-sm md:text-base font-medium">
              The Glory (2022)
            </div>
            <div className="text-[12px] h-5 font-normal w-full">
              Ji Changwook, Choi Sungeun, Hwang Inyoup
            </div>
            <div className="Preview grow overflow-hidden info-text font-normal">
              I had a great time watching this drama. Whenever there was
              something bla ba bla. So heartbreaking to see them not end up
              together and what happ I had a great time watching this drama.
              Whenever there was something bla ba bla. So heartbreaking to see
              them not end up together and what happI had a great time watching
              this drama. Whenever there was something bla ba bla. So
              heartbreaking to see them not end up together and what happ...
            </div>
            <div className="pt-1 justify-start items-start gap-2.5 inline-flex">
              <RatingType name="Acting" rate="4.2" />
              <RatingType name="Plot" rate="4.5" />
              <RatingType name="Visuals" rate="3.2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
