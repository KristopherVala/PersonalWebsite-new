import React from "react";
import "./media.css";
import "./projects.css";
import { AnimatePresence, motion } from "framer-motion";
import random_logo from "../imgs/ran_pass.png";
import stat_logo from "../imgs/stat.png";
import cf_logo from "../imgs/calfit.png";
import twenty_logo from "../imgs/20questions.png";

// For fun
// const tester = document.querySelector(".projectImageContainer2");

// const obs = new IntersectionObserver(function (entries) {
//   const ent = entries[0];
//   console.log(ent);
//   if (ent.isIntersecting === false) {
//     document.querySelector(".navbar").classList.add("sticky");
//   }
// });
// obs.observe(tester);

// For fun

const projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="projects-page">
        <div className="container-projects">
          <div className="grid grid--2-cols project-grid">
            <div className="leftZ-project a">
              <h2 className="project-name">CalFit - Nutrution Tracker</h2>
              <h3 className="project-tech">C#, Xamarin, MySQL</h3>
              <div className="projectImageContainer">
                <img className="projectImage" src={cf_logo} alt="Calfit" />
              </div>
            </div>

            <div className="rightZ-project b">
              <p className="projects-information">
                Developed a nutrition and meal tracker mobile app for iPhone and
                Android.
              </p>
              <p className="projects-information">
                Implemented persistent creation and login functionality which
                allows users to search for and input their meals for the day and
                then store it in a database which ties the information to their
                account
              </p>
              <p className="projects-information last-info">
                Nutritional and food data is pulled from the
                https://www.nutritionix.com/ API.
              </p>
            </div>
            <div className="projectUnderline a1"></div>
            <div className="leftZ-project dear">
              <h2 className="project-name">20 Questions Mobile App</h2>
              <h3 className="project-tech">Java, Android Studio</h3>
              <div className="projectImageContainer imageRight">
                <img
                  className="projectImage "
                  src={twenty_logo}
                  alt="Twenty Questions"
                />
              </div>
            </div>
            <div className="rightZ-project c">
              <p className="projects-information">
                Developed a trivia game for Android phones using Java and
                Android Studio.
              </p>
              <p className="projects-information">
                The game has the players progress through a series of questions
                and then reveals their score at the end
              </p>
            </div>
            <div className="projectUnderline a2"></div>

            <div className="leftZ-project e">
              <h2 className="project-name">Random Password Generator</h2>
              <h3 className="project-tech">React, HTML, CSS</h3>
              <div className="projectImageContainer imageRight">
                <img
                  className="projectImage "
                  src={random_logo}
                  alt="Random Password Generator"
                />
              </div>
            </div>
            <div className="rightZ-project f">
              <p className="projects-information">
                Developed a random password generator web app.
              </p>
              <p className="projects-information">
                Users can select the parameters and a password is generated
                based on the selection.
              </p>
            </div>
            <div className="projectUnderline a3"></div>

            <div className="leftZ-project stat">
              <h2 className="project-name">
                StatTrak - Online Game Statistics Website
              </h2>
              <h3 className="project-tech">
                C#, ASP.Net, CSS, HTML, Bootstrap, MySQL
              </h3>
              <div className="projectImageContainer imageRight">
                <img className="projectImage " src={stat_logo} alt="StatTrak" />
              </div>
            </div>
            <div className="rightZ-project g">
              <p className="projects-information">
                Developed a website that held leaderboards for various games.
              </p>
              <p className="projects-information">
                Users uploaded their stats that were tied to their personal
                accounts inside of the persistent database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default projects;
