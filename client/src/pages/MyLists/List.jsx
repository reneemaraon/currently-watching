import Draggable from "react-draggable";
import {
  ExpandDownIcon,
  MoveDownListIcon,
  MoveUpListIcon,
  OptionsIcon,
} from "../Common/IconList";
import ListItem from "./ListItem";
import ListOptionButton from "./ListOptionButton";
import Icon from "../Common/Icon";
import { useEffect, useRef, useState } from "react";
import { useMyListsContext } from "../../context/MyListsContext";
import { useDebounce } from "use-debounce";
import ListActions from "./ListActions";

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
  const [listName, setListName] = useState(null);
  const [insertIndex, setInsertIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [itemHeight, setItemHeight] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [value] = useDebounce(listName, 1000);

  const { updateList, createList } = useMyListsContext();
  const listRef = useRef(null);
  const searchInputRef = useRef(null);

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

  return (
    <div className="List self-stretch flex-col justify-start items-start gap-2.5 flex">
      <div className="ListHeader w-full px-1 md:px-2 sm:px-4 py-1 sm:py-2.5 justify-between items-start gap-2.5 inline-flex">
        <input
          type="text"
          className="bg-transparent focus:outline-none grow title-text font-light"
          onChange={handleInputChange}
          value={listName}
        />
        <ListActions list={list} />
      </div>
      <div
        ref={listRef}
        className="List transition-all self-stretch px-0 sm:px-1 md:px-2.5 flex-col justify-start items-start gap-1 sm:gap-1.5 flex"
      >
        {showItems &&
          items &&
          items.map((item, index) => (
            <Draggable
              key={item.order}
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
                selected={item.selected}
                show={item.show}
                setShowToItem={setShowToItem}
              />
            </Draggable>
          ))}
      </div>

      <div
        className="cursor-pointer self-stretch px-0 sm:px-1 md:px-2.5 flex-col justify-start items-start gap-1 sm:gap-1.5 flex"
        onClick={toggleShowItems}
      >
        {showItems ? (
          <div className="ShowDetailCard w-full h-5 sm:h-7 bg-theme-base bg-opacity-70 rounded-b-xl rounded-t-lg border border-slate-200 justify-start items-center inline-flex">
            <div className="Expand grow shrink basis-0 self-stretch justify-center items-center flex">
              <Icon
                sizeRules="w-3 h-3 sm:w-4 sm:h-4"
                fill="rotate-180 stroke-2 stroke-brand-tq fill-none"
              >
                <ExpandDownIcon />
              </Icon>
            </div>
          </div>
        ) : (
          <div className="ShowDetailCard w-full h-9 bg-white bg-opacity-20 rounded-[10px] border border-slate-200 justify-start items-center inline-flex">
            <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
              <div className="ExpandList20 text-brand-tq text-[10px] sm:text-xs font-normal font-['Inter']">
                Expand List {list.items.length}
              </div>
              <Icon
                sizeRules="w-3 h-3 sm:w-4 sm:h-4"
                fill="stroke-2 stroke-brand-tq fill-none"
              >
                <ExpandDownIcon />
              </Icon>
              <div className="Icon w-2.5 h-2.5 py-[2.50px] justify-center items-center flex" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
