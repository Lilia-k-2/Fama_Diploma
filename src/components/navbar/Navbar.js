import React, {useState} from 'react'
import fama_logo from '../../assets/logo_FAMA_vector(2).svg';
import styled from 'styled-components';

import './Navbar.css'
import fama_telephone from '../../assets/telephone.png';
const StyledLogoImageWrapper = styled.div`
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    
    
`
const StyledNavbarWrapper = styled.div`
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    
    
`

const Navbar = () => {
   

    return (
        <div className='navbar'>
            <div className="container">
                <StyledLogoImageWrapper></StyledLogoImageWrapper>
                <StyledLogoImageWrapper></StyledLogoImageWrapper>
                <StyledLogoImageWrapper></StyledLogoImageWrapper>
                <StyledLogoImageWrapper>
                    <img src={fama_logo} />
                </StyledLogoImageWrapper>

                
            
                <StyledNavbarWrapper>
                    <li className="nav-item">
                    
                    <img src = {fama_telephone} /> 
                        <a href="/">+38 (044) 390 16 10</a>
                    </li>
                    <li className="nav-item">
        
                    <img src = {fama_telephone} />    
                    <a href="/">+38 (067) 829 40 29</a>

                    </li> 
                </StyledNavbarWrapper>
                     
                      
                
               
            </div>

            
            

         
            
        </div>
    )
}

export default Navbar
