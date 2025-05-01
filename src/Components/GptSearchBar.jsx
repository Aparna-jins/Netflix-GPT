import React, { useRef } from "react";
import { AI } from "../Utils/openai";
import { OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { getGeminiSuggestions } from "../Utils/gptSlice";

  const GptSearchBar = () => {
    const dispatch=useDispatch()
      const searchText=useRef(null)
      const getMovieSearch=async(movie)=>{
        const response=await fetch (`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,OPTIONS)
        const json=await response.json()
        const gptResults=json.results.filter(
          search => (search.title.toLowerCase().trim()==movie.toLowerCase().trim())&&search.backdrop_path!==null)
        
        return gptResults
        
      }
      const handleSearchClick=async()=>{
          console.log(searchText.current.value)
      
      const getQuery="Act as a movie recommendation system and suggest movie for query:"+searchText.current.value+". Only give me 10 movies comma seperated"
      const Response=await AI.models.generateContent({
          contents:getQuery,  model: "gemini-2.0-flash",
      })
      const gptResults=Response.candidates[0].content.parts[0].text.split(",")
      console.log(gptResults)
      const movieDetails=await Promise.all(gptResults.map((movie)=>getMovieSearch(movie)))
      console.log(movieDetails.flat())
      dispatch(getGeminiSuggestions(movieDetails.flat()))
    }
    return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
        ref={searchText}
          type="text"
          className="p-3 m-3 col-span-9 bg-white"
          placeholder="What would you like to watch today?"
        />
        <button className="col-span-3 m-3 py-2 px-4 bg-red-700 text-white rounded-md" onClick={handleSearchClick}>
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
