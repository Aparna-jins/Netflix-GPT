import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {
  const movies= useSelector((store)=>store.gpt.geminiSuggestions)
  console.log(movies,"LLLLLLLLLLLL")
  return (<>
    <div className='mt-8 bg-gradient-to-b from-black/0 to-black h-25'></div><div className='bg-black'><MovieList title={"Search Results"} movies={movies}/></div></>
  )
}

export default GptMovieSuggestions