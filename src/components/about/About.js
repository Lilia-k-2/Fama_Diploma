import React from 'react'
import './About.css';
import fama_background from '../../assets/background-presents.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledBackgroundImageWrapper = styled.div`
    & img {
        position: absolute;
        width: 100%;
        height: 120%;
        object-fit: cover;
        z-index: -1;
        right:0px;
        left:0px;
        top:10px;
    }
    
`

const About = ({onVoteStart}) => {
    return (
        <div className='about'>
            <div className="about-text">
                <StyledBackgroundImageWrapper>
                    <img src={fama_background} />
                </StyledBackgroundImageWrapper>
                
                    <h1>Давай спробуємо підібрати найкращий подарунок.</h1>
                    <p>Дай відповідь на декілька запитань та отримай ідеальну підбірку подарунків. </p>
                    <div className="btn-group">
                        {/* <button className="btn" onClick={onVoteStart}>Почати тест</button> */}
                        <Link className="btn" to="/questions">Почати тест</Link>
                    </div>
                
            </div>
        </div>
    )
}

export default About
