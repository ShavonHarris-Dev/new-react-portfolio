import React from "react";
import CustomProject from "./customHook/CustomProject";

const Projects = () => {
  return (
    <>
      <section className="section projects">
        <div className="section-title">Projects</div>
        <div className="section-content">
     <CustomProject
            title="AI Powered Digital-Business-Card"
            link=" https://github.com/ShavonHarris-Dev/Digital_Business_Card.git"
            desc="An interactive digital business card powered by AI, allowing visitors to ask questions and learn about my work as a developer. It provides an engaging, conversational way to showcase my skills and experience."
            usedArray={[
                "React(Vite)",
                "Typescript",
                "React DOM",
                "Node.js",
                "AWS SDK",
                "OPENAI API",
                "Serverless-HTTP",
                "AWS Polly & S3"
            ]}
          />
          <CustomProject
            title="Breathe"
            link="https://github.com/ShavonHarris-Dev/Breathe.git"
            desc="Breathe is a simple yet powerful app designed to help you manage anxiety with guided breathing exercises, AI-powered affirmations, and real-time insights. Take a deep breath, find your calm, and build a daily habit of mindfulness."
            usedArray={[
              "React",
              "Flask",
              "JWT",
              "SQLAlchemy",
              "PWA",
            ]}
          />
          <CustomProject
            title="BollyBot"
            link="https://github.com/ShavonHarris-Dev/React-BollyBot"
            desc="So simple but one of my favorite first apps. BollyBot is an app that fixed a personal problem. Tired of searching for a new Bollywood movie to watch every night, I built a randomized movie picker.  The app lists the movie title, the year of release, and rating."
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
          
        </div>
      </section>
      <div className=" section-content projects-flex">
        <a
          href="https://github.com/ShavonHarris-Dev"
          className=" underline-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Check out my other projects on github.</span>
        </a>
      </div>
    </>
  );
};

export default Projects;
