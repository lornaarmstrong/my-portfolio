import React from "react";
import "./HomeBanner.css";

import github from "../../assets/images/github-logo.png";
import linkedIn from "../../assets/images/linkedin_logo.png";

const HomeBanner: React.FC = () => {
  return (
    <div className="bannerContainer">
      <div className="leftColumn">
        <img src="src/assets/images/profile.png" alt="Laptop" width="800px" />
      </div>
      <div className="rightColumn">
        <h1 className="bannerName">Hello, I'm Lorna Armstrong</h1>
        <p className="tagline">( she / her )</p>
        <p>
          I'm a Software Engineer, with experience at Google and Microsoft. I
          have a BSc in Computer Science from the University of Edinburgh, and a
          particular interest in Natural Language Processing. I am a keen
          advocate for Diversity and Inclusion and I'm always looking for ways
          to get involved in making both the workplace and the world a more
          diverse and inclusive place.
        </p>
        <div className="button-container">
          <a
            href={"https://github.com/lornaarmstrong"}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src={github} alt="GitHub Button" className="social-logo" />
          </a>
          <a
            href={"https://www.linkedin.com/in/lornafarmstrong/"}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button"
          >
            <img src={linkedIn} alt="LinkedIn Button" className="social-logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
