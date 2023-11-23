import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const FooterLink = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 text-sm pb-[30px]">
        <div className="flex justify-center xs:justify-start mb-4 xs:mb-0">
            <img src="/static/whitelogo.png" className="w-[150px] object-contain" />
        </div>
        <div className="hidden xs:block">
            <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <p className="text-[white] cursor-pointer pb-3 font-semibold">Gallery</p>
            </Link>
            <Link
                activeClass="active"
                to="updates"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <p className="text-[white] cursor-pointer pb-3 font-semibold">
                Updates
                </p>
            </Link>
            <Link
                activeClass="active"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <p className="text-[white] cursor-pointer pb-3 font-semibold">
                Estimate
                </p>
            </Link>
            <Link
                activeClass="active"
                to="testimonial"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <p className="text-[white] cursor-pointer pb-3 font-semibold">
                Testimonial
                </p>
            </Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-400}
                duration={500}
            >
                <p className="text-[white] cursor-pointer pb-3 font-semibold">Contact</p>
            </Link>
        </div>
    </div>
  );
};

export default FooterLink;
