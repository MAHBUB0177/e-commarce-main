import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
 firebase.initializeApp(firebaseConfig);
}



export const handleGoogleSignIn = () => {
 var provider = new firebase.auth.GoogleAuthProvider();
 return firebase.auth().signInWithPopup(provider)
  .then(res => {
    console.log(res)


   const { email, name, picture } = res.additionalUserInfo.profile;
   const signedInUser = {
    isLogIn: 'true',
    name: name,
    email: email,
    photo: picture,
    success:true,

   }
   return signedInUser
   // const {email,name,given_name}=res.profile;
   console.log(res.additionalUserInfo.profile.email)
  })
  .catch(err => {
   console.log(err)

  })
};


export const handleFbSignIn = () => {
 var fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(fbProvider)
  .then((result) => {
   // The signed-in user info.
   const user = result.user;
   user.success=true;
   return user;
   // console.log(user)
  })
  .catch((error) => {
   console.log(error)

  })

}



export const handelSignOut = () => {
 console.log('ok')
 return firebase.auth().signOut()
  .then(res => {
   const signedOut = {
    isLogIn: 'false',
    name: '',
    email: '',
    password: '',
    photo: " ",
    error: '',
    success: false

   }
   return signedOut
  })
  .catch(err => {

  })
}

export const createUserWithEmailAndPassword = (name,email,password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(res => {
   console.log(res)
   const newUserInfo = res.user;
   newUserInfo.error=''
   newUserInfo.success = true;
   
   updateName(name)
   return newUserInfo;

  })
  .catch(error => {
   console.log(error)
   const newUserInfo = {  };
   newUserInfo.error = error.message;
   newUserInfo.success=false;
   return newUserInfo;
  })
}



export const signInWithEmailAndPassword = (email,password) => {
 return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res => {
   // console.log(res)
   const newUserInfo = res.user;
   newUserInfo.error = "";
   newUserInfo.success = 'true';
  return newUserInfo;

   console.log('sign in user info', email)

  })
  .catch(error => {
   const newUserInfo = {  };
   newUserInfo.error = error.message;
   return newUserInfo;


  })
}



function updateName(name) {
 const user = firebase.auth().currentUser;
 // console.log(user)
 user.updateProfile({
  displayName: name
 })
  .then(res => {
   console.log("user name update successfuly", res)
  })
  .catch(error => {
   console.log(error)
  })
}

