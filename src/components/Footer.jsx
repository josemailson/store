import React from "react";
import "../styles/Footer.css"
import logo from '../assets/americanas.png'

export default function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt="polo tech logo" height={50}/>
        </div>
    )
}