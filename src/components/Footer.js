import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <div className="social-media">
          <div className="social-icon">
            <a
              href="https://www.tiktok.com/@athousanddreams144?_t=8dltV4N2sbN&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/Icons/social/tiktok.svg" alt="TikTok"></img>
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.youtube.com/channel/UCgHrOFInt9ns7Q6TpGmKP3g"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/Icons/social/youtube.svg" alt="Youtube"></img>
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.facebook.com/AThousandDreams144"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/Icons/social/facebook.svg" alt="Facebook"></img>
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.instagram.com/athousanddreams144/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="../images/Icons/social/instagram.svg"
                alt="Instagram"
              ></img>
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/company/a-thousand-dreams"
              target="_blank"
              rel="noreferrer"
            >
              <img src="../images/Icons/social/linkedin.svg" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
        <div>
          <span>
            A Thousand Dreams ©2023. <br className="jump"></br>All Rights
            Reserved.
          </span>
        </div>
      </div>
      <div className="footer-block">
        <a
          href="https://athousanddreams.world/main/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="footer-logo"
            src="../images/ATD-LogoHorizontalFondoAzul.svg.svg"
            alt="A Thousand Dreams"
          ></img>
        </a>
      </div>
      <div className="footer-block">
        <div className="tramado">
          <img
            src="../images/ATD-TramadoPuerta1-cropped.svg"
            alt="A Thousand Dreams"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default Footer;
