import React, { Suspense, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import VueApp from "./VueApp";

import "./index.scss";
import SafeComponent from "./SafeComponent";
import { mountButton } from "helloVue/Button";

// const Header = React.lazy(() => import("home/Header"));

const App = () => {
  console.log(VueApp, Header);
  const ref = useRef(null);

  useEffect(() => {
    mountButton(ref.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header app={{ name: "pdp" }} />
      </SafeComponent>
      <div className="text-bold mx-auto">PDP Body</div>
      <Footer />
      <VueApp />
      <button ref={ref}></button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
