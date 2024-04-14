export const Header = ({ children }) => (
  <div className="Header w-full px-2 py-2 sm:py-4 justify-center items-center gap-5 inline-flex">
    {children}
  </div>
);

export const HeaderName = ({ children }) => (
  <div className="grow shrink basis-0 justify-start items-start gap-2.5 flex">
    <div className="title-text">{children}</div>
  </div>
);

const SectionHeader = ({
  sectionName,
  arrowLeftFunction, //() => setActive(i => i - 1)
  arrowRightFunction, //() => setActive(i => i + 1)
  disabledRight,
  disabledLeft,
}) => {
  return (
    <Header>
      <HeaderName>{sectionName}</HeaderName>
      <div className="inline-flex justify-end items-start gap-0.5 sm:gap-3">
        <div className="p-2 rounded-3xl inline-flex justify-center items-center">
          <button
            disabled={disabledLeft}
            className={disabledLeft && 'opacity-30'}
            onClick={arrowLeftFunction}
          >
            <svg
              className="h-7 w-7 sm:w-10 sm:h-10 stroke-light-text hover:opacity-80"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <div className="p-2 rounded-3xl inline-flex justify-center items-center">
          <button
            disabled={disabledRight}
            className={disabledRight && 'opacity-30'}
            onClick={arrowRightFunction}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7 sm:w-10 sm:h-10 stroke-light-text hover:opacity-80"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Header>
  );
};

export default SectionHeader;
