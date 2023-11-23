import React from "react";
import Intro from "./intro";
import Navbar from "../component/navbar/navbar";
import SubNavbar from "../component/navbar/subnavbar";
import WinCleanService from "./wincleanservice";
import Gallery from "./gallery";
import Updates from "./updates";
import Contact from "./contact";
import Testimonial from "./testimonial";
const Home = () => {
    return(
        <div>
            {/* <SubNavbar /> */}
            <Navbar />
            <Intro section="intro" />
            <Gallery section="gallery" />
            <Updates section="updates" />
            <WinCleanService section="testimonial" />
            <Testimonial />
            <Contact section="contact" />
        </div>
    );
}

export default Home;