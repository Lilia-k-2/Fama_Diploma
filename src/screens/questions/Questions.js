import React from 'react'
import styled from 'styled-components';

const getQuestionsObject = async () => {
    try {
        let response = await fetch('./public/Questions.json');
        let responseJSON = await response.json();
        return responseJSON;
    } catch(error) {
        console.error(error);
    }
}

const Questions = () => {
    console.log(getQuestionsObject());
    return <>Questions</>
}

export default Questions
