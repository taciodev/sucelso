import Navigation from "./navigation.js";
const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh", // Adjust as needed
  },
  content: {
    flex: 1,
    padding: "20px",
  },
  imageContainer: {
    flex: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
};

export default function HomePage() {
  return (
    <div className="App">
      <Navigation />
      <MainBody />
      <Footer />
    </div>
  );
}

function MainBody() {
  return (
    <div className="main">
      <div style={styles.imageContainer}>
        <p style={{ padding: "90px" }} className="text">
          Estude com até 100% de bolsa. No Sucelso, é Sucesso garantido
        </p>{" "}
        <br />
        <img
          src="/images/student.jpeg"
          className="img-thumbnail"
          alt="..."
          style={{
            maxWidth: "60%",
            marginTop: "50px",
            marginBottom: "100px",
          }}
        ></img>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p className="footMessage"> Mais de 100 empresas parceiras no mundo </p>

      <div style={{ display: "flex", alignItems: "center", marginLeft: "25%" }}>
        <a href="https://www.udemy.com">
          <img
            src="/images/udemy_logo.jpeg"
            alt="broken"
            style={{ width: "50px", marginRight: "70px" }}
          />{" "}
        </a>
        <a href="https://www.youtube.com">
          <img
            src="/images/youtube_logo.jpeg"
            alt="broken"
            style={{ width: "50px", marginRight: "70px" }}
          />{" "}
        </a>
        <a href="https://www.Pinterest.com">
          <img
            src="/images/logo-Pinterest.jpg"
            alt="broken"
            style={{ width: "50px", marginRight: "70px" }}
          />{" "}
        </a>
        <a href="https://www.linkedin.com">
          <img
            src="/images/linkedin_logo.jpeg"
            alt="broken"
            style={{ width: "50px", marginRight: "70px" }}
          />{" "}
        </a>
        <a href="https://www.coursera.com">
          <img
            src="/images/coursera-logo.png"
            alt="broken"
            style={{ width: "50px", marginRight: "70px" }}
          />{" "}
        </a>
      </div>
    </footer>
  );
}
