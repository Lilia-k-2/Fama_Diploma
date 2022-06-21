import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About'
import Questions from './screens/questions/Questions';
import quizData from '../src/assets/Questions.json'
import End from './screens/end/End';


const App = () => {
const [step, setStep] = useState(3);
const [activeQuestion, setActiveQuestion] = useState(0);
const [answers, setAnswers] = useState([]);

const quizStartHandler = () => {
  setStep(2);
}
const quizEndHandler = () => {
  setStep(3);
}







  return (
    <div className ="App">
      <Navbar />
     
      {step === 1 && <About onQuizStart={quizStartHandler} />}
      {step === 2 && <Questions 
        data={quizData.data[activeQuestion]}
        onAnswerUpdate={setAnswers}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
        onSetStep={setStep}
      />}
       {step === 3 && <End onQuizEnd={quizEndHandler} 
      
       />}
     
      
    </div>
  );
}

export default App;
