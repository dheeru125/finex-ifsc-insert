
export interface fileUploadData{
    uploadExcelFile: File | null,
    excelFileS3SignedURL: string,
    excelFileS3UploadStatus: number,
    excelFileS3Key: string,

}

export const initialStateForFileUpload: fileUploadData = {
    uploadExcelFile: null,
    excelFileS3SignedURL: "",
    excelFileS3UploadStatus: 0,
    excelFileS3Key: "",

}
