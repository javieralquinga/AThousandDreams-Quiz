import React, { useState } from "react";
import "../css/intro.css";

function Intro({ onboarding, setOnboarding }) {
  const [visible, setVisible] = useState(true);

  const handleStart = () => {
    setVisible(false);
    setTimeout(() => {
      setOnboarding(true);
    }, 500);
  };

  return (
    <div className="intro">
      <div className={`intro__wrapper  ${visible ? "fade-in" : "fade-out"}`}>
        <div className="intro__header">
          <img
            src="./images/ATD-LogoQuiz.png"
            alt="Quiz Logo"
            className="intro__logo"
          />
          <h1 className="intro__message-title">The Dreamer Quiz</h1>
        </div>
        <div className="intro__message">
          <div className="intro__message-text">
            <p>
              Discover your personal dreaming profile and get some tips to
              derive meaning out of your dreams.
            </p>          
            <strong>May you dream your world!</strong>
          </div>
          <div className="intro__message-team">A Thousand Dreams' Team</div>
          <button className="btn start intro__btn" onClick={handleStart}>
            TAKE THE QUIZ
          </button>
          <div className="intro__message-footer">
            <strong>Length of Questionnaire:</strong>
            <br /> Approximately 15 minutes.
            <br />
            Your personal information is confidential.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
