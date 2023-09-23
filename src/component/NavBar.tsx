import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";
export default function NavBar() {
  return (
    // <nav className="navbar-container">
    //   <NavLink
    //     to="/"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     to="/form"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     Form
    //   </NavLink>

    //   <NavLink
    //     to="/about"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     About
    //   </NavLink>
    //   <NavLink
    //     to="/contact"
    //     className={({ isActive }) => (isActive ? "active" : "inactive")}
    //   >
    //     Contact
    //   </NavLink>
    // </nav>
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/form">Form</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
        </ul>
        <h1 className="logo">
          <NavLink to="/">Scheme's Website</NavLink>
        </h1>
      </div>
    </nav>
  );
}
