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
            link="https://github.com/ShavonHarris-Dev/CRUD-APP-StoryBoard"
            desc="StoryBoard is a CRUD app built for writing a list of stories or blog-posts. You can create your own story in 'public' or 'private'."
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
            desc="BollyBot is an app that fixed a personal problem. Tired of searching for a new Bollywood movie to watch every night, I built a randomized movie picker.  The app lists the movie title, the year of release, and rating."
            usedArray={[
                "JavaScript",
                "CSS3",
                "MongoDB",
                "Node.js",
            ]}
          />
          <CustomProject
            title="React Portfolio (You are here!)"
            link="https://github.com/ShavonHarris-Dev/new-react-portfolio"
            desc="React has quickly become a favorite tool for the frontend. This is my first large scale react app. It includes the use of custom hooks as well as a bit about my background, some projects and ways of getting in touch with me.  "
            usedArray={[
                "JavaScript",
                "React",
                "CSS3",
            ]}
          />
           <CustomProject
            title="React Recipe Book"
            link="https://github.com/ShavonHarris-Dev/React-Recipe-Book"
            desc="Built a recipe app that allows the user to keep track of recipes over time. "
            usedArray={[
                "JavaScript",
                "React",
                "CSS"
            ]}
          />
           <CustomProject
            title="Pacman"
            link="https://github.com/ShavonHarris-Dev/PacMan"
            desc="Exciting game that I refactored from Ania Kubow. This was a great way to practice using advanced functions. "
            usedArray={[
                "JavaScript",
                "CSS",
                "HTML"
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