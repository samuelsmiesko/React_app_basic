import React from 'react'
import { useState } from 'react';
import facebook from "./logos/facebook.png"
import Instagram from "./logos/Instagram.png"

function Footer () {

   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      
      setIsHover(false);
   };

    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "0",
        width: "100vw",
        borderTop:"2px solid white",
        boxShadow: "0px 20px 35px rgb(75, 102, 255) inset",
        transition: "0.3s",
        marginBottom: isHover ? '0px' : '-270px',
      };

    const logo = {
        width:"70px",
        margin:"5px",
    }

      

  return (
    <div style={myStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
      <div>
        <h2>Footer</h2>
        <h3>Website</h3>
        <p>Adress:</p>
        <p>Number:</p>
        <p>email:</p>
      </div>
      <div  style={{display: "flex", flexDirection: "row"}}>
        <p><img style={logo} src={facebook} alt="Logo" /></p>
        <p><img style={logo} src={Instagram} alt="Logo" /></p>
      </div>
    </div>
  )
}

export default Footer;