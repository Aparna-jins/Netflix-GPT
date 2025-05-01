import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  const popular= useSelector((store) => store.movies.PopularMovies);
  const topRated=useSelector((store) => store.movies.topRatedMovies);
  const upcoming=useSelector((store) => store.movies.upcomingMovies);
  console.log(upcoming, "hlm;,p;i");
  return (
    
    <div className="bg-black">
    <div className="-mt-30 relative z-20 ">
      <MovieList title={"Now Playing"} movies={movies} />
      <MovieList title={"Trending"} movies={topRated} />
      <MovieList title={"Popular"} movies={popular} />
      <MovieList title={"Upcoming"} movies={upcoming} />
      <MovieList title={"Comedy"} movies={movies} />
    </div>
    </div>
  );
};

export default SecondaryContainer;
