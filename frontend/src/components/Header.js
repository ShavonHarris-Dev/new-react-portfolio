import React from "react";

const Header = () => {
  return (
    <header className="intro">
      <h1 className="intro-hello">
        Hi! <span className="emoji">✨</span>
      </h1>
      <h2 className="intro-tagline">
      I'm <span class="name">Shavon Harris</span>, a software engineer from Chicago. With a background in education, I bring a unique perspective to building technology that helps people thrive. After transitioning from teaching to tech, I've focused on creating accessible applications that make a real difference – from enterprise security platforms to mental wellness tools. I'm passionate about building apps that connect and support people, drawing from my experience in both education and engineering.
      </h2>
      <h3 className="intro-contact">
        <span>Get in touch 👉🏿</span>{" "}
        <span>
          <a
            href="mailto:shavonharrisdev@gmail.com"
            className="highlight-link"
          >
            shavonharrisdev@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Header;
