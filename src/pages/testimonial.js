import React from "react";
import Flickity from "react-flickity-component";
import { Testimonials } from "../config/default";

const flickityOptions = {
  initialIndex: 0
};

const Testimonial = ({section}) => {
  return (
    <div className="bg-secondary" id={section}>
      <div className="max-w-[1540px] px-[5vw] mx-auto">
        <Flickity
          className={"carousel px-[5vw] lg:px-[10vw] py-[50px] lg:py-[100px]"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {Testimonials.map((item, index) => {
            return (
              <div className="text-center" key={index}>
                <p className="text-darkblue text-base xl:text-md font-semibold">
                  {item.description}
                </p>
                <div className="flex items-center justify-center pt-[20px]">
                  <img src={item.avatar} className="w-[50px] rounded-[50%] mr-[20px]" />
                  <div>
                    <p className="text-base text-darkblue">
                        {item.name}
                    </p>
                    <p className="text-sm text-[#4d4d4d]">
                        {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Flickity>
      </div>
    </div>
  );
};

export default Testimonial;
