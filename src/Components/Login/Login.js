import React, { useContext } from 'react';

import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { createUserWithEmailAndPassword, handelSignOut, handleFbSignIn, handleGoogleSignIn, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';


function Login() {
  const [newUser, setNewUser] = useState(false);

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [logedInUser, setLogedInUser] = useContext(UserContext);

  const [user, setUser] = useState({
    isLogIn: 'false',
    name: "",
    email: '',
    photo: "",
    error: '',
    success: '',

  })
  initializeLoginFramework();

  const GoogleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        setUser(res);
        setLogedInUser(res);
        history.replace(from);

      })

  }

  const SignOut = () => {
    handelSignOut()
      .then(res => {
        setUser(res)
        setLogedInUser(res);

      })
  }

  const FbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        setUser(res);
        setLogedInUser(res);
        history.replace(from);
      })
  }







  const handelcahnge = (event) => {
    // console.log(event.target.value)

    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);

    }
    if (event.target.name === "password") {
      const passValidate = event.target.value.length > 8;
      const isPassVlidate = /\d{1}/.test(event.target.value)
      isFieldValid = passValidate && isPassVlidate;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo)

    }

  }

  const formSubmit = (e) => {

    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name,user.email,user.password)
        .then(res => {
          setUser(res);
          setLogedInUser(res);
          history.replace(from)

        })

    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email,user.password)
        .then(res => {
          setUser(res);
          setLogedInUser(res);
          history.replace(from)

        })


    }
    e.preventDefault();

  }








  let divStyle = {
    backgroundColor: 'gray',
    width: '800px',
    textAlign: 'center',
    float: 'left',
    marginLeft: '250px'
  }

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "10px" }}>
      {/* <button onClick={handleSignIn}>SignIn</button> */}
      {/* {
        user.isLogIn ? <button onClick={SignOut}>signOut</button> : <button onClick={handleSignIn}>SignIn</button>

      }  */}
      <br />

      <button onClick={GoogleSignIn} style={{ backgroundColor: 'rgb(140,119,169)' }}>SignIn with google</button>
      <br />
      <button onClick={FbSignIn} style={{ marginTop: '5px', backgroundColor: 'rgb(127,160,160)' }}>login with facebook</button>

      {
        user.isLogIn && <div>
          <h2>welcome,{user.name}</h2>
          <img src={user.photo} alt="" />
        </div>
      }

      <div style={divStyle}>
        <h1>welcome to authentication page</h1>
        <p>email:{user.email}</p>
        <p>password:{user.password}</p>
        
        <form onSubmit={formSubmit}>
          <div >
            <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} />
            <label htmlFor="newUser">New User Sign Up</label>
            <br />
            {newUser && <input type="text" name="username" placeholder="username" />}
            <br />
            <input type="email" onBlur={handelcahnge} name="email" placeholder="email" required />
            <br />
            <input type="password" name="password" onBlur={handelcahnge} placeholder="password" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input>
            <br />
            <input type="submit" value="submit" style={{ backgroundColor: '' }}></input>
          </div>
        </form>
        <p style={{ color: 'tomato', fontSize: '20px' }}>{user.error}</p>
        {
          user.success && <p style={{ color: 'green', fontSize: '20px' }}>user {newUser ? 'created' : 'Logged in'} successfully</p>
        }
      </div>
    </div>
  );
}

export default Login;



