import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header app={{ name: "Home" }} />
    <div className="text-bold mx-auto">HOME Body</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
