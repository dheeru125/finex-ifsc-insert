import { useDispatch } from "react-redux";
import { fileUploadData } from "./initialState";
import {
    setUploadExcelFile,
    setExcelFileS3SignedURL,
    setExcelFileS3UploadStatus,
    setExcelFileS3Key,
    resetState

} from "./reducer";

function FileUploadActions() {
    const disptach = useDispatch();

    return (
        {
          setUploadExcelFile: (uploadExcelFile: fileUploadData["uploadExcelFile"]) => disptach(setUploadExcelFile(uploadExcelFile)),
            setExcelFileS3SignedURL: (excelFileS3SignedURL: fileUploadData["excelFileS3SignedURL"]) => disptach(setExcelFileS3SignedURL(excelFileS3SignedURL)),
            setExcelFileS3UploadStatus: (excelFileS3UploadStatus: fileUploadData["excelFileS3UploadStatus"]) => disptach(setExcelFileS3UploadStatus(excelFileS3UploadStatus)),
            setExcelFileS3Key: (excelFileS3Key: fileUploadData["excelFileS3Key"]) => disptach(setExcelFileS3Key(excelFileS3Key)),
            resetState: () => disptach(resetState()),
            // Dispatch the reset action
        }
    );
}

export default FileUploadActions;
