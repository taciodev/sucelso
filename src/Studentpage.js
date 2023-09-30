import NavAluno from "./navAluno";
import ReactPlayer from "react-player";

export default function StudentPage() {
  return (
    <>
      <NavAluno />
      <VideoAulas />
    </>
  );
}
function VideoAulas() {
  const python = "https://www.youtube.com/watch?v=ElRd0cbXIv4&t=3s";
  return (
    <main className="container" style={{ marginTop: "5%" }}>
      <div>
        <ReactPlayer url={python} />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Comentários
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </main>
  );
}

// const [youtubeID] = useState('IEDEtZ4UVtI')

// [...]

// <iframe className='video'
//         title='Youtube player'
//         sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
//         src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
// </iframe>
// Share
// Edit
// Follow
