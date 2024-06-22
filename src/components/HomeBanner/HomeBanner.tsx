import React from "react";
import "./HomeBanner.css";

const HomeBanner: React.FC = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerText">
        <div className="leftColumn">
          <h1 className="bannerName">Lorna Armstrong</h1>
          <p className="tagline">(she / her)</p>
        </div>
        <div className="rightColumn">
          <img src="src/assets/images/laptop.png" alt="Laptop" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
