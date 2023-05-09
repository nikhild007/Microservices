import React, { useEffect, useState } from "react";
import { useCounterContext, ContextProvider } from "pdp/storeReducer";
import { WindowEventService } from "pdp/globalEvent";

function Header({ app }) {
  const { state, dispatch } = useCounterContext();

  const handleClearButton = () => {
    dispatch({ type: "CLEAR" });
    const event = "channel-1";
    const body = {
      detail: { message: "Cleared successfully", clearedNo: state?.count },
    };
    WindowEventService.fire(event, body);
  };
  const eventHandler = (event) => {
    console.log("Message", event.detail);
  };

  useEffect(() => {
    WindowEventService.subscribe("channel-1", eventHandler);
    WindowEventService.subscribe("channel-message", eventHandler);

    return () => {
      WindowEventService.unsubscribe("channel-1", eventHandler);
      WindowEventService.unsubscribe("channel-message", eventHandler);
    };
  }, []);

  return (
    <div className="my-5 p-10 text-bold bg-blue-200">
      Header : {app.name} {state?.count}
      <button
        style={{ backgroundColor: "gray", padding: "10px" }}
        onClick={handleClearButton}
        id="clearId"
      >
        Clear
      </button>
    </div>
  );
}

export default Header;
