import React from "react";
import { BussinessHours, ContactInfo } from "../../config/default";

const BussinessInfo = () => {
  return (
    <div className="text-[white] text-sm grid grid-cols-1 xs:grid-cols-2">
      <div className="flex flex-col items-center xs:items-start">
        <p className="text-[18px] font-semibold pb-2">Bussiness Consultants</p>
        <div>
          {ContactInfo.map((item, index) => {
          return (
          <a key={index} className="flex pb-2 cursor-pointer" href={item.link}>
              <img src={item.icon} className="pr-2" />
              <p className="max-w-[200px]">{item.info}</p>
          </a>
          );
        })}
        </div>
      </div>
      <div className="flex flex-col items-center xs:items-start pt-4 xs:pt-0">
        <p className="text-[18px] font-semibold pb-2">Bussiness Hours</p>
        <div>
          {BussinessHours.map((item, index) => {
            return (
              <p key={index} className="pb-2">
                {item.date} : {item.time}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BussinessInfo;
