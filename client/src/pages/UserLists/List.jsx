import Draggable from "react-draggable";
import { ExpandDownIcon, PencilIcon } from "../Common/IconList";
import ListItem from "./ListItem";
import Icon from "../Common/Icon";
import { useEffect, useRef, useState } from "react";
import { useUserListsContext } from "../../context/UserListsContext";
import { useDebounce } from "use-debounce";
import ListActions from "./ListActions";
import formatDateTime, { getDiffInMinutes } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const changedItems = (sourceItems, stateItems) => {
  const stateIds = stateItems
    .filter((item) => item.show)
    .map((item) => item.show._id);
  const sourceIds = sourceItems.map((item) => item.show._id);

  if (sourceIds.length !== stateIds.length) {
    return true;
  }

  for (let i = 0; i < sourceIds.length; i++) {
    if (sourceIds[i] !== stateIds[i]) {
      return true;
    }
  }
  return false;
};

const List = ({ list, index }) => {
  const [showItems, setShowItems] = useState(true);
  const [items, setItems] = useState(null);
  const [listName, setListName] = useState("");
  const [insertIndex, setInsertIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [activeEditTitle, setActiveEditTitle] = useState(false);
  const [itemHeight, setItemHeight] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [value] = useDebounce(listName, 1000);
  const navigate = useNavigate();

  const { updateList, createList } = useUserListsContext();
  const { isOwner } = useAuthContext();
  const listRef = useRef(null);
  const searchInputRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (listRef.current && items && items.length > 0 && !itemHeight) {
      const listHeight = listRef.current.offsetHeight;
      const heightOneItem = Math.floor(listHeight / items.length);
      setItemHeight(heightOneItem);
    }
  }, [listRef, items]);

  useEffect(() => {
    setItems(
      list.items.map((item) => ({
        ...item,
        selected: false,
      }))
    );
  }, [list.items]);

  useEffect(() => {
    setListName(list.name);
  }, []);

  const processUpdateListName = async () => {
    if (list._id != "temp") {
      await updateList(list._id, { name: value });
    } else {
      await createList(index, {
        body: {
          name: value,
          items: items || [],
          ordered: true,
        },
      });
    }
  };

  useEffect(() => {
    if (value && value != list.name) {
      processUpdateListName();
    }
  }, [value]);

  useEffect(() => {
    if (items && changedItems(list.items, items)) {
      processUpdateList();
    }
  }, [items]);

  const handleStop = (draggedIndex, newPosition) => {
    setDragging(false);
    const newItems = items.slice();
    const draggedItem = newItems.splice(draggedIndex, 1)[0];
    newItems.splice(newPosition, 0, draggedItem);

    setItems(
      newItems.map((item, index) => ({
        ...item,
        selected: false,
        order: index + 1,
      }))
    );
    setInsertIndex(null);
    setDraggedIndex(null);
  };

  const onDelete = (deleteOrder) => {
    setItems((prevItems) => {
      const itemsAfterDelete = prevItems
        .filter((item) => item.order != deleteOrder)
        .map((item, index) => ({
          ...item,
          order: index + 1,
        }));

      return itemsAfterDelete;
    });
  };

  const processUpdateList = async () => {
    await updateList(list._id, { items: items.map((item) => item.show._id) });
  };

  const handleInputChange = (event) => {
    setListName(event.target.value);
  };

  const onDragStart = (draggedIndex) => {
    setDragging(true);
    const newItems = items.map((item) => {
      if (item.order == draggedIndex + 1) {
        return {
          ...item,
          selected: true,
        };
      }
      return {
        ...item,
        selected: false,
      };
    });
    setItems(newItems);
    setDraggedIndex(draggedIndex);
  };

  const addDrama = () => {
    if (items.filter((item) => !item.show).length > 0) {
      searchInputRef.current.focus();
    } else {
      setItems((prevItems) => [
        ...prevItems,
        {
          show: null,
          order: prevItems.length + 1,
          selected: false,
        },
      ]);
    }
  };

  const setShowToItem = (order, show) => {
    const newItems = items.map((item) => {
      if (item.order == order) {
        return {
          ...item,
          show,
        };
      }
      return item;
    });
    setItems(newItems);
  };

  const toggleShowItems = () => {
    setShowItems(!showItems);
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
    <div className="List self-stretch flex-col justify-start items-start gap-2.5 flex">
      <div className="group/headername ListHeader w-full px-1 md:px-2 sm:px-4 py-1 sm:py-2.5 justify-between items-end gap-2.5 inline-flex">
        {activeEditTitle || !listName ? (
          <div ref={nameInputRef} className="flex grow gap-2">
            <input
              type="text"
              className="bg-transparent outline-brand-gray rounded-lg  title-text font-light"
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
              className="cursor-pointer hover:text-brand-dark-purple grow title-text font-light"
            >
              {listName}
            </p>
            {isOwner(list.user._id) && (
              <button
                className="group-hover/headername:opacity-100 opacity-0 group cursor-pointer py-1 px-2 hover:bg-blue-400 hover:rounded-xl transition-all ease-out duration-150 rounded-2xl"
                onClick={() => setActiveEditTitle(true)}
              >
                <Icon
                  sizeRules="w-3 h-3 sm:w-4 sm:h-4"
                  fill="group-hover:fill-theme-base fill-lighter-text"
                >
                  <PencilIcon />
                </Icon>
              </button>
            )}
          </div>
        )}
        <ListActions index={index} addDrama={addDrama} list={list} />
      </div>
      <div className="w-full inline-flex flex-col gap-1.5">
        <div
          ref={listRef}
          className="List transition-all self-stretch px-0 sm:px-1 md:px-2.5 flex-col justify-start items-start gap-1 sm:gap-1.5 flex"
        >
          {showItems &&
            items &&
            items.map((item, index) => (
              <Draggable
                disabled={list.user ? !isOwner(list.user._id) : false}
                key={`${item.show ? item.show._id : list.name} ${item.order}`}
                onStop={(e, data) => {
                  const newPosition = index + Math.round(data.y / itemHeight); // Assuming each item's height is 50px
                  handleStop(index, newPosition);
                }}
                onStart={() => onDragStart(index)}
                onDrag={(e, data) => {
                  const newPosition = index + Math.round(data.y / itemHeight); // Assuming each item's height is 50px
                  setInsertIndex(newPosition);
                }}
                axis="y"
                position={{ x: 0, y: item.order - 1 }}
                // grid={[1, 70]}
              >
                <ListItem
                  insertVisible={insertIndex == index && !item.selected}
                  fromTop={draggedIndex < index}
                  order={index + 1}
                  searchRef={searchInputRef}
                  onDelete={onDelete}
                  dragging={dragging}
                  isOwner={!list.user || (list.user && isOwner(list.user._id))}
                  selected={item.selected}
                  show={item.show}
                  setShowToItem={setShowToItem}
                />
              </Draggable>
            ))}
        </div>
        {list.items.length > 0 && (
          <div
            className="cursor-pointer self-stretch px-0 sm:px-1 md:px-2.5 flex-col justify-start items-start gap-1 sm:gap-1.5 flex"
            onClick={toggleShowItems}
          >
            {showItems ? (
              <div className="opacity-50 hover:opacity-100 w-full h-4 sm:h-6 bg-theme-base bg-opacity-70 rounded-b-xl rounded-t-lg border border-slate-200 justify-start items-center inline-flex">
                <div className="Expand grow shrink basis-0 self-stretch justify-center items-center flex">
                  <Icon
                    sizeRules="w-2 h-2 sm:w-3 sm:h-3"
                    fill="rotate-180 stroke-2 stroke-brand-tq fill-none"
                  >
                    <ExpandDownIcon />
                  </Icon>
                </div>
              </div>
            ) : (
              <div className="ShowDetailCard w-full h-4 sm:h-6 bg-white bg-opacity-20 rounded-[10px] border border-slate-200 justify-start items-center inline-flex">
                <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
                  <div className="text-brand-tq text-[8px] sm:text-[10px] font-normal font-['Inter']">
                    Expand List {list.items.length}
                  </div>
                  <Icon
                    sizeRules="w-2 h-2 sm:w-3 sm:h-3"
                    fill="stroke-2 stroke-brand-tq fill-none"
                  >
                    <ExpandDownIcon />
                  </Icon>
                  <div className="Icon w-2.5 h-2.5 py-[2.50px] justify-center items-center flex" />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="text-light-text font-light mx-3 mt-1 smallest-text">
        {list.updatedAt &&
          list.items.length > 0 &&
          getDiffInMinutes(list.updatedAt) < 10 &&
          `Saved ${formatDateTime(list.updatedAt)}`}
      </div>
    </div>
  );
};

export default List;
