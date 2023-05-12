import React from "react";
import HeroBackground from "../../assets/hero-bg.png";

function Hero() {
  return (
    <div className="px-8">
      <div style={{ backgroundImage: `url(${HeroBackground})` }}></div>
      <div></div>
    </div>
  );
}

export default Hero;
