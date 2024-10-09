import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";
import countries from "../countries";
import jsonp from 'jsonp';
import "../css/final.css";
import "../css/register-form.css";
import Results from "./Results";
import { useNavigate } from "react-router-dom";

const countryOptions = countries.map((country) => ({
  value: country.code,
  label: country.name,
}));

const customStyles = {
  control: provided => {
    return {
      ...provided,
      width: "100%",
      padding: "0px 12px",
      height: "4vw",
      color: "black",
      borderRadius: "0",
      border: "none"
    };
  },
  placeholder: provided => {
    return {
      ...provided,
      color: "black",
    }
  },
};

function FinalForm(props) {
  const {
    type,
    isValid,
    setIsValid,
    email,
    setEmail,
    fullName,
    setFullName,
    selectedCountry,
    setSelectedCountry,
    isShaumbra
  } = props;  
  const [displayError, setDisplayError] = useState(false);

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleCheckboxChange = (event) => {
    setDisplayError(false);
  }

  const validateForm = () => {
    let isValid = true;
  
    if (fullName.trim() === "") isValid = false;
  
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/))
      isValid = false;
  
    if (!selectedCountry) isValid = false;
  
    if (!document.querySelector('input[name="acceptTerms"]').checked) {
      isValid = false;
      setDisplayError(true);
    }
    
    setIsValid(isValid);
    return isValid;
  };  

  const subscribeToMailchimp = (email, fullName, country) => {     
    const endpoint = process.env.REACT_APP_MAILCHIMP_ENDPOINT;
    const data = {
      u: process.env.REACT_APP_MAILCHIMP_U,
      id: process.env.REACT_APP_MAILCHIMP_ID,
      f_id: isShaumbra ? process.env.REACT_APP_MAILCHIMP_F_ID_SHAUMBRA : process.env.REACT_APP_MAILCHIMP_F_ID,
      EMAIL: email,
      FNAME: fullName,
      COUNTRY: country,
      tags: isShaumbra ? process.env.REACT_APP_MAILCHIMP_TAGS_SHAUMBRA : process.env.REACT_APP_MAILCHIMP_TAGS
    };
  
    const queryParams = Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  
    const url = `${endpoint}?${queryParams}`;
  
    return new Promise((resolve, reject) => {
      jsonp(url, { param: 'c' }, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
  

  const handleFormSubmit = async () => {
    if (validateForm()) {
      try {        
        const response = await subscribeToMailchimp(email, fullName, selectedCountry.label);
        // Here you can handle the response from Mailchimp.
        console.log('Mailchimp response:', response);
      } catch (error) {
        // Handle the error in case of failure.
        console.error('Subscription error:', error);
      }           
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if(isValid){
      navigate(`/profile/${type}`, {state: { key: type}})
    }
  }, [isValid]);

  return (
    <div className={`final-message ${isValid ? "dreamer-type" : ""}`}>
      {isValid && (
        <Results type={type} />
      )}
      {!isValid && (
        <div className="register-form">
          <div className="register-form__header">
            <img
              src="./images/ATD-LogoQuiz.png"
              alt="Quiz Logo"
              className="register-form__logo"
            />
            <h2 className="register-form__title">
              You have completed The Dreamer Quiz.
            </h2>
            <h3 className="register-form__subtitle">
              Now, get your results and dream bigger!
            </h3>
          </div>
          <form className="register-form__container">
            <div className="register-form__input">
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="register-form__input">
              <Select
                name="country"
                className="select-input"
                placeholder="Select country"
                options={countryOptions}
                styles={customStyles}
                onChange={handleCountryChange}
                required
              />
            </div>
            <div className="register-form__input">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleEmailChange}
                required
              />
            </div>            
            <button onClick={handleFormSubmit} className="btn">
              DISCOVER YOUR PROFILE
            </button>
            <div className="register-form__disclaimer">              
              <input
                type="checkbox"                
                name="acceptTerms"
                id="TCcheckbox"
                onChange={handleCheckboxChange}
                required
              />
              <label for="TCcheckbox"></label>
              <span>
                I have read and accepted the{" "}
                <a
                  href="https://athousanddreams.world/terms-and-conditions.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Terms and Conditions
                </a>
              </span>
            </div>
            {displayError ? (
              <p className="error-message">
                You must accept the Terms and Conditions to continue.
              </p>
            ) : null}
          </form>
        </div>
      )}
    </div>
  );
}

export default FinalForm;
