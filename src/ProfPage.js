import React from "react";
import NavProf from "./NavProf";
import "./App.css";

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

export default function CoordPage() {
  return (
    <>
      <NavProf />
      <MainBody />
    </>
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
          src="/images/B-Tech.jpeg"
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
