import React from "react";
import CustomProject from "./customHook/CustomProject";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
          <CustomProject
            title="Storyboard"
            link="https://github.com/ShavonHarris-Dev/storybook-app"
            desc="Fullstack app that I built with a team of engineers. This app includes the use of MongoDB, Handlebars, Google Authentication, Passport.js and other features. "
            usedArray={[
              "JavaScript",
              "CSS3",
              "MongoDB",
              "Node.js",
            ]}
          />
          <CustomProject
            title="BollyBot"
            link="https://github.com/karantondare/instalike"
            desc="Fullstack app that pulls random Bollywood movies from an API that I created with a list of 500 titles. "
            usedArray={[
                "JavaScript",
                "CSS3",
                "MongoDB",
                "Node.js",
            ]}
          />
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/ShavonHarris-Dev"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h4>Check out my other projects on github.</h4>
        </a>
      </div>
    </>
  );
};

export default Projects;