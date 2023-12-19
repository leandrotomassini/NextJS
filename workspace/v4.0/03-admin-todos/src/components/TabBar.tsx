'use client'
import { setCookie } from 'cookies-next';
import { useState } from 'react';

const tabOptions = [1, 2, 3, 4, 5];

interface Props {
  currentTab?: number;
  tabOptions?: number[];

}


export const TabBar = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }: Props) => {

  const [selected, setselected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setselected(tab);
    setCookie('selectedTab', tab.toString());
  }

  return (
    <div className={`grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-5`}>
      {
        tabOptions.map(tab => (
          <div key={tab}>
            <input
              type="radio"
              id={tab.toString()}
              className="peer hidden"
              checked={selected === tab}
              onChange={() => { }}
            />
            <label
              onClick={() => onTabSelected(tab)}
              className="transition-all
              block
              cursor-pointer
              select-none
              rounded-xl
              p-2
              text-center
              peer-checked:bg-blue-500
              peer-checked:font-bold
              peer-checked:text-white"
            >
              {tab}
            </label>
          </div>
        ))
      }
    </div>
  );
}