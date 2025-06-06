import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
const VideoBackground = (id) => {
  useMovieTrailer(id.id);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="A Working Man | Official Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
