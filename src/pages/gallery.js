import React, { useState } from "react";
import { Galleries } from "../config/default";
import Button from "../component/button/button";
import ScrollAnimation from "react-animate-on-scroll";

const Gallery = ({ section }) => {
  const [isgallery, setGallery] = useState(false);
  const handleClick = () => {
    setGallery(!isgallery);
  };
  return (
    <div className="px-[5vw] max-w-[1540px] mx-auto py-[80px]" id={section}>
      <div className="pb-[50px]">
        <span className="text-[40px] sm:text-[50px] lg:text-xl font-semibold text-darkblue">
          GALLERY
        </span>
        {/* <p className="text-base sm:text-md max-w-[650px] text-darkblue pt-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          mattis augue.
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Galleries.map((item, index) => {
          return (
            <div key={index}>
              {!isgallery && index >= 6
                ? null
                : 
                <ScrollAnimation animateIn='fadeIn' initiallyVisible={true}>
                    <div
                      className="h-[15vw] min-h-[200px] rounded-[7px] gallerycard"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="galleryhover text-[white] text-md font-semibold w-full h-full hidden flex flex-col items-center justify-center rounded-[7px]">
                        <img src="/static/onlylogo.png" className="h-[70px]" />
                        <p className="py-4">{item.title}</p>
                        <p className="text-base">Read More</p>
                      </div>
                    </div>
                </ScrollAnimation>
                  }
            </div>
          );
        })}
      </div>
      <div className="flex justify-end pt-[50px]">
      {!isgallery?
        <Button
          color="primary"
          title="View Full Gallery"
          onClick={handleClick}
          icon="down-arrow-white"
        />
      :
      <Button
          color="primary"
          title="View Full Gallery"
          onClick={handleClick}
          icon="up-arrow-white"
        />
      }
      </div>
    </div>
  );
};

export default Gallery;
