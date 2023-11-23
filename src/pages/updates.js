import React from "react";
import Button from "../component/button/button";

const Updates = ({ section }) => {
  return (
    <div style={{ backgroundImage:`url('/static/images/updates/background.png')`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }} className="bg-center">
      <div
        className="px-[5vw] py-[10vh] xl:py-[15vh] max-w-[1540px] mx-auto block xl:flex gap-x-[120px] items-center"
        id={section}
      >
        <div className=" w-full xl:max-w-[440px] grid grid-cols-2 gap-4 xl:block">
          <div className="rotate-[0deg] xl:rotate-[20deg] overflow-hidden">
            <img
              src="/static/images/gallery/iStock-162353098.jpg"
              className="image"
            />
            <div />
          </div>
          <div className="rotate-[0deg] xl:rotate-[-20deg] overflow-hidden">
            <img
              src="/static/images/gallery/iStock-485292592.jpg"
              className="image"
            />
            <div />
          </div>
        </div>
        <div className="text-[white]">
          <p className="text-[40px] sm:text-[50px] lg:text-xl font-semibold pt-4 xl:pt-0">Updates</p>
          <p className="text-md lg:text-lg pt-[30px] pb-[20px]">
            Elite cleaning services in Edmonds, Washington
          </p>
          <p className="text-base lg:text-md pb-[20px]">
            Do you need affordable elite cleaning services in Edmonds,
            Washington? Call the highly-trained professionals at Elite
            Cleaning Services for assistance today.
          </p>
          <p className="text-base font-semibold text-end pb-[50px]">
            Posted on Mar 12, 2020
          </p>
          <Button color="secondary" title="LEARN MORE" icon="right-arrow" />
        </div>
      </div>
    </div>
  );
};

export default Updates;
