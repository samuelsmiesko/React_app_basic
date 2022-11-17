import React, { useState } from 'react';
import './Navbar.css'
import Layout from './Navlinks'


const Navbar = () => {

    //to change burger class
    const[burger_class, setburgerClass] = useState("burger-bar unclicked")
    const[menu_class,setMenuClass] = useState("menu hidden")
    const[isMenuClicked,setIsMenuClicked] = useState(false)

    //toogle burger menu

    const updateMenu = () => {
        if(isMenuClicked){
            setburgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else{
            setburgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)

    }

    return(
        <div style={{width: '100%', height:'100%'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
                
            <div className={menu_class}>
               
                <Layout/>
            </div>
        </div>
    )
}

export default Navbar;