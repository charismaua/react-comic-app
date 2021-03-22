import {
  DISPLAY_COMIC_PRELOAD,
  DISPLAY_COMIC_LOADING,
  DISPLAY_COMIC_SUCCESS,
  DISPLAY_COMIC_ERROR,
} from "../actions/Actions";

const defaultState = {
  successData: {},
  beforeLoad: false,
  loading: false,
  error: null,
}

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case DISPLAY_COMIC_PRELOAD:
      return {
        ...state,
        beforeLoad: true,
        loading: false,
        error: null,
      }

    case DISPLAY_COMIC_LOADING:
      return {
        ...state,
        beforeLoad: false,
        loading: true,
        error: null,
      }

    case DISPLAY_COMIC_SUCCESS:
      return {
        ...state,
        successData: action.payload.successData,
        beforeLoad: false,
        loading: false,
      }

    case DISPLAY_COMIC_ERROR:
      return {
        ...state,
        successData: {},
        beforeLoad: false,
        loading: false,
        error: action.payload.error,
      }

    default:
      return state;
  }
}
