import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex items-center absolute px-[5vw] max-w-[1540px] mx-auto pt-[20px] pb-[10px] z-[99]">
      <div className="items-center text-[white] hidden xl:flex">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src="/static/onlylogo.png" />
          {/* <p className="text-3xl text-primary font-bold cursor-pointer">ECS</p> */}
        </Link>
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p className="text-base px-[70px] cursor-pointer">Gallery</p>
        </Link>
        <Link
          activeClass="active"
          to="updates"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p className="text-base cursor-pointer">Updates</p>
        </Link>
        <Link
          activeClass="active"
          to="testimonial"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p className="text-base pl-[70px] cursor-pointer">Estimate</p>
        </Link>
        <Link
          activeClass="active"
          to="testimonial"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <p className="text-base px-[70px] cursor-pointer">Testimonial</p>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-400}
          duration={500}
        >
          <p className="text-base cursor-pointer">Contact</p>
        </Link>
      </div>
      <div className="flex xl:hidden justify-between w-[90vw]">
      <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src="/static/onlylogo.png" className="w-[50px] sm:w-auto" />
        </Link>
        <img src="/static/icon/menu.svg" className="w-[40px]" />
      </div>
    </div>
  );
};

export default Navbar;
