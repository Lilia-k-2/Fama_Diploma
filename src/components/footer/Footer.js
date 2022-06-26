import React from 'react'
import './Footer.css';
import fama_telephone from '../../assets/telephone.png';
import fama_mail from '../../assets/mail.png';
import fama_facebook from '../../assets/facebook.png';
import fama_instagram from '../../assets/instagram.png';
import fama_youtube from '../../assets/youtube.png';
import fama_twitter from '../../assets/twitter.png';
import fama_telegram from '../../assets/telegram.png';
import fama_viber from '../../assets/viber.png';
import fama_whatsapp from '../../assets/whatsapp.png';
import styled from 'styled-components';

const StyledGroupPhotoWrapper = styled.div`
    & img {
       
        width: 20px;
        height: 100%;
        margin-right: 10px;    
    }
`
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                    <div className="col">
                        <StyledGroupPhotoWrapper>
                                <img src = {fama_telephone} />  <h4>0 800 33 46 76</h4> 
                                
                        </StyledGroupPhotoWrapper>
                        <StyledGroupPhotoWrapper>
                                <img src = {fama_telephone} />  <h4>+38 (044) 390 16 10</h4> 
                                
                        </StyledGroupPhotoWrapper>
                        <StyledGroupPhotoWrapper>
                                <img src = {fama_telephone} />  <h4>+38 (067) 829 40 29</h4> 
                                
                        </StyledGroupPhotoWrapper>
                        
                    </div>

                    <div className="col">
                        <StyledGroupPhotoWrapper>
                            <img src = {fama_mail}/>
                            <h4>info@fama-presents.com.ua</h4>
                        </StyledGroupPhotoWrapper>

                        <StyledGroupPhotoWrapper>
                            <img src = {fama_mail} />
                            <h4>me@fama-presents.com.ua</h4>
                        </StyledGroupPhotoWrapper>
                    
                    </div>
                    
                    <div className="col">
                        <h4>Інтернет-магазин Fama Presents</h4>
                        <p>Вул.О.Гончара 52 м.Київ, Україна</p>
                    </div>
                    <div className="col">
                        <h4>Ми в соціальних мережах:</h4>
                        <StyledGroupPhotoWrapper>
                            <img src = {fama_facebook} />
                            <img src = {fama_instagram} />
                            <img src = {fama_youtube} />
                            <img src = {fama_twitter} />
                            <img src = {fama_telegram} />
                            <img src = {fama_viber} />
                            <img src = {fama_whatsapp} />
                        </StyledGroupPhotoWrapper>
                           
                    </div>
                  
            </div>
            <div className='secondFooter'>
                <div className ='scontainer'>
                    <div className='col'>
                    
                        <h5>Інтернет-магазин елітних подарунків. Подарунки для чоловіків. Подарунки для жінок. VIP подарунки.</h5>
 
                    </div>
                </div>

            </div>
        </div>
        
    )
}

export default Footer
