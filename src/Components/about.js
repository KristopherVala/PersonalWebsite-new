import React from "react";
import "./media.css";
import "./about.css";
import my_photo from "../imgs/me.jpeg";
import css_logo from "../imgs/csslogo.png";
import react_logo from "../imgs/React-icon.png";
import html_logo from "../imgs/HTML5_Logo.png";
import js_logo from "../imgs/javascript.png";

import cplus_logo from "../imgs/cplus_logo.png";
import aws_logo from "../imgs/aws_logo.png";
import java_logo from "../imgs/java_logo.png";
import azure_logo from "../imgs/azure_logo.png";

import linkedIn_logo from "../imgs/LI-In-Bug.png";

import { AnimatePresence, motion } from "framer-motion";

const about = () => {
  return (
    <section className="about-section">
      <div className="container-non">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="about-me">
            <div className="my-photo">
              <img className="photo" src={my_photo} alt="Kristopher Vala" />
            </div>
            <div>
              <h1 className="main-about-header">About me</h1>
              <div className="about-text-section">
                <p className="about-text">
                  Hi and welcome to my personal website. I'm a recent software
                  development graduate with a passion for creating and building
                  new and exciting applications. I'm currently based in Toronto
                  and am very excited about the future. I take every day as a
                  learning experience and am always eager to learn new
                  technologies and further develop my skills.
                </p>
                <p className="about-text bottom-text">
                  I've recently aquired a number of cloud certifications and
                  have been working towards improving my programming and design
                  skills. If you want to chat, feel free to reach out to me on
                  LinkedIn.
                </p>
              </div>
              <div className="contactButtonContainer">
                <a href="https://www.linkedin.com/in/kristophervala/">
                  <img
                    className="individualTech contactButton"
                    src={linkedIn_logo}
                    alt="Linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="techPhotosSection grid--4-cols">
            <div className="techPhotos">
              <img className="individualTech" src={react_logo} alt="tech" />
            </div>
            <div className="techPhotos">
              <img className="individualTech" src={html_logo} alt="tech" />
            </div>
            <div className="techPhotos">
              <img className="individualTech" src={css_logo} alt="tech" />
            </div>
            <div className="techPhotos">
              <img className="individualTech" src={js_logo} alt="tech" />
            </div>

            <div className="techPhotos">
              <img className="individualTech" src={azure_logo} alt="tech" />
            </div>
            <div className="techPhotos">
              <img className="individualTech" src={aws_logo} alt="tech" />
            </div>
            <div className="techPhotos">
              <img className="individualTech" src={java_logo} alt="tech" />
            </div>
            <div className="techPhotos">
              <img className="individualTech" src={cplus_logo} alt="tech" />
            </div>

            {/* End of photos */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default about;
