import React from "react";

const Header = () => {
  return (
    <header className="intro">
      <h1 className="intro-hello">
        Hi! <span className="emoji">✨</span>
      </h1>
      <h2 className="intro-tagline">
      I'm <span class="name">Shavon Harris</span>, I'm a full-stack engineer who builds products around real user needs and real constraints. 
    I came to tech from education, so I care about systems that actually make sense to people.
    Feel free to reach out if you're working on something interesting, or just want to say hello.
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
