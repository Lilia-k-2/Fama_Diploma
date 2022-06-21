import React, {useState} from 'react'
import fama_logo from '../../assets/logo_FAMA_vector(2).svg';
import styled from 'styled-components';
import './Navbar.css'
import fama_telephone from '../../assets/telephone.png';
const StyledLogoImageWrapper = styled.div`
   
    
    
`
const StyledNavbarWrapper = styled.div`
    
    
    
`

const Navbar = () => {
   

    return (
        <div className='navbar'>
            <div className="container">
                <StyledLogoImageWrapper></StyledLogoImageWrapper>
                <StyledLogoImageWrapper></StyledLogoImageWrapper>
                <StyledLogoImageWrapper></StyledLogoImageWrapper>
                <StyledLogoImageWrapper>
                <a href='/'><img src={fama_logo} /></a>
                </StyledLogoImageWrapper>
                
                <StyledNavbarWrapper>
                    <li className="nav-item">
                    
                        <a href='/'><img src = {fama_telephone}  /></a>
                        <a href="/">+38 (044) 390 16 10</a>
                    </li>
                    <li className="nav-item">
        
                        <a href='/'><img src = {fama_telephone} /></a>  
                        <a href="/">+38 (067) 829 40 29</a>

                    </li> 
                </StyledNavbarWrapper>
                     
                      
                
               
            </div>

        </div>
    )
}

export default Navbar
