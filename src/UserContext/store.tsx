import { configureStore } from "@reduxjs/toolkit";

//Reducers
import fileUploadReducer from "../state/fileUpload/reducer";
import { fileUploadData } from "../state/fileUpload/initialState";

export interface RootState {
  fileUploadDataState: fileUploadData;
}

export const store = configureStore({
  reducer: {
    fileUploadDataState: fileUploadReducer,},
});

export function useStoreProvider() {
  return store;
}
