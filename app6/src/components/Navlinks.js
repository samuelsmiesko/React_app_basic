


import {  Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul style={{listStyleType: "none", lineHeight: "60px"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      
    </>
  )
};

export default Layout;

