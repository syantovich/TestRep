import { USER_ACTIONS } from "./actions";

const initialState = { user: undefined };

const reducer = (state, action) => {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case USER_ACTIONS.login:
      return {
        ...state,
        user: action.payload.email,
      };
    case USER_ACTIONS.logout:
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
};

export default reducer;
