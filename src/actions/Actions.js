import axios from "axios";

export const DISPLAY_COMIC_PRELOAD = "DISPLAY_COMIC_PRELOAD";
export const DISPLAY_COMIC_LOADING = "DISPLAY_COMIC_LOADING";
export const DISPLAY_COMIC_SUCCESS = "DISPLAY_COMIC_SUCCESS";
export const DISPLAY_COMIC_ERROR = "DISPLAY_COMIC_ERROR";

export const initComicPreload = () => ({
  type: DISPLAY_COMIC_PRELOAD,
})
export const comicFetching = () => ({
  type: DISPLAY_COMIC_LOADING,
})

export const getComicSuccess = (successData) => ({
  type: DISPLAY_COMIC_SUCCESS,
  payload: { successData },
})

export const getComicError = (error) => ({
  type: DISPLAY_COMIC_ERROR,
  payload: { error },
})

export function comicInitState() {
  return (dispatch) => {
    dispatch(initComicPreload());
  }
}

export function fetchComic(comicNumber) {
  const apiUrl = comicNumber ? `/${comicNumber}/info.0.json` : "/info.0.json";
  return (dispatch) => {
    dispatch(comicFetching())
    return axios.get(apiUrl).then(({ data }) => {
      dispatch(getComicSuccess(data));
      return data;
    }).catch((error) => dispatch(getComicError(error)));
  }
}
