import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate.js";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage,setErrorMessage] = useState("")
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const error=checkValidData(email.current.value, password.current.value);
    setErrorMessage (error)

  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_large.jpg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90">
        <h2 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn ? (
          <input
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
          onClick={(e)=>handleButtonClick(e)}
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
