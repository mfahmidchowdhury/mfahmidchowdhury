import React from "react";
import "./About.css";
import AboutImage from "../../assests/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FaRegFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImage} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Highly Experienced</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients & Students</h5>
              <small>170,000+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaRegFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small> 30+ Completed Projects!</small>
            </article>
          </div>
          <p>
            I am a Software Engineer with a passion for creating educational
            content in Computer Science. I also teach on Udemy, helping students
            worldwide learn and advance their programming skills. Currently, I
            am pursuing an MBA to complement my technical expertise with
            business acumen.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
