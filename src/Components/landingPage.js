import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";
import { AnimatePresence, motion } from "framer-motion";

const landingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="hero">
          <p className="name-section">KRISTOPHER VALA</p>
          <div className="hero-list">
            <ul>
              <li className="list-item">
                <Link to="/about" className="btn">
                  about
                </Link>
              </li>

              <li className="list-item">
                <Link to="/projects" className="btn">
                  projects
                </Link>
              </li>
              <li className="list-item">
                <Link to="/resume" button className="btn">
                  resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default landingPage;
