import React from "react";
import "./resume.css";
import Solu_logo from "../imgs/SolutionsArchitect.png";
import Sys_logo from "../imgs/SysOps.png";
import CPrac_logo from "../imgs/CloudPrac.png";
import Azure_logo from "../imgs/azureLogo.png";

import { AnimatePresence, motion } from "framer-motion";

const resume = () => {
  return (
    <section class="resume-page">
      <div className="resumeContainer grid--2-cols-resume">
        {/* Cert Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="test5"
        >
          <div className="certContainer">
            <div className="certGrid grid--1-cols">
              <div>
                <img
                  className="certDescription "
                  src={Azure_logo}
                  alt="AWS Certified Cloud Practioner"
                />
              </div>
              <div>
                <img
                  className="certDescription awsLogos"
                  src={Solu_logo}
                  alt="AWS Certified Cloud Practioner"
                />
              </div>

              <div>
                <img
                  className="certDescription awsLogos"
                  src={Sys_logo}
                  alt="AWS Certified Cloud Practioner"
                />
              </div>
              <div>
                <img
                  className="certDescription awsLogos"
                  src={CPrac_logo}
                  alt="AWS Certified Cloud Practioner"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cert Section */}

        {/* Education */}

        {/* Work experience Side */}

        <div className="workExperience">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="expHeader">
              <p className="expheaderText">Education</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="jobSection">
              <h2 className="jobTitle">Seneca College</h2>
              <h3 className="jobInfo">
                Honours Bachelor of Technology Software Development
              </h3>
              <h3 className="jobInfo">2015 - 2020</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="expHeader">
              <p className="expheaderText sectionDivider">Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="jobSection">
              <h2 className="jobTitle ">Technical Support Analyst</h2>
              <h3 className="jobInfo">
                Hudson Technology | October 2020 - Present
              </h3>

              <p className="dutiesText">
                Resolved various issues with clients’ hardware, software and
                networking issues.
              </p>
              <p className="dutiesText">
                Worked with various clients Active Directory domains for user
                provisioning/managing and group policy management.
              </p>
              <p className="dutiesText ">
                Documented and updated procedures in the internal knowledge base
              </p>
            </div>
          </motion.div>

          {/* Second job */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="jobSection">
              <h2 className="jobTitle jobTitleMiddle">
                Junior Systems Administrator
              </h2>
              <h3 className="jobInfo">
                Leonardo Worldwide | September 2019 - May 2020
              </h3>

              <p className="dutiesText">
                Four month co-op hired on as a contract employee.
              </p>
              <p className="dutiesText">
                Performed server administration, system and software updates and
                troubleshooting.
              </p>
              <p className="dutiesText bottom-text">
                Managed the company Active Directory Domain.{" "}
              </p>
            </div>
          </motion.div>
        </div>
        <div className="skillsSide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="grid grid--2-cols skillsGrid">
              <h3 className="skillsHeader"> Skills</h3>
              <div className="sectionDivider oneCol"></div>
              <div>
                <h2 className="skillsText">React</h2>
              </div>
              <div>
                <h2 className="skillsText">JavaScript</h2>
              </div>
              <div>
                <h2 className="skillsText">HTML5</h2>
              </div>
              <div>
                <h2 className="skillsText">CSS</h2>
              </div>
              <div>
                <h2 className="skillsText">Java</h2>
              </div>
              <div>
                <h2 className="skillsText">C++</h2>
              </div>
              <div>
                <h2 className="skillsText">AWS</h2>
              </div>
              <div>
                <h2 className="skillsText">Azure</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default resume;
