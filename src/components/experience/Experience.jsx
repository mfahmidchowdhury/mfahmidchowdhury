import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skils I have</h5>
      <h2>My Experience</h2>

      <div className="cotainer experience__container">
        <div className="experienced__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              {/* Put them inside a div */}
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        <div className="experienced__backend">
          <h3>Back Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Node JS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Java</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
