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
  const javascript = "https://www.youtube.com/watch?v=Ptbk2af68e8&t=8s";
  const java = "https://www.youtube.com/watch?v=BoHl-grg8JU";
  const react = "https://www.youtube.com/watch?v=yx6bt-LSKq8";
  const php = "https://www.youtube.com/watch?v=5_CPIFc0vUU";
  return (
    <main className="container" style={{ marginTop: "5%" }}>
      <div>
        <h1>Aula Python #5</h1>
        <ReactPlayer url={python} />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="comentários"
          ></textarea>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>
      <div style={{ marginTop: "7%" }}>
        <h1>Aula JavaScript #5</h1>
        <ReactPlayer url={javascript} />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="comentários"
          ></textarea>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>

      <div style={{ marginTop: "7%" }}>
        <h1>Aula Java #5</h1>
        <ReactPlayer url={java} />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="comentários"
          ></textarea>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>

      <div style={{ marginTop: "7%" }}>
        <h1>Aula React #5</h1>
        <ReactPlayer url={react} />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="comentários"
          ></textarea>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </div>

      <div style={{ marginTop: "7%" }}>
        <h1>Aula PHP #5</h1>
        <ReactPlayer url={php} />
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="comentários"
          ></textarea>
          <button type="button" class="btn btn-primary">
            Enviar
          </button>
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
