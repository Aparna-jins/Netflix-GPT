import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[2];
  console.log(mainMovie, "???");

  return (
    <div>
      {!mainMovie ? (
        <img src="/bg-black.png" alt="background-shimmer" className="w-full" />
      ) : (
        <>
          <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
          <VideoBackground id={mainMovie.id} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
