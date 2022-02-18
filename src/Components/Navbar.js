import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const addSticky = () => {
    if (window.scrollY >= 300) setNavbar(true);
    else setNavbar(false);
  };
  window.addEventListener("scroll", addSticky);

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className={navbar ? "navbar sticky" : "navbar"}>
        <ul class="nav-list">
          <li>
            <NavLink
              to="/"
              className={(navitems) =>
                navitems.isActive ? "nav-items-active" : "navitems"
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={(navitems) =>
                navitems.isActive ? "nav-items-active" : "navitems"
              }
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              className={(navitems) =>
                navitems.isActive ? "nav-items-active" : "navitems"
              }
            >
              projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={(navitems) =>
                navitems.isActive ? "nav-items-active" : "navitems"
              }
            >
              resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Navbar;
