import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    initialStateForFileUpload,
    fileUploadData
} from "./initialState";


export const fileUploadDataSlice = createSlice({
    name: "fileUploadDataSlice",
    initialState: initialStateForFileUpload,

    reducers: {


        setUploadExcelFile: (state: fileUploadData, action: PayloadAction<fileUploadData["uploadExcelFile"]>) => {
            state.uploadExcelFile = action.payload;
        },

        setExcelFileS3SignedURL: (state: fileUploadData, action: PayloadAction<fileUploadData["excelFileS3SignedURL"]>) => {
            state.excelFileS3SignedURL = action.payload;
        },

        setExcelFileS3UploadStatus: (state: fileUploadData, action: PayloadAction<fileUploadData["excelFileS3UploadStatus"]>) => {
            state.excelFileS3UploadStatus = action.payload;
        },

        setExcelFileS3Key: (state: fileUploadData, action: PayloadAction<fileUploadData["excelFileS3Key"]>) => {
            state.excelFileS3Key = action.payload;
        },
        resetState: () => initialStateForFileUpload, // Action creator and reducer case for resetting state


    }
});

export const {
    setUploadExcelFile,
    setExcelFileS3SignedURL,
    setExcelFileS3UploadStatus,
    setExcelFileS3Key,
    resetState
} = fileUploadDataSlice.actions;

export default fileUploadDataSlice.reducer;