// import { Link } from "react-router-dom";
import React, { useRef, useState } from "react";
import Navbar from "./navAluno";

export default function StudentPage() {
  return (
    <>
      <Navbar />
      <VideoAulas
        videoUrl="https://ytc.re/button/mp4/ElRd0cbXIv4"
        posterUrl="/images/reactlogo.jpe"
      />
      <VideoAulas
        videoUrl="https://ytc.re/button/mp4/ElRd0cbXIv4"
        posterUrl="/images/reactlogo.jpe"
      />
      <VideoAulas
        videoUrl="https://ytc.re/button/mp4/ElRd0cbXIv4"
        posterUrl="/images/reactlogo.jpe"
      />
      <VideoAulas
        videoUrl="https://ytc.re/button/mp4/ElRd0cbXIv4"
        posterUrl="/images/reactlogo.jpe"
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

// function Instudentpage() {
//   return (
//     <main
//       className="container "
//       style={{
//         marginLeft: "40%",
//         marginTop: "100px",
//       }}
//     >
//       <div>
//         <Link to="/Aulas">
//           <button type="button" className="btn btn-primary btn-lg">
//             Assistir Aulas
//           </button>
//         </Link>
//       </div>
//       <div>
//         <Link to="/Notas">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             style={{ marginTop: "30px" }}
//           >
//             Consultar Notas
//           </button>
//         </Link>
//       </div>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary btn-lg"
//           style={{ marginTop: "30px" }}
//         >
//           Falar com Supervisor
//         </button>
//       </div>
//       <div>
//         <button
//           type="button"
//           className="btn btn-primary btn-lg"
//           style={{ marginTop: "30px" }}
//         >
//           Cancelar Matrícula
//         </button>
//       </div>
//     </main>
//   );
// }
