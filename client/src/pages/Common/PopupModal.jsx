const PopupModal = ({ children, showModal, setShowModal }) => {
  return (
    <div
      className={`${
        showModal ? "inline-flex" : "hidden"
      }  overflow-hidden bg-text-dark bg-opacity-10 fixed top-0 right-0 left-0 z-[80] justify-center pt-40 w-full md:inset-0 h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
