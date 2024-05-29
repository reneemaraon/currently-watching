import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserListsContext } from "../../context/UserListsContext";
import ListActions from "./ListActions";
import ListAuthor from "./ListAuthor";
import { useAuthContext } from "../../context/AuthContext";
import { PencilIcon } from "../Common/IconList";
import Icon from "../Common/Icon";
import Tooltip from "../Common/Tooltip";

const ListHeader = ({ items, list, index, addDrama }) => {
  const [activeEditTitle, setActiveEditTitle] = useState(false);
  const [listName, setListName] = useState("");

  const { updateList, createList } = useUserListsContext();
  const { isOwner } = useAuthContext();

  const navigate = useNavigate();
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (!activeEditTitle) {
      setListName(list.name);
    }
  }, []);

  useEffect(() => {
    if (!list.name) {
      setActiveEditTitle(true);
    }
  }, []);

  const processUpdateListName = async () => {
    if (list._id != "temp") {
      await updateList(list._id, { name: listName });
    } else {
      await createList(index, {
        body: {
          name: listName,
          items: items || [],
          ordered: true,
        },
      });
    }
  };

  useEffect(() => {
    if (
      !activeEditTitle &&
      listName &&
      listName.length > 0 &&
      listName != list.name
    ) {
      processUpdateListName();
    }
  }, [activeEditTitle]);

  const handleInputChange = (event) => {
    setListName(event.target.value);
  };

  const handleOutsideClick = (event) => {
    if (nameInputRef.current && !nameInputRef.current.contains(event.target)) {
      setActiveEditTitle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full gap-1.5 inline-flex flex-col pb-0.5 sm:pb-1.5">
      <div className="group/headername ListHeader w-full px-1 md:px-2 sm:px-4 gap-3 justify-between inline-flex">
        {activeEditTitle || !listName || (listName && listName.length == 0) ? (
          <div ref={nameInputRef} className="w-auto flex gap-2">
            <input
              type="text"
              autoFocus
              className="px-2 bg-transparent outline-brand-dark-purple rounded-lg  title-text font-light"
              placeholder="Enter List name"
              onChange={handleInputChange}
              value={listName}
            />
          </div>
        ) : (
          <div className="flex gap-2">
            <p
              onClick={() =>
                navigate(`/lists/${list._id !== "temp" ? list._id : ""}`)
              }
              className="cursor-pointer hover:text-brand-dark-purple grow line-clamp-2 title-text font-light"
            >
              {listName}
            </p>
            {(!list.user || isOwner(list.user._id)) && (
              <Tooltip text="Edit list title">
                <button
                  className="min-[500px]:w-5 min-[500px]:h-5 sm:w-8 sm:h-8 opacity-100 sm:group-hover/headername:opacity-100 sm:min-[500px]:opacity-0 group cursor-pointer min-[500px]:py-1 max-[499px]:pb-1 min-[500px]:px-2 hover:bg-blue-400 hover:rounded-xl transition-all ease-out duration-150 rounded-2xl"
                  onClick={() => setActiveEditTitle(true)}
                >
                  <Icon
                    sizeRules="w-3 h-3 sm:w-4 sm:h-4"
                    fill="group-hover:fill-theme-base fill-lighter-text"
                  >
                    <PencilIcon />
                  </Icon>
                </button>
              </Tooltip>
            )}
          </div>
        )}
        <ListActions index={index} addDrama={addDrama} list={list} />
      </div>
      <ListAuthor list={list} />
    </div>
  );
};

export default ListHeader;
