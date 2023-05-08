import { createContext, useContext, useReducer } from "react";
import { count_reducers, initialState } from "./reducer";

export const StateContext = createContext();

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(count_reducers, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
}

export function useCounterContext() {
  return useContext(StateContext);
}
