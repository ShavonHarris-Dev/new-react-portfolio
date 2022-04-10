import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>
          I recently graduated from{" "}
          <a
            href="https://leonnoel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            100Devs Software Engineer Bootcamp
          </a>{" "}
          where I designed and developed full-stack applications across multiple platforms collaborating with a team of engineers to build modern web applications using today's best practices.
        </p>
        <p>
        As a software engineer, I enjoy creating elegant solutions to everyday problems using my technical knowledge to present consistently thoughtful products. My goal is to constantly build scalable and efficient applications under the hood while providing engaging, pixel-perfect user experiences.
        </p>
        <p>
        <strong>When I'm not in front of a computer screen</strong>, I'm probably traveling, reading books, or catching a new film.
        </p>
        <a
          className="arrow-link"
          href="https://docs.google.com/document/d/1Fep_UyjBVE0Bd-M8CVLQbxkAtoqfwseh0nPCW8C7qEA/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my resume
        </a>
      </div>
    </section>
  );
};

export default Background;