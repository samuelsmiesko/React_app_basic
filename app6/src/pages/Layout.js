//import { Children } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from '../my-style.module.css'
import '../my-sass.scss';

const handleClick = event => {
  

    //toggleElements.classList.remove('Tagged');
    const lis = document.querySelectorAll('li');
    console.log(lis);
    console.log(lis[0],"0");
    for (let i = 0; i < 3; i++) {
      lis[i].classList.remove('Tagged');
    }
    
    event.currentTarget.classList.toggle('Tagged');

};

const Layout = () => {
  
  return (
    <>
      <nav>
        <ul id="foo" className={styles.LiStyle} >
          <li className={styles.LiNav} li key={0}onClick={handleClick}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.LiNav} key={1} onClick={handleClick}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className={styles.LiNav} key={2} onClick={handleClick}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
   )
  
};

export default Layout;