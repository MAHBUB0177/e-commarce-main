import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = (props) => {
  let cart = props.cart;
  const showCart = props.showCart;
  const total = cart.reduce((sum, product) => sum + product.price, 0)
  // reduce fun er 2ta paramtr 2nd params tar paromvik value exmp:0 ar 1st params 1ta arrow fun ba call back fun
  // ai arrow fun er abr 2ta params 1sta tr parmovik je value ase ter akta name ar 2nd ta itteration ba kar opr loop chalabo ter akta name
  //trpor arrow sign die tr vitore ja korbo 

  // let total = 0;
  // for (let i = 0; i < cart.length; i++) {
  //   let product = cart[i];
  //   total = total + product.price;

  // }

  let shipping = 0;
  if (total > 35) {
    shipping = 0
  }
  else if (total > 15) {
    shipping = 4.99;
  }
  else if (total > 0) {
    shipping = 12.99;
  }

  const tax = total / 10;

  const formatNumber = (num) => {
    const precision = num.toFixed(2);
    return (Number(precision))
  }
  return (
    <div className="cart">
      <h1 className="text-danger">Order Summary</h1>
      <h4>Items Order:{cart.length}</h4>
      <p>Product price:{formatNumber(total)}</p>
      <p>Shipping Cost:{formatNumber(shipping)}</p>
      <p>Tax & Vat:{formatNumber(tax)}</p>
      <p> Total Price:{formatNumber(total + shipping + tax)}</p>


      {showCart ? <Link to="/review">
        <button className="main">Order Review</button> </Link> : <Link to="/ship"><button style={{ backgroundColor: 'goldenrod', borderRadius: '5px' }} className="btn-regular">Proceed to Shipping</button></Link>}

    </div>
  );
};

export default Cart;