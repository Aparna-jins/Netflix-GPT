import { useEffect } from "react";
import { OPTIONS } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies=()=>{

const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;