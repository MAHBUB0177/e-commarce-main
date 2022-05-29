import React, { useState } from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
 console.log(props.product)
 
 const {name,img,seller,price,stock,key}=props.product;
 return (
  <div className="product">
  <div className="img">
   <img src={img}  alt="" />

  </div>
  <div className="product-name">
   <h1 style={{fontSize:'25px'}}>
     <Link to={"/product/"+key} > {name} </Link></h1>
   <br/>
  
   <h2 style={{color:"black",fontSize:'20px'}}>BY:{seller}</h2>
   <h2 style={{color:"black",fontSize:'20px'}}> <Link to={"/price/" +key}>price:{price}</Link></h2>
   
   <h2 style={{color:"black",fontSize:'20px'}}>Only:{stock} left in stok-order soon..</h2>
 
   
  { props.showAddToCart === true && <button className="main-button"
  onClick={() =>props.handelAddProduct(props.product)}
  ><FontAwesomeIcon icon={faShoppingCart} />
  add to cart </button>}


  </div>
  </div>
  
 )
};

export default Product;