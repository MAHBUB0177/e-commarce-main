import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const Inventorylist = ({children,...rest}) => {
 const [logedInUser, setLogedInUser] = useContext(UserContext);
 return (
  <Route
    {...rest}
    render={({ location }) =>
    logedInUser.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  />
);

};

export default Inventorylist;
