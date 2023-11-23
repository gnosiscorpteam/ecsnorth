import React from "react";
import Button from "../button/button";

const ContactForm = () => {
    return(
        <div className="text-white text-sm">
            <p className="text-[18px] font-semibold pb-[20px]">Contact Form</p>
            <div className="pb-[30px]">
                <p className="pb-1">Full Name</p>
                <input type="text" className="w-full h-[40px] focus:outline-none text-darkblue px-3" placeholder="James Smith" />
            </div>
            <div className="pb-[30px]">
                <p className="pb-1">E-Mail</p>
                <input type="text" className="w-full h-[40px] focus:outline-none text-darkblue px-3" placeholder="james@example.com" />
            </div>
            <div className="pb-[30px]">
                <p className="pb-1">Comments</p>
                {/* <input type="text" className="w-full" /> */}
                <textarea name="Text1" className="w-full focus:outline-none text-darkblue px-3 py-2" rows="6" placeholder="Enter here..."></textarea>
            </div>
            <div className="w-full flex justify-end">
                <Button color="secondary" title="Send Message" icon="right-arrow" />
            </div>
        </div>
    );
}

export default ContactForm;