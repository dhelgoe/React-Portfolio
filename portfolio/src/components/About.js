import React from "react";
import "../styles/About.css";
//import myimage from "../image/whateveri call it.jpg"

export default function About () {
 return (
    <div>
        <h1>About Me!</h1>
        <p class="words">
        My name is Derek Helgoe. I'm a current student in the full stack development program through the University of Minnesota. I reside in the twin cities. Outside of coding and learning I like to enjoy the warm weather outdoors, sports and video games with friends. This application is still in early development as more design, links/photos will be added before the final product is finished!
        {/* <img src={myimage}></img> */}
        </p>
    </div>
 )
}