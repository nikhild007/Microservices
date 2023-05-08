export const initialState = { count: 0 };

export const count_reducers = (state, action) => {
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === "DECREMENT") {
    return { ...state, count: state.count - 1 };
  }

  if (action.type === "CLEAR") {
    return { ...state, count: 0 };
  }

  return state;
};
