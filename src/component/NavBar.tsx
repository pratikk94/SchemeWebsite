import { NavLink, useLocation } from "react-router-dom";
import "../CSS/NavBar.css";
export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Home
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Form
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
