/** @format */

import { initialData } from "./initialData";

const DRAGEND = "DRAG-END";

const PlayersDeducer = (state = initialData, action) => {
  switch (action.type) {
    case DRAGEND:
      return state;

    default:
      return state;
  }
};

export const PlayerDragEndCreator = (result) => ({
  type: DRAGEND,
  result,
});

export default PlayersDeducer;
