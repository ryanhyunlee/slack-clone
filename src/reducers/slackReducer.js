import { GET_ROOM_ID } from "../actions/types";

const initialState = {
  roomId: null,
};

const slackReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROOM_ID:
      return {
        ...state,
        roomId: action.payload,
      };
    default:
      return state;
  }
};

export default slackReducer;
