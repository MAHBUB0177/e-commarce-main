import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

import ReviewDetails from '../ReviewDetails/ReviewDetails';
import Cart from '../Cart/Cart';
import { useHistory } from 'react-router';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';

const Review = () => {
 const [cart,setCart]=useState([])
 const history = useHistory();

 useEffect( ()=>{
  const saveCart = getDatabaseCart()
  console.log(saveCart,'mahabub save cart')
  const productkeys=Object.keys(saveCart)
  console.log(productkeys)
  
  const cartProduct=productkeys.map(key => {
   const product=fakeData.find(pd =>(pd.key === key));
   console.log(product)
   product.quantity=saveCart[key]
   return product;
  });
  setCart(cartProduct)


 },[]
 
 )


 const handleRemove=(key)=>{
  const newCart = cart.filter(product => product.key !== key);
  setCart(newCart);
  removeFromDb(key);
 }

//  const handleProceedToShipping = () => {
//   // setCart([]);
//   // clearTheCart();
//   history.push('/shipping');
// }

 return (
  <div className="shop-container">
    <div className="product-container">
    {
    cart.map(product=> <ReviewDetails 
      product={product} 
      key={product.key}
      handleRemove={handleRemove}
      />)
   }
    </div>
   
   
      <div className="cart-container">
                <Cart cart={cart} showCart={false}> 
                    {/* <button onClick={handleProceedToShipping} className="btn-regular">Proceed to Shipping</button> */}
                 </Cart>
            </div>
   
   
  </div>
 )
}

export default Review