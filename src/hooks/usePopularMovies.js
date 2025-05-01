import { useEffect } from "react";
import { OPTIONS } from "../Utils/Constants";
import { addPopularMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";

const usePopularMovies=()=>{

const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=2",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}
export default usePopularMovies;