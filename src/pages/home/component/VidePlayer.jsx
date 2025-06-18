import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoPlayer = () => {
  return (
    <div className="netflix-box-container">
      <div className="video-box">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=sE1F4bO9wnE"
          width="100%"
          height="100%"
          controls={true}
          playing={true}   // Auto play
          loop={true}      // Loop
          muted={true}     // Optional: avoid autoplay restrictions
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
