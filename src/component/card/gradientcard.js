import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const GradientCard = ({ item }) => {
  return (
    <div className="overflow-hidden rounded-[7px]">
      {/* <ScrollAnimation animateIn="slideInDown"> */}
      <div
        className="rounded-[7px] h-[12vw] min-h-[200px] image"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="h-full w-full z-[99] flex items-end">
          <div className="h-[120px] w-full card_gradient flex items-end rounded-b-[7px]">
            <div className="text-white px-[30px] pb-[15px]">
              <div className="text-base font-semibold">
                {item.type}
              </div>
              {/* <div className="text-sm">
                ${item.price}/window
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* </ScrollAnimation> */}
    </div>
  );
};

export default GradientCard;
