import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../Utils/Constants";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const isSearch=useSelector((state)=>state.gpt.geminiSuggestions)
  console.log(isSearch)
  return (
    <div>
      <div className="absolute -z-10">
        <img  className="w-screen h-screen object-cover" src={BG_URL} alt="logo"/>
      </div>
      <GptSearchBar />
      {isSearch.length!==0?(
      <GptMovieSuggestions />
      ):(undefined)}
    </div>
  );
};

export default GptSearch;
