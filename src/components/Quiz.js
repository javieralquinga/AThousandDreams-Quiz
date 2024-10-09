import React, { useState, useEffect } from "react";
import quizData from "../quizData";
import Question from "./Question";
import FinalForm from "./FinalForm";
import Header from "./Header";
import Intro from "./Intro";
import { isMobile } from "react-device-detect";
import "../css/quiz.css";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [finalType, setFinalType] = useState("Dreamer");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [onboarding, setOnboarding] = useState(false);
  const [isShaumbra, setIsShaumbra] = useState(false);

  useEffect(() => {
    async function sendData() {
      if (isValid) {
        const datetime = new Date();
        const data = {
          email: email.toLowerCase(),
          fullName: fullName,
          country: selectedCountry,
          dateTime: datetime,
          mobileDevice: isMobile,
          dreamerType: finalType,
          answers: answers,
        };

        let url = process.env.REACT_APP_API_URL;

        try {                  
          const response = await fetch( url + '/quizes', { 
            method: 'POST',            
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `ApiKey ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            console.log('Data sent successfully');            
          } else {
            console.error('Failed to send data');            
          }
        } catch (error) {
          console.error('Error sending data:', error);          
        }

        try {
          const emailSend = await fetch( url + '/send-results', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `ApiKey ${process.env.REACT_APP_API_KEY}`
            },
            body: JSON.stringify(data),
          });

          if (emailSend.ok) {
            console.log('Email sent successfully');            
          } else {
            console.error('Failed to send email');            
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }
    }
    sendData();
  }, [isValid, answers, email, finalType, fullName, selectedCountry]);

  useEffect(() => {
    if(answers.filter(a => a.id === 23).length > 0) {
      if(answers.filter(a => a.id === 23)[0].score.includes('Shaumbra')) {
        setIsShaumbra(true);
      }
    }    
  }, [answers]);

  const endQuiz = () => {
    const getHighestDreamerType = (scores) => {
      const dreamerTypes = [
        "Potential Dreamer",
        "Classic Dreamer",
        "Tormented Dreamer",
        "Networking Dreamer",
        "Dream Traveler",
        "Dream Time Traveler",
        "Dream Explorer",
        "Life Dreamer",
        "Crystalline Dreamer",
        "Divine Dreamer",
      ];
      let highestDreamer = dreamerTypes[0];
      let highestScore = scores[highestDreamer] || 0;

      for (let i = 1; i < dreamerTypes.length; i++) {
        const dreamer = dreamerTypes[i];
        const score = scores[dreamer] || 0;

        if (score > highestScore) {
          highestDreamer = dreamer;
          highestScore = score;
        } else if (score === highestScore) {
          const dreamerIndex = dreamerTypes.indexOf(dreamer);
          const highestDreamerIndex = dreamerTypes.indexOf(highestDreamer);
          if (dreamerIndex < highestDreamerIndex) {
            highestDreamer = dreamer;
          }
        }
      }

      return highestDreamer;
    };

    const result = {};
    answers.forEach((answer) => {
      answer.score.forEach((type) => {
        if (result[type]) {
          result[type] += 1;
        } else {
          result[type] = 1;
        }
      });
    });

    const highestDreamerType = getHighestDreamerType(result);
    setFinalType(highestDreamerType);
  };

  const handleAnswer = (answer) => {
    let newAnswer = { id: quizData[currentQuestion].id, answer };
    let score = new Set();

    answer.selectedOptions.forEach((option) => {
      quizData[currentQuestion].options[option].forEach((element) =>
        score.add(element)
      );
    });
    newAnswer = { ...newAnswer, score: Array.from(score) };

    if (answers.findIndex((answer) => answer.id === newAnswer.id) !== -1) {
      setAnswers([
        ...answers.filter((answer) => answer.id !== newAnswer.id),
        newAnswer,
      ]);
    } else {
      setAnswers([...answers, newAnswer]);
    }
  };

  const handleNext = (selectedOptions, optionalAnswer) => {    
    handleAnswer({ selectedOptions, optionalResponse: optionalAnswer });
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      endQuiz();
      setCurrentQuestion(nextQuestion);
      setShowScore(true);
    }
  };

  const handlePrev = () => {
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
    }
  };

  return (
    <div>
      {onboarding ? (
        <div className={`quiz-container  ${isValid ? "final" : ""}`}>
        <Header />
        {showScore ? (
          <>
            <FinalForm
              type={finalType}
              isValid={isValid}
              setIsValid={setIsValid}
              email={email}
              setEmail={setEmail}
              fullName={fullName}
              setFullName={setFullName}
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              isShaumbra={isShaumbra}
            />
          </>          
        ) : (
          <>            
            <Question
              type={quizData[currentQuestion].type}
              question={quizData[currentQuestion].question}
              questionBrackets={quizData[currentQuestion].brackets}
              options={quizData[currentQuestion].options}
              optional={quizData[currentQuestion].optional}
              image={quizData[currentQuestion].image}
              handleAnswer={handleAnswer}
              currentQuestion={currentQuestion}
              totalQuestions={quizData.length}
              handleNext={handleNext}
              handlePrev={handlePrev}
              optionalQuestion={quizData[currentQuestion].optional?.question}
              finalQuestion={
                quizData[currentQuestion].finalQuestion ? true : false
              }
              quizLength={quizData.length}
              optionsColumns={quizData[currentQuestion].columns}
              shortQuestion={quizData[currentQuestion].shortQuestion}
            />
          </>
        )}
      </div>
      ): (
        <Intro onboarding={onboarding} setOnboarding={setOnboarding} />
      )}
    </div>
  );
}

export default Quiz;
