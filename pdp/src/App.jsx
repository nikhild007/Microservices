import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";

import "./index.scss";
import SafeComponent from "./SafeComponent";
import { mountButton } from "helloVue/Button";
import {
  useCounterContext,
  ContextProvider,
  StateContext,
} from "pdp/storeReducer";
import VueApp from "./VueApp";

// const Header = React.lazy(() => import("home/Header"));

const App = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  const { state, dispatch } = useCounterContext();

  useEffect(() => {
    mountButton(ref.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header app={{ name: "pdp" }} />
      </SafeComponent>
      <div className="text-bold mx-auto">PDP Body Count : {state?.count}</div>
      <Footer />
      {/* <VueApp /> */}
      <button
        style={{ backgroundColor: "gray", padding: "10px" }}
        onClick={() => dispatch({ type: "INCREMENT" })}
        ref={ref}
      ></button>
    </div>
  );
};
ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("app")
);
