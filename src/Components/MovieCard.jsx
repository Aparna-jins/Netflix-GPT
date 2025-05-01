import React from "react";
import { IMG_CDN } from "../Utils/Constants";

const MovieCard = ({posterPath}) => {
  return (
    
      <div className="w-47 pr-8">
        <img alt="Movie Card" src={IMG_CDN + posterPath} />
      </div>
    
  );
};

export default MovieCard;
