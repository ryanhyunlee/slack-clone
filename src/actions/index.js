import { GET_ROOM_ID } from "./types";

export const enterRoom = (id) => (dispatch) => {
  const roomId = id;
  dispatch({ type: GET_ROOM_ID, payload: roomId });
};
