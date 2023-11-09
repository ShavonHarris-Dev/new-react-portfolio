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
            Trellix
          </a>{" "}
          where I am a developer specializing in front-end technologies and design systems, I craft reusable components and user interfaces to enhance user experience and product quality.
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
