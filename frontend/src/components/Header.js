import React from "react";

const Header = () => {
  return (
    <header className="intro">
      <h1 className="intro-hello">
        Hi! <span className="emoji">✨</span>
      </h1>
      <h2 className="intro-tagline">
      I'm <span class="name">Shavon Harris</span>, a software engineer from Chicago. Drawing from my background in education, I build accessible, human-centered applications that make a difference. I'm passionate about creating technology that helps people thrive.
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
