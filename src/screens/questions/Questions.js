import React, { useState, useEffect, useRef } from 'react';
import '../questions/Questions.css';





const Questions = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, onQuizEnd }) => {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if(error) {
      setError('');
    }
  }
  
  const nextClickHandler = (e) => {
    if(selected === '') {
      return setError('Please select one option!');
    }
    onAnswerUpdate(prevState => {
      console.log(prevState);
      return [...prevState, { q: data.question, a: selected }]
    });
    setSelected('');
    if(activeQuestion < numberOfQuestions - 1) {
      console.log(data);
    
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  }

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h2 className="mb-5">{data.question}</h2>
          {/* <img className="background" src={fama_back}></img> */}
          <div className="control" ref={radiosWrapper}>
            {data.answers.map((answer, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={answer}  onChange={changeHandler} />
                {answer}
              </label>
            ))}
          </div>
        
          
       
          
        </div>
       
      </div>
      <div className = "group-button">
          <button className="button_result" onClick={onQuizEnd}>Перейти на сайт</button>
            
          <button className="button_next" onClick={nextClickHandler}>Далі</button>
      </div>
      <div className = "group-images">
          <img className="img_style" src={data.url}></img>
          
      </div>
    </div>
      
  

    
  );
}





export default Questions
