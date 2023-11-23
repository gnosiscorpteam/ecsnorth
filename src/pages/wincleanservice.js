import React, { useState } from "react";
import { WindowType } from "../config/default";
import GradientCard from "../component/card/gradientcard";
import Select from "react-tailwindcss-select";
import Button from "../component/button/button";

const options = [
  { value: 1, label: "Awning window" },
  { value: 1, label: "Bay window" },
  { value: 1, label: "Bow window" },
  { value: 1, label: "Casement window" },
  { value: 1, label: "Hopper window" },
  { value: 1, label: "Glass block window" },
  { value: 1, label: "Jalousie window" },
  { value: 1, label: "Cottage window" },
  { value: 1, label: "Center pivot window" },
  { value: 1, label: "Dormer window" },
  { value: 1, label: "Double-hung window" },
  { value: 1, label: "Oriel window" },
  { value: 1, label: "Palladian window" },
  { value: 1, label: "Picture window" },
  { value: 1, label: "Egress window" },
  { value: 1, label: "Fixed window" },
  { value: 1, label: "French door window" },
  { value: 1, label: "Garden window" },
  { value: 1, label: "Round window" },
  { value: 1, label: "Single-hung window" },
  { value: 1, label: "Skylight window" }
];

const floorsoptions = [
  {
    value:6.5, label:"1st floors"
  },
  {
    value:6.5, label:"2nd floors"
  },
  {
    value:7.5, label:"3rd floors"
  },
  {
    value:8.5, label:"4th floors"
  },
]

const WinCleanService = ({ section }) => {
  const [animal, setAnimal] = useState(null);
  const [amount, setAmount] = useState('');
  const [floors, setFloors] = useState(null);
  const [iswindowsize, setWindowSize] = useState(false);
  const [windowsTypes, setWindowsTypes] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = value => {
    setAnimal(value);
  };

  const handleFloorsChange = value => {
    setFloors(value);
  }

  const handleAmount = value => {
    setAmount(value);
  }
  const handleClick = () => {
    if(amount&&floors) {
      setWindowsTypes(prevEmployees => [
        ...prevEmployees,
        {floors:floors.label, amount: amount},
      ]);
      setAmount('')
      setAnimal(null)
      setFloors(null)
      setTotal(total+amount*floors.value)
    }
  }
  const handleWindowSize = () => {
    setWindowSize(!iswindowsize)
  }
  return (
    <div className="px-[5vw] max-w-[1540px] mx-auto py-[80px]" id={section}>
      <div className="text-center text-[40px] sm:text-[50px] lg:text-xl text-darkblue font-semibold pb-[45px]">
        <span>
          Estimate Windows
          Cleaning Service
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {WindowType.map((item, index) => {
          return (
            <div key={index}>
               {!iswindowsize && index >= 12
                ? null:
                <GradientCard item={item} key={index} />
               }
            </div>
          );
        })}
      </div>
      <div className="pt-[50px] flex justify-end">
      {!iswindowsize?
        <Button color="secondary" title="View All" onClick={handleWindowSize} icon="down-arrow" />
      :
      <Button color="secondary" title="View All" onClick={handleWindowSize} icon="up-arrow" />
      }
      </div>
      <div className="flex justify-center">
        <div class="mx-auto mt-[40px] bg-secondary border-t border-b border-primary text-darkblue px-4 py-3" role="alert">
          <div className="flex">
            <div class=""><svg class="fill-current h-6 w-6 fill-[#13416B] mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold pb-[5px]">Additional Information</p>
              <p class="text-sm">
              Window panes will be calculated by 3 feet wide by 2 feet high window sections.  
There is also $150 minimum job fee.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[40px] flex justify-center">
        <div className="w-[100vw] sm:w-[60vw] lg:w-[40vw]">
          <div className="block sm:flex">
            {/* <Select
              value={animal}
              onChange={handleChange}
              options={options}
              placeholder="Select window type"
              formatOptionLabel={data => (
                <li
                    className={`block transition duration-200 px-4 py-2 cursor-pointer select-none truncate ${
                        !data.isSelected
                            ? `text-darkblue bg-white`
                            : `bg-secondary text-primary`
                    }`}
                >
                    {data.label}
                </li>
            )}
              classNames={{
                menuButton: ({ isDisabled }) => (
                    `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                        isDisabled
                            ? "bg-gray-200"
                            : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                    }`
                ),
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        isSelected
                            ? `text-white bg-blue-500`
                            : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                    }`
                ),
                list: "border-none",
                searchContainer : "border-none"
            }}
            /> */}
            <Select
              value={floors}
              onChange={handleFloorsChange}
              options={floorsoptions}
              placeholder="Select the number of floors"
              formatOptionLabel={data => (
                <li
                    className={`block transition duration-200 px-4 py-2 cursor-pointer select-none truncate ${
                        !data.isSelected
                            ? `text-darkblue bg-white`
                            : `bg-secondary text-primary`
                    }`}
                >
                    {data.label}
                </li>
            )}
              classNames={{
                listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        isSelected
                            ? `text-white bg-blue-500`
                            : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                    }`
                ),
                list: "border-none",
                searchContainer : "border-none"
            }}
            />
            <input
            type="text"
              value={amount}
              name="amount"
              placeholder="Enter the number of windowpanes"
              className="border border-primary rounded-[4px] px-2 mt-4 sm:mt-0 sm:ml-4 focus:outline-none h-[36px] w-full text-sm"
              onChange={e => handleAmount(e.target.value)}
            />
          </div>
          <div className="pt-[20px]">
            {
              windowsTypes?.map((item, index) => {
                return(
                  <div key={index}>
                  <div className="flex justify-center text-[#4d4d4d] pt-2">
                    {/* <div className="border-b-[0.5px] border-primary min-w-[210px] text-end">{item.type}</div> */}
                    <div className="border-b-[0.5px] border-primary ml-[20px] min-w-[190px] text-end">{item.floors}</div>
                    <div className="border-b-[0.5px] border-primary ml-[20px] min-w-[50px] text-end">{item.amount}</div>
                  </div>

                  {
                      windowsTypes.length - 1 === index
                      ?
                      <div key={index} className="flex justify-center text-[#4d4d4d] pt-2">
                    <div className="min-w-[210px] text-end font-semibold">Total Price</div>
                    <div className="ml-[20px] min-w-[50px] text-end font-semibold">$ {total}</div>
                  </div>
                      :
                      null
                    }
                  </div>
                );
              })
            }
          </div>
          <div className="flex justify-end mt-[50px]">
            <Button color="secondary" title="+ Add" onClick={handleClick} />
            <div className="ml-4">
              <Button color="secondary" title="Make Appointment" booking={true} icon="right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinCleanService;
