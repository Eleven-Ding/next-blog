import * as actionType from "./constants";
import { Map } from "immutable";
const defaultState = Map({
  isHidden: false,
  // 窗口宽度
  screenWidth: 0,
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionType.CHANGE_HEADER_IS_HIDDEN:
      return state.set("isHidden", action.isHidden);
    case actionType.CHANGE_SCREEN_WIDTH:
      return state.set("screenWidth", action.screenWidth);
    default:
      return state;
  }
}

export default reducer;
