import React from 'react'

const VideoPlayer = () => {
    const videoId = "BNk-yaFguNs"
  return (
    <div className="left-[25%] top-[23%] w-[70%] h-[70%] absolute">
        <iframe
        // width="1080"
        // height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-[100%] h-[100%]"
      ></iframe>
    </div>
  )
}

export default VideoPlayer