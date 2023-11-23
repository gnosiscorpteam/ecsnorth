import React from "react";

const Button = ( props ) => {
  return (
    <a className="cursor-pointer" onClick={props.onClick} href={props.booking?"https://clienthub.getjobber.com/booking/f7f25b81-804e-4866-8bb8-a6b497538a22":null} target="_blank">
      {props.color === "primary"
        ? <div>
            <div className="flex justify-center bg-primary px-8 py-2 w-fit text-[white] transition-all hover:shadow-xl">
              <p className=" text-base">
                {props.title}
              </p>
              <img src={props.icon?`/static/icon/${props.icon}.svg`:null} className={props.icon?"ml-2 w-[10px]":null} />
            </div>
          </div>
        : <div>
            <div className="flex justify-center bg-secondary text-primary px-8 py-2 w-fit transition-all hover:shadow-xl">
              <p className="text-base">
                {props.title}
              </p>
              <img src={props.icon?`/static/icon/${props.icon}.svg`:null} className={props.icon?"ml-2 w-[10px]":null} />
            </div>
          </div>}
    </a>
  );
};

export default Button;
