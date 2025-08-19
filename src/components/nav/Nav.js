import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-header">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "nav-header__nav-link-home nav-header__active"
            : "nav-header__nav-link-home"
        }
      >
        Accueil
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "nav-header__nav-link-about nav-header__active"
            : "nav-header__nav-link-about"
        }
      >
        A Propos
      </NavLink>
    </nav>
  );
};

export default Nav;
