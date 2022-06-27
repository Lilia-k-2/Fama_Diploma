import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Questions from './screens/questions/Questions';
import quizData from '../src/assets/Questions.json'
import End from './screens/end/End';
import Error from './screens/error/Error';

const App = () => {
const [step, setStep] = useState(3);
const [activeQuestion, setActiveQuestion] = useState(0);
const [relatedQuestion, setRelatedQuestion] = useState(false);
const [answers, setAnswers] = useState([]);

const quizStartHandler = () => {
  setStep(2);
}
const quizEndHandler = () => {
  setStep(3);
}
const quizErrorHandler = () => {
  setStep(4);
}
const quizAboutHandler = () => {
  setStep(1);
}

function getRelatedQuestion() {
  const result = quizData.data[activeQuestion].relatedQuestions.find( ({ questionType }) => { 
    return questionType === answers[activeQuestion]?.a 
  })
  if(result !== undefined) {
    return result;
  } else {
    setRelatedQuestion(false);
    setActiveQuestion(activeQuestion + 1);
    return null
  }
}

  return (
    <div className ="App">
      <Navbar />
      {step === 1 && <About 
      onQuizStart={quizStartHandler}
      onQuizError={quizErrorHandler}
      />}
      
      {step === 2 && <Questions 
        data={relatedQuestion ? getRelatedQuestion() : quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetRelatedQuestion={setRelatedQuestion}
        onSetStep={setStep}
        onQuizEnd={quizEndHandler}
      />}
       {step === 3 && <End />}
       {step === 4 && <Error 
       onQuizAbout={quizAboutHandler}
       />}
    </div>
  );
}

export default App;
