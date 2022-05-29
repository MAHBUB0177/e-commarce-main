
import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Components/Review/Review';
// import Inventory from './Components/Inventory/Inventorylist';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Price from './Components/price/Price';
import Ship from './Components/Ship/Ship';
import Login from './Components/Login/Login';
import PrivetRoute from './Components/PrivateRoute/PrivetRoute';
import Inventory from './Components/Inventory/Inventory';

export const UserContext = createContext();



const App = () => {
  const [logedInUser, setLogedInUser] = useState({});
  return (
    <UserContext.Provider value={[logedInUser, setLogedInUser]}>
      {/* <h4>email:{logedInUser.email}</h4> */}
     
      <Router>
      <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <PrivetRoute path="/inventory">
            <Inventory></Inventory>
          </PrivetRoute>
          <Route path="/review">
            <Review />
          </Route>

          <PrivetRoute path="/ship">
            <Ship />
          </PrivetRoute>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/product/:productkey">
            <ProductDetails />
          </Route>

          <Route path="/price/:pricekey">
            <Price />
          </Route>

          {/* <Route path="/">
            <Shop></Shop>
          </Route> */}

          <Route path="/*">
            <NotFound></NotFound>
          </Route>




        </Switch>


      </Router>



    </ UserContext.Provider>





  );
};

export default App;


