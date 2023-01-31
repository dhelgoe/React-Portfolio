import React from "react";
import myimage from "../image/Resume.jpg"
import "../styles/Resume.css";




export default function Resume () {
    return (
        <div>
            { <img src={myimage} class="center"></img> }
        </div>
     )
}