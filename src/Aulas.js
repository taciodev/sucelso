import React, { useRef, useState } from "react";
import Navbar from "./navAluno";

export default function Aulinhas() {
  return (
    <>
      <Navbar />
      <VideoAulas
        videoUrl="https://ytc.re/button/mp4/ElRd0cbXIv4"
        posterUrl="/images/reactlogo"
      />
    </>
  );
}

function VideoAulas({ videoUrl, posterUrl }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <div className="container">
        <img
          src={posterUrl}
          alt="Thumbnail"
          onClick={togglePlay}
          style={{ cursor: "pointer" }}
        />

        <video
          ref={videoRef}
          src={videoUrl}
          controls={isPlaying}
          style={{ display: isPlaying ? "block" : "none" }}
        />
      </div>
    </>
  );
}
