const initialState = { user: undefined };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.email,
      };
    case "LOGOUT":
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
