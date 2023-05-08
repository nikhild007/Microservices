import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./index.scss";
import { ContextProvider } from "pdp/storeReducer";

const App = () => {
  return (
    <ContextProvider>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header app={{ name: "Home" }} />
        <div className="text-bold mx-auto">HOME Body</div>
        <Footer />
      </div>
    </ContextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
