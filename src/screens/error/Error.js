import React from 'react'
import '../error/Error.css'

// onClick={onQuizStart}

const Error = ({onQuizAbout}) => {
    return (
        <>
            <div className='error'>
                <div className="error-text">
                    <p>Щось пішло не так. Сторінка не працює</p>

                </div>
                <div className="error-button">
                            
                    <button className="errorbtn" onClick={onQuizAbout}>До головної</button>
                </div> 
                    
                
            </div>
        
        </>
    )
}

export default Error