import Icon from './Icon';
import { CloseIcon } from './IconList';

const PopupModal = ({ children, showModal, setShowModal }) => {
  return (
    <div
      className={`${
        showModal ? 'inline-flex' : 'hidden'
      }  overflow-hidden bg-slate-800 bg-opacity-15 fixed top-0 right-0 left-0 z-[80] justify-center pt-40 w-full md:inset-0 h-full`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-theme-base rounded-lg shadow">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="absolute top-3 end-2.5 text-text-dark/80 bg-transparent hover:bg-theme-negative-base/10 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
          >
            <Icon>
              <CloseIcon />
            </Icon>
            <span className="sr-only">Close modal</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
