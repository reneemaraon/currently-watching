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
import { useEffect, useState } from "react";
import Insert from "./Insert";

const List = ({ list }) => {
  const [showItems, setShowItems] = useState(true);
  const [items, setItems] = useState([]);
  const [insertIndex, setInsertIndex] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [dragging, setDragging] = useState(false);

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

  useEffect(() => {
    setItems(
      list.items.map((item) => ({
        ...item,
        selected: false,
      }))
    );
  }, []);

  const toggleShowItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="List self-stretch flex-col justify-start items-start gap-2.5 flex">
      <div className="ListHeader self-stretch px-1 md:px-2 sm:px-4 py-1 sm:py-2.5 justify-start items-start gap-2.5 inline-flex">
        <div className="grow title-text font-light">{list.name}</div>
        <div className="Actions justify-center items-center gap-1.5 sm:gap-2.5 flex">
          <ListOptionButton>
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
          </ListOptionButton>
          <ListOptionButton>
            <Icon sizeRules="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
              <OptionsIcon />
            </Icon>
          </ListOptionButton>
          <button className="rounded-full inverse-button-style small-button">
            <div className="font-normal sm:font-medium">+ Add drama</div>
          </button>
        </div>
      </div>
      <div className="List self-stretch px-0 sm:px-1 md:px-2.5 flex-col justify-start items-start gap-1 sm:gap-1.5 flex">
        {showItems &&
          items.map((item, index) => (
            <Draggable
              key={item.order}
              onStop={(e, data) => {
                const newPosition = index + Math.round(data.y / 70); // Assuming each item's height is 50px
                handleStop(index, newPosition);
              }}
              onStart={() => onDragStart(index)}
              onDrag={(e, data) => {
                const newPosition = index + Math.round(data.y / 70); // Assuming each item's height is 50px
                setInsertIndex(newPosition);
              }}
              axis="y"
              position={{ x: 0, y: item.order - 1 }}
              // grid={[1, 70]}
            >
              <ListItem
                insertVisible={
                  insertIndex == index &&
                  !item.selected &&
                  index < items.length - 1
                }
                order={item.order}
                dragging={dragging}
                selected={item.selected}
                show={item.show}
              />
            </Draggable>
          ))}
        {items.length - 1 == insertIndex && insertIndex != draggedIndex && (
          <Insert />
        )}

        <div className="cursor-pointer w-full" onClick={toggleShowItems}>
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
    </div>
  );
};

export default List;
