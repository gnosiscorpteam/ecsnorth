import React from "react";
import Facebook from "../../assets/icons/facebook.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Mail from "../../assets/icons/mail.svg";
import Phone from "../../assets/icons/phone.svg"

const SubNavbar = () => {
    return(
        <div className="flex justify-center items-center fixed w-[100vw] h-[50px] bg-[white] z-[99]">
            <div className="flex items-center justify-between container mx-auto">
                <div className="flex">
                    <div className="flex">
                        <img src={Phone} />
                        <p className="text-sm text-darkblue pl-2">(425) 230-2632</p>
                    </div>
                    <div className="flex pl-6">
                        <img src={Mail} />
                        <p className="text-sm text-darkblue pl-2">support@ecs.com</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={Facebook} />
                    <img src={Linkedin} className="px-3" />
                    <img src={Twitter} />
                </div>
            </div>
        </div>
    );
}

export default SubNavbar;