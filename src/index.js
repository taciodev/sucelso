import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";


<link
  href="https://fonts.googleapis.com/css2?family=Foldit:wght@100&family=Noto+Sans+JP:wght@100&family=Roboto+Mono:ital,wght@1,200&family=Tilt+Prism&display=swap"
  rel="stylesheet"
></link>;
// Include the link to Bootstrap CSS here
const bootstrapCdn =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css";
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = bootstrapCdn;
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
