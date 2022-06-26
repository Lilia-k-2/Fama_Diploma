import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Questions from './screens/questions/Questions';
import quizData from '../src/assets/Questions.json'
import End from './screens/end/End';
import Error from './screens/error/Error';

const App = () => {
const [step, setStep] = useState(1);
const [activeQuestion, setActiveQuestion] = useState(0);
const [answers, setAnswers] = useState([]);

const quizStartHandler = () => {
  setStep(2);
}
const quizEndHandler = () => {
  setStep(3);
}
const quizErrorHandler = () => {
  console.log('4');
  setStep(4);
}
const quizAboutHandler = () => {
  console.log('5');
  setStep(1);
}

  return (
    <div className ="App">
      <Navbar />
      {step === 1 && <About 
      onQuizStart={quizStartHandler}
      onQuizError={quizErrorHandler}
      />}
      
      {step === 2 && <Questions 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
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
