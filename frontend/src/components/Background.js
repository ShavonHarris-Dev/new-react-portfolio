import React from "react";

const Background = () => {
  return (
    <section className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>
          I am currently with {" "}
          <a
            href="https://leonnoel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
          >
            100Devs Software Engineers
          </a>{" "}
          where I design and develop full-stack applications across multiple platforms collaborating with 100s of distributed engineers to build modern web applications using today's best practices.
        </p>
        <p>
        As a developer, I enjoy creating elegant solutions to technical problems using my knowledge to present consistently thoughtful products. My goal is to constantly build scalable and efficient applications under the hood while providing engaging, pixel-perfect user experiences.
        </p>
        <p>
        <strong>When I'm not in front of a computer screen</strong>, I'm probably traveling, reading books, or catching a new film.
        </p>
        <a
          className="arrow-link"
          href="https://docs.google.com/document/d/1V9rT9th4r_ypaq_nQIqLbGshduialhLV/edit?usp=sharing&ouid=115952415964137951868&rtpof=true&sd=true"
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
