import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
 const [logedInUser,setLogedInUser]=useContext(UserContext);

 const divclose=()=>{
  let urldata = document.getElementById('showdiv')

  if (urldata.style.display === 'none') {
      urldata.style.display = 'block';
  } else {
      urldata.style.display = 'none';
  }

 }
 return (
  <div className="header">
   <img src={logo} alt=""></img>
   <nav className="nav">
    <Link to="/shop">Shop</Link>
    <Link to="/order">Order</Link>
    <Link to="/review">Review</Link>
    <Link to="/ship">Ship</Link>
    <Link to="/inventory">Inventory</Link>
    <Link to="/login">Login</Link>
    
    <button style={{backgroundColor:'black',color:'white'}} onClick={()=>setLogedInUser({})}>LogOut</button>
    <button style={{backgroundColor:'black',color:'white'}}  onClick={divclose}>Toggle</button>
   </nav>


<div className='alert alert-success' id='showdiv' style={{display:'none'}}>

 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iusto iure rerum necessitatibus consequatur, quos facere labore corporis sapiente itaque saepe architecto vero deserunt repudiandae ab harum nisi nostrum minus.</p>
</div>
  </div>
 );
};

export default Header;