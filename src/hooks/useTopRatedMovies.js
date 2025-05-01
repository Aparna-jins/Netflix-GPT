import { useEffect } from "react";
import { OPTIONS } from "../Utils/Constants";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies=()=>{

const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();
    console.log(json,"top")
    dispatch(addTopRatedMovies(json.results));
    
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
}
export default useTopRatedMovies;