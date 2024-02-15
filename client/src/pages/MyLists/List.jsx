import {
  AddIcon,
  ExpandDownIcon,
  MoveDownListIcon,
  MoveUpListIcon,
  OptionsIcon,
} from '../Common/IconList';
import ListItem from './ListItem';
import ListOptionButton from './ListOptionButton';
import Icon from '../Common/Icon';
import CustomButton from '../Common/CustomButton';
import { useState } from 'react';

const List = () => {
  const [showItems, setShowItems] = useState(true);

  const toggleShowItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="List self-stretch rounded-[15px] flex-col justify-start items-start gap-2.5 flex">
      <div className="ListHeader self-stretch px-[15px] py-2.5 justify-start items-start gap-2.5 inline-flex">
        <div className="ListTitle grow shrink basis-0 text-2xl font-normal font-['Inter']">
          Favorites
        </div>
        <div className="Actions justify-start items-start gap-2.5 flex">
          <ListOptionButton>
            <Icon
              sizeRules="w-3.5 h-3.5"
              fill="stroke-text-dark stroke-[1.5px]"
            >
              <MoveDownListIcon />
            </Icon>
          </ListOptionButton>
          <ListOptionButton>
            <Icon
              sizeRules="w-3.5 h-3.5"
              fill="stroke-text-dark stroke-[1.5px]"
            >
              <MoveUpListIcon />
            </Icon>
          </ListOptionButton>
          <ListOptionButton>
            <Icon sizeRules="w-3.5 h-3.5">
              <OptionsIcon />
            </Icon>
          </ListOptionButton>
          <CustomButton styleSet="inverse" size="smallSize" edge="rounded">
            <Icon sizeRules="w-3.5 h-3.5" fill="stroke-2 stroke-brand-tq">
              <AddIcon />
            </Icon>
            <div className="font-semibold">Add drama</div>
          </CustomButton>
        </div>
      </div>
      <div className="List self-stretch px-0 sm:px-1 md:px-2.5 flex-col justify-start items-start gap-[5px] flex">
        {showItems && [<ListItem />, <ListItem />].map((item) => item)}
        <div className="cursor-pointer w-full" onClick={toggleShowItems}>
          {showItems ? (
            <div className="ShowDetailCard w-full h-8 bg-theme-base bg-opacity-70 rounded-b-lg rounded-bl-[15px] rounded-br-[15px] border border-slate-200 justify-start items-center inline-flex">
              <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
                <Icon fill="rotate-180 stroke-2 stroke-brand-tq fill-none">
                  <ExpandDownIcon />
                </Icon>
              </div>
            </div>
          ) : (
            <div className="ShowDetailCard w-full h-[35px] bg-white bg-opacity-20 rounded-[10px] border border-slate-200 justify-start items-center inline-flex">
              <div className="Expand grow shrink basis-0 self-stretch px-10 justify-center items-center gap-2 flex">
                <div className="ExpandList20 text-brand-tq text-xs font-normal font-['Inter']">
                  Expand List (20)
                </div>
                <Icon fill="stroke-2 stroke-brand-tq fill-none">
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
