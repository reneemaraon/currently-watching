import StarIcon from "../../Common/Star";

const StarInputItem = ({ name, helperText}) => {
    return (
      <div className="w-full flex-wrap-reverse px-3.5 py-2 gap-x-2 gap-y-4 rounded-[10px] border border-slate-200 justify-between items-center inline-flex">
        <div className="w-full min-w-[200px] grow shrink basis-0 pr-2.5 flex-col justify-end items-start gap-[3px] inline-flex">
          <div className="text-sm md:text-base font-bold">{name}</div>
          <div className="info-text font-normal">{helperText}</div>
        </div>
        <div className="h-full justify-start items-center gap-2 flex">
            <StarIcon sizeRules="sm:h-8 sm:w-8 h-7 w-7" />
            <StarIcon sizeRules="sm:h-8 sm:w-8 h-7 w-7" />
            <StarIcon sizeRules="sm:h-8 sm:w-8 h-7 w-7" />
            <StarIcon sizeRules="sm:h-8 sm:w-8 h-7 w-7" fill="fill-none" stroke="stroke-light-stroke stroke-1" />
            <StarIcon sizeRules="sm:h-8 sm:w-8 h-7 w-7" fill="fill-none" stroke="stroke-light-stroke stroke-1" />
        </div>
      </div>
    );
  }
   
  
  const StarInput = () => {
    return (
      <div className="w-full flex-col justify-start items-start gap-[15px] inline-flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          <div className="subheader-text">Star Ratings</div>
          <div className="text-zinc-500 text-sm font-normal">Rate the following aspects of this drama from 1 to 5 stars</div>
        </div>
        <div className="flex-col w-full max-w-[480px] justify-start items-start gap-3 flex">
          <StarInputItem name="Acting" helperText="Cast performances and portrayals" />
          <StarInputItem name="Plot" helperText="Story, script, writing, pace" />
          <StarInputItem name="Visuals" helperText="Cinematography, shots, setting, props" />
        </div>
      </div>
    );
  }

  export default StarInput