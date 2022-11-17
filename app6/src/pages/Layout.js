import { Outlet, Link } from "react-router-dom";
import styles from '../my-style.module.css'
import '../my-sass.scss';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";


function Layout() {
   const handleClick = event => {
  
          var ul = document.querySelectorAll('ul li');
          
          console.log(ul)
          
           for (var i = 0; i < 6; ++i) {
            
            ul[i].classList.remove("Tagged");
           }

         let target =document.getElementById(event.currentTarget.id)
         
         target.classList.toggle("Tagged");
  };

  

  return (
    <>
      <nav>
        
        <ul id="foo" className={styles.LiStyle} >
          <Navbar></Navbar>
          <li className={styles.LiNav} id ="b1" key={0} onClick={handleClick}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.LiNav} id ="b2" key={1} onClick={handleClick}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className={styles.LiNav} id ="b3" key={2} onClick={handleClick}>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </nav>
      
      <Outlet />
      <Footer></Footer>
      
    </>
   )
  
  }

  export default Layout;