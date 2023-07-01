import { toggleLoading } from "../store/appSlice";
import { Dispatch, Action } from "@reduxjs/toolkit";

type AppDispatch = Dispatch<Action>;

const useLoader = (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(toggleLoading(false));
  }, 2000);
};

export default useLoader;
