import React from "react";

const Header = () => {
  return (
    <header className="intro">
      <h1 className="intro-hello">
        Hi! <span className="emoji">✨</span>
      </h1>
      <h2 className="intro-tagline">
      I'm <span class="name">Shavon Harris</span>, a software engineer from Chicago. I love building useful programs, accessible web apps, and everything in between.
      </h2>
      <h3 className="intro-contact">
        <span>Get in touch 👉🏿</span>{" "}
        <span>
          <a
            href="mailto:shavonharris9114@gmail.com"
            className="highlight-link"
          >
            shavonharris9114@gmail.com
          </a>
        </span>
      </h3>
    </header>
  );
};

export default Header;