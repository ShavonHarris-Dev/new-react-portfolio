import React from "react";
import CustomProject from "./customHook/CustomProject";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
        <CustomProject
            title="FlashBacks"
            link="https://github.com/ShavonHarris-Dev/Flashbacks"
            desc="Fullstack social media CRUD app to share your memories. You create posts detailing special occasians and memories and other people like them. "
            usedArray={[
                "JavaScript",
                "React",
                "Redux",
                "Express",
                "MongoDB",
                "Material UI",
            ]}
          />
          <CustomProject
            title="Storyboard"
            link="https://github.com/ShavonHarris-Dev/storybook-app"
            desc="Fullstack CRUD application where you can make private add public stories to share with your friends."
            usedArray={[
              "JavaScript",
              "Materialize",
              "MongoDB",
              "Node.js",
              "Passport.js",
            ]}
          />
          <CustomProject
            title="BollyBot"
            link="https://github.com/ShavonHarris-Dev/React-BollyBot"
            desc="Fullstack app that pulls random Bollywood movies from an API that I created with a list of 500 titles. "
            usedArray={[
                "JavaScript",
                "CSS3",
                "MongoDB",
                "Node.js",
            ]}
          />
          <CustomProject
            title="React Portfolio"
            link="https://github.com/ShavonHarris-Dev/new-react-portfolio"
            desc="React version of portfolio that includes projects and skills. "
            usedArray={[
                "JavaScript",
                "React",
                "CSS3",
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