import { useEffect, useRef, useState } from "react";
import { useUserListsContext } from "../../context/UserListsContext";
import { OptionsIcon } from "../Common/IconList";
import ListOptionButton from "./ListOptionButton";
import Dropdown, { Option } from "../Common/Dropdown";
import { useAuthContext } from "../../context/AuthContext";
import { useToast } from "../../context/ToastContext";
import Tooltip from "../Common/Tooltip";

const ListActions = ({ list, addDrama, index }) => {
  const { deleteList, deleteListOnIndex } = useUserListsContext();
  const { isOwner } = useAuthContext();
  const { user } = useAuthContext();
  const { showToast } = useToast();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const onAttemptDelete = async () => {
    setDropdownVisible(false);
    if (list._id == "temp") {
      deleteListOnIndex(index);
    } else {
      await deleteList(list._id);
    }
  };

  const copyPathToClipboard = () => {
    const baseUrl = window.location.origin;
    navigator.clipboard
      .writeText(baseUrl + `/lists/${list._id}`)
      .then(() => {
        showToast("Path to this list is copied to clipboard", "success");
      })
      .catch((error) => {
        console.error("Failed to copy path to clipboard:", error);
      });
    setDropdownVisible(false);
  };

  return (
    <div className="Actions grow-1 justify-center  gap-1.5 sm:gap-2.5 flex">
      {/* <ListOptionButton>
            <Icon
              sizeRules="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
              fill="stroke-text-dark stroke-[1.5px]"
            >
              <MoveDownListIcon />
            </Icon>
          </ListOptionButton>
          <ListOptionButton>
            <Icon
              sizeRules="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5"
              fill="stroke-text-dark stroke-[1.5px]"
            >
              <MoveUpListIcon />
            </Icon>
          </ListOptionButton> */}
      <div className="relative" ref={dropdownRef}>
        <Tooltip text="Options">
          <ListOptionButton active={isDropdownVisible} onClick={toggleDropdown}>
            <OptionsIcon />
          </ListOptionButton>
        </Tooltip>
        {isDropdownVisible && (
          <div className="absolute cursor-pointer w-40 top-full right-0 mt-1 z-40">
            <Dropdown>
              {((user && list.user && user._id == list.user._id) ||
                !list.user) && (
                <Option key="Delete" text="Delete" onSelect={onAttemptDelete} />
              )}
              {/* {user && user._id == review.user._id && (
                <Option
                  key="Update"
                  text="Update"
                  onSelect={() => navigate("update")}
                />
              )} */}
              <Option
                key="copy"
                text="Copy Link"
                onSelect={() => copyPathToClipboard()}
              />
            </Dropdown>
          </div>
        )}
      </div>
      {(!list.user || isOwner(list.user._id)) && (
        <button
          onClick={addDrama}
          className="rounded-full inverse-button-style text-nowrap small-button"
        >
          <div className="hidden sm:block font-medium text-nowrap">
            + Add drama
          </div>
          <div className="block sm:hidden font-sm">+ Add</div>
        </button>
      )}
    </div>
  );
};

export default ListActions;
