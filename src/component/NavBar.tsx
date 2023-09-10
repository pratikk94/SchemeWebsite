import { NavLink } from "react-router-dom";
import "../CSS/NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Contact
      </NavLink>
    </nav>
  );
}
