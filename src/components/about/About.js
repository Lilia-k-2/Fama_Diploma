import React from 'react'
import './About.css';
import Footer from '../footer/Footer';

const About = ({onQuizStart, onQuizError}) => {
    return (
        <>
            <div className='about'>
                <div className="about-text">
                    
                    <h1>Давай спробуємо підібрати найкращий подарунок.</h1>
                        <p>Дай відповідь на декілька запитань та отримай ідеальну підбірку подарунків. </p>
                        
                        <div className="btn-group">
                            
                            <button className="btn" onClick={onQuizStart}>Почати тест</button>
                            <button className="btn-error" onClick={onQuizError}>404</button>
                        </div>
                    
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default About
