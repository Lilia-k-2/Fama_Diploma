import React, { useEffect, useState } from 'react'
import '../end/End.css'
import Footer from '../../components/footer/Footer';
import product_card from '../../assets/product_data'



const End = () => {
  // Default number of product items
  // const [numberOfItems, setNumberOfItems] = useState(4);
  

  // console.log(product_card);

  const listItems = product_card.map((item) =>
      <div className="card_end" key={item.id}>
          <div className="card_img">
              <img src={item.thumb} />
          </div>
          <div className="card_header">
              <p>{item.description}</p>
              <p className="price">{item.price}<span>{item.currency}</span></p>
              <div className="button_end">Придбати</div>
          </div>
      </div>
    );

    // const handleNumberOfVisibleItems = () => {
    //   setNumberOfItems(numberOfItems + 4);
    // }

    // let listItems = listItemsAll.slice(0, numberOfItems);
    // useEffect(() => {
    //   const listItems = listItemsAll.slice(0, numberOfItems);
    // }, [numberOfItems]);
  

  return (
    <>
      <div className="main_content">
          {listItems}
      </div>
      {/* <button onClick={handleNumberOfVisibleItems}>Show More</button> */}
      <Footer></Footer>
    </>
  )};
  


export default End;