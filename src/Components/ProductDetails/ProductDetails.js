import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
 const{productkey}=useParams();
 const product=fakeData.find(pd=>pd.key ===productkey);

 return (
  <div>
   {/* <h1> {productkey}product details..</h1> */}
   <Product showAddToCart={false} product={product} />
   
  </div>
 );
};

export default ProductDetails;