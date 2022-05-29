import React from 'react'
import './reviewdetails.css'
const ReviewDetails = (props) => {
 console.log(props)
 const {name,quantity,img,key}=props.product;
 const handleRemove=props.handleRemove;
const review={
 borderBottom:"1px solid gray",
 marginLeft:"200px",
}
 return (
  <div className="review" style={review}>
   <img src={img} alt="" />
   <h4 className="product-name">{name}</h4>
   <br/>
   <p>Quantity:{quantity}</p>
   <br/>
   <button onClick={()=>handleRemove(key)} className="main-button"> Remove</button>

   
  </div>
 );
};

export default ReviewDetails;