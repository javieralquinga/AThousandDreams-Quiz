import React, { useState, useEffect } from "react";

function Question(props) {
  const {
    type,
    question,
    questionBrackets,
    options,
    image,
    currentQuestion,
    totalQuestions,
    handleNext,
    handlePrev,
    selected,
    optionalQuestion,
    finalQuestion,
    quizLength,
    optionsColumns,
    shortQuestion
  } = props;
  const [selectedOptions, setSelectedOptions] = useState(selected || []);
  const [optionsDisabled, setOptionsDisabled] = useState({});
  const [optionalAnswer, setOptionalAnswer] = useState("");
  const [fullOptionalAnswer, setFullOptionalAnswer] = useState("");
  const [visible, setVisible] = useState(false);
  const [otherOption, setOtherOption] = useState("");


  useEffect(() => {
    setOptionsDisabled(
      Object.keys(options).reduce((obj, option) => {
        obj[option] = false;
        return obj;
      }, {})
    );
  }, [options]);

  useEffect(() => {
    setVisible(true); // Mostrar la pregunta cuando se monta el componente
  }, [question]);

  useEffect(() => {
    setFullOptionalAnswer(selectedOptions.includes("Other") ? otherOption + " | " + optionalAnswer : optionalAnswer)
  }, [optionalAnswer, otherOption])

  const handleOptionChange = (event) => {
    const option = event.target.value;
    let newSelectedOptions = [];
    let newOptionsDisabled = {};

    if (
      (option === "None of the above" || option === "All of the above") &&
      selectedOptions.includes(option)
    ) {
      newSelectedOptions = [];
    } else if (
      option === "All of the above" ||
      option === "None of the above"
    ) {
      newSelectedOptions = [option];
      newOptionsDisabled = Object.keys(options).reduce((obj, key) => {
        if (key !== option) {
          obj[key] = true;
        }
        return obj;
      }, {});
    } else {
      if (type === "one selection") {
        newSelectedOptions = [option];
      } else if (type === "multiple selection") {
        if (selectedOptions.includes(option)) {
          newSelectedOptions = selectedOptions.filter(
            (selectedOption) => selectedOption !== option
          );
        } else {
          newSelectedOptions = [...selectedOptions, option];
        }
      }
    }

    setSelectedOptions(newSelectedOptions);
    setOptionsDisabled(newOptionsDisabled);
  };

  const handleOtherOptionChange = (event) => {
    setOtherOption(event.target.value)
  }

  const handleNextQuestion = () => {
    setVisible(false);
    setSelectedOptions([]);
    setOptionalAnswer("");
    setTimeout(() => {
      handleNext(selectedOptions, fullOptionalAnswer);
      window.scrollTo({
        top: 0,
      });
      setVisible(true); // Mostrar la siguiente pregunta después de un breve retraso
    }, 500);
    const isNoneOrAllSelected =
      selectedOptions.includes("None of the above") ||
      selectedOptions.includes("All of the above");
    if (isNoneOrAllSelected) {
      setOptionsDisabled(
        Object.keys(options).reduce((obj, key) => {
          obj[key] = true;
          return obj;
        }, {})
      );
    } else {
      setOptionsDisabled({});
    }
  };

  const handlePrevQuestion = () => {
    setVisible(false);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
      setSelectedOptions(selected || []);
      setOptionsDisabled(
        Object.keys(options).reduce((obj, key) => {
          obj[key] = false;
          return obj;
        }, {})
      );
      handlePrev();
      setVisible(true); // Mostrar la pregunta después de un breve retraso
    }, 500);
  };

  return (
    <>
      <div className="quiz__main-title">
        <div className='adorno-titulo'>
          <img
            src="../images/star.png"
          >
          </img>
        </div>
        <h1>The Dreamer Quiz</h1>
      </div>
      <div className={`question ${optionsColumns == 2 ? "long-question" : ""}`}>
        <div className={`question__text ${visible ? "fade-in" : "fade-out"} ${shortQuestion ? "short" : ""}`}>
          <div className="question__header">
            <h3 className="question__title">{question}</h3>
            {questionBrackets && (
              <div className="question__description"> {questionBrackets}</div>
            )}
          </div>
          {question.columns}

          <div
            className={`question__options-container ${optionsColumns === 2
              ? "question__options-container--two-cols"
              : ""
              } ${finalQuestion ? "final" : ""}`}
          >
            {options &&
              Object.keys(options).map((option, index) => {
                const isOptionSelected = selectedOptions.includes(option);
                const isOptionDisabled = optionsDisabled[option];
                return option === "Default" ? (
                  <label key={index}>
                    <input
                      type="radio"
                      name={`question${currentQuestion}`}
                      value={option}
                      checked={true}
                      style={{ display: "none" }}
                    />
                  </label>
                ) : (
                  <label
                    key={index}
                    className={`rad-label ${isOptionDisabled ? "disabled" : ""
                      }`}
                  >
                    <input
                      type={
                        type === "multiple selection" ? "checkbox" : "radio"
                      }
                      name={`question${currentQuestion}`}
                      className="rad-input"
                      value={option}
                      checked={isOptionSelected}
                      onChange={handleOptionChange}
                      disabled={isOptionDisabled}
                    />
                    <div
                      className={`rad-design ${type === "multiple selection" ? "multiple" : ""
                        }`}
                    ></div>
                    <div>{option === "Other" ? option + ":" : option}</div>
                    {option === "Other" ? (
                      <input
                        onChange={handleOtherOptionChange}
                        type="text"
                        disabled={!selectedOptions.includes("Other")}
                        className="question__other-option"
                      />
                    ) : null}
                  </label>
                );
              })}
            {optionalQuestion && (
              <div className={`question__form-group ${finalQuestion ? "final-question-group" : "field"}`}>
                <label
                  className="question__ form-label"
                  htmlFor={`optional-answer-${currentQuestion}`}
                >
                  {optionalQuestion}
                </label>
                {finalQuestion ? (
                  <textarea
                    className="final-question"
                    placeholder="Write your dream here..."
                    id={`optional-answer-${currentQuestion}`}
                    value={optionalAnswer}
                    onChange={(e) => setOptionalAnswer(e.target.value)}
                    rows="10"
                  ></textarea>
                ) : (
                  <input
                    className="question__form-field"
                    type="text"
                    id={`optional-answer-${currentQuestion}`}
                    value={optionalAnswer}
                    onChange={(e) => setOptionalAnswer(e.target.value)}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <div className={`question__image  ${visible ? "fade-in" : "fade-out"}`}>
          <img src={image} alt={question} />
        </div>
      </div>
      <div className="quiz__footer">
        <div className="quiz__footer-buttons">
          {currentQuestion > 0 && (
            <button
              className="prev quiz__footer-btn"
              onClick={handlePrevQuestion}
            >
              Back
            </button>
          )}
          <div></div>

          {!selectedOptions.includes("Other") && selectedOptions.length > 0 && currentQuestion < totalQuestions && (
            <button
              className="next quiz__footer-btn"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
          {selectedOptions.includes("Other") && otherOption !== "" && (
            <button
              className="next quiz__footer-btn"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
          {finalQuestion && (
            <button
              className="next quiz__footer-btn"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
        <div className="progress-bar bar">
          <div
            className="progress-bar progress"
            style={{ width: `${(currentQuestion * 100) / quizLength}%` }}
          >
            <img
              src="./images/Icons/Progress-marker.svg"
              alt=""
              className="progress-bar__image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
