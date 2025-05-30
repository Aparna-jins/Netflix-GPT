import { useEffect } from "react";
import { OPTIONS } from "../Utils/Constants";
import { addUpcomingMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies=()=>{

const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      OPTIONS
    );
    const json = await data.json();
    console.log(json,"UJJ")
    dispatch(addUpcomingMovies(json.results));
    
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
}
export default useUpcomingMovies;