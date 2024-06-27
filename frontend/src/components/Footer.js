import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright">
        <div className="top">
          <span>Created by </span>
        </div>
        <div className="bottom">
        <span>Shavon Harris 🤟🏿</span> <span> 2022</span>
        </div>
      </div>

      <div className="footer-links">
        <a
        href="mailto:shavonharris9114@gmail.com"
          title="email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">email</span>
        </a>
        <a
           href="https://github.com/ShavonHarris-Dev"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">Github</span>
        </a>
            <a
           href="https://dev.to/shavonharrisdev"
          title="dev.to"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">Tech Blog</span>
        </a>
        <a
         href="https://www.linkedin.com/in/shavonharris-dev/"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">linkedin</span>
        </a>
        <a
         href="https://twitter.com/ShavonH_Dev"
          title="twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text">twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
