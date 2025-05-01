import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="flex">
    <div className="pt-[25%] px-12 w-full aspect-video absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold  ">{title}</h1>
      <p className="py-6 text-base w-1/3">{overview}</p>
      <div>
            <button className="bg-white text-black p-2 px-8 text-l  rounded-sm font-medium hover:bg-white/50">
          ⯈ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-2 px-8 text-l bg-opacity-50 rounded-sm font-medium  hover:bg-white/50">
        ⓘ More Info
        </button>
      </div>
    </div>
    <div className="absolute top-158 left-0 w-full h-30 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default VideoTitle;
