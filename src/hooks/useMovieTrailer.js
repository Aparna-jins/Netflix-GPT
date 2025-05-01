import React, { useEffect } from 'react'
import { useDispatch} from "react-redux";
import { OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/movieSlice";
const useMovieTrailer = (id) => {
    

    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
            OPTIONS
        );
        const json = await data.json();
        const filteredData = json.results.filter(
            (video) => video.type === "Trailer"
        );
        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        getMovieVideos();
    }, []);
}

export default useMovieTrailer