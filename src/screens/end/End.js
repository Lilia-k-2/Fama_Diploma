import React from 'react'
import '../end/End.css'
import Footer from '../../components/footer/Footer';
import product_card from '../../assets/product_data'



const End = () => {
  console.log(product_card);
    const listItems = product_card.map((item) =>
      <div className="card" key={item.id}>
          <div className="card_img">
              <img src={item.thumb} />
          </div>
          <div className="card_header">
              
              <p>{item.description}</p>
              <p className="price">{item.price}<span>{item.currency}</span></p>
              <div className="btn">Придбати</div>
              
          </div>
      
      </div>
      
    );
  

  return (
    <>
    
      <div className="main_content">
          
          {listItems}
        
      </div>
    
    <Footer></Footer>
    </>
    
  )};
  


export default End;