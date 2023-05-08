import React, { useState } from "react";
import { useCounterContext, ContextProvider } from "pdp/storeReducer";

function Header({ app }) {
  const { state, dispatch } = useCounterContext();
  return (
    <div className="my-5 p-10 text-bold bg-blue-200">
      Header : {app.name} {state?.count}
      <button
        style={{ backgroundColor: "gray", padding: "10px" }}
        onClick={() => dispatch({ type: "CLEAR" })}
      >
        Clear
      </button>
    </div>
  );
}

export default Header;
