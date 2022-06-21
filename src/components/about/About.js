import React from 'react'
import './About.css';
import fama_background from '../../assets/background-presents.png';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';





const About = ({onQuizStart}) => {
    return (
        <>
            <div className='about'>
                <div className="about-text">
                    
                    <h1>Давай спробуємо підібрати найкращий подарунок.</h1>
                        <p>Дай відповідь на декілька запитань та отримай ідеальну підбірку подарунків. </p>
                        
                        <div className="btn-group">
                            
                            <button className="btn" onClick={onQuizStart}>Почати тест</button>
                        </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}


export default About
