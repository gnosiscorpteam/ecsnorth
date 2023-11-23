import React from "react";
import BussinessInfo from "../component/Footer/bussinessInfo";
import FooterLink from "../component/Footer/footerLink";
import ContactForm from "../component/Footer/contactForm";
import { SocialInfo } from "../config/default";

const Contact = ({section}) => {
  return (
    <div className="pt-[50px] pb-[30px] bg-center" id={section}  style={{ backgroundImage:`url('/static/images/contact/background.png')`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-[0.5px] border-[white] px-[5vw] pb-[20px]">
          <div className="flex flex-col justify-between">
            <FooterLink />
            <BussinessInfo />
          </div>
          <div className="">
            <ContactForm />
          </div>
        </div>
        <div className="flex justify-end pt-[30px]">
            {SocialInfo.map((item, index) => {
                return(
                    <a href={item.url} target="_blank" className="flex align-center"><img src={item.icon} key={index} className="pr-2" /></a>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
