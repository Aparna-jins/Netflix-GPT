import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate.js";
import { auth } from "../Utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../Utils/userSlice.js";
import { USER_URL } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { BG_URL } from "../Utils/Constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  
  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          const user = userCredential.user;
        
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_URL,
          })
            .then(() => {
              
              const { uid, email, displayName, photoURL } = auth.currentUser;
              
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              
            })
            .catch((error) => {
            
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
    
      
        
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };
  return (
    <div>
      <Header location="login" />
      <div className="absolute">
        <img
          alt="background image"
          src={BG_URL}
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90">
        <h2 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn ? (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-5 w-full bg-gray-700"
          />
        ) : undefined}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-5 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-5 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold py-4 ">{errorMessage}</p>
        <button
          className="py-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={(e) => handleButtonClick(e)}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-sm my-10 cursor-pointer"
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
