import React from "react";

function Header() {
  const backgroundStyle = {
    backgroundImage: window.innerWidth > 768 ? `url(${process.env.PUBLIC_URL + "/images/header-background.svg"})` : `url(${process.env.PUBLIC_URL + "/images/Header-mobile.svg"})`,    
  }

  return (
    <div
      className="atd-header"
      style={backgroundStyle}
    >
      <img
        src="./images/deco-1.png"
        role="presentation"
        className="atd-header__deco-1"
        alt=""
      />
      <img
        src="./images/deco-2.png"
        role="presentation"
        className="atd-header__deco-2"
        alt=""
      />
      <img
        src="./images/header-pattern-desktop.png"
        role="presentation"
        className="atd-header__deco-3"
        alt=""
      />
      <div className="atd-header__logo">
        <img src="./images/logo-header.svg" alt="" />
      </div>
    </div>
  );
}

export default Header;
