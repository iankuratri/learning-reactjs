import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls={true}
        onReady={() => console.log("onReady callback")}
        onStart={() => console.log("onStart callback")}
        onPlay={() => console.log("onPlay callback")}
        onPause={() => console.log("onPause callback")}
        onEnded={() => console.log("onEnded callback")}
        onError={() => console.log("onError callback")}
      />
    </div>
  );
};
