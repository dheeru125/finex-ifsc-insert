/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Backdrop, Box, Button, CircularProgress, FormLabel, Stack, TextField, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import React, { ChangeEvent, ReactNode, RefObject, createRef, useState } from "react";
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';
import { Bucket_Name, ec2Url, urlType, } from "../../config";
import { FieldLabelTypography, FileUploadButtonStyle, FileUploadInputStyle } from "../../pageStyle";
// import { RootState } from "../../UserContext/store";
// import { useSelector } from "react-redux";
import FileUploadActions from '../../state/fileUpload/dispatchActionProvider';

interface DEFileUploadProps {
    label: string,
    error?: boolean,
    helperText?: ReactNode,
    disabled?: boolean,
    fieldValue?: string;
    onFileUpload: (event: ChangeEvent<HTMLInputElement>) => void,
    onS3PresignedurlFetch: (s3PresignedUrl: string, s3Key: string) => void,
    documentType: string,
    errorStateHandlers?: (fieldName: string, errorMessage: string) => void,
}

const DEFileUpload: React.FC<DEFileUploadProps> = ({
    label: buttonLabel,
    error,
    onFileUpload,
    helperText,
    disabled,
    fieldValue,
    onS3PresignedurlFetch
}) => {

    const inputRef: RefObject<HTMLInputElement> = createRef<HTMLInputElement>();
    const [, setErrorMsg] = useState("");
    // const fileUploadDataState = useSelector((state: RootState) => state.fileUploadDataState);
    // const {
    //     uploadExcelFile,
    // } = fileUploadDataState;

    const [filename, setFilename] = useState("");
    const [open, setOpen] = useState(false);

    const {
        setExcelFileS3UploadStatus,
      } = FileUploadActions();

    let name = "",size = 5, type: string | undefined = "", filedata: any;
    const changeTextFieldContentToFilename = (e: any) => {
        name= e.target.files[0].name;
        if (typeof name === "undefined") return ;
        size= e.target.files[0].size;
        type = name.split('.').pop();
        console.log("type 1",e.target.files[0].type );
        console.log("type 2", type);
        console.log("extension", name.split('.').pop());
        const file = e.target.files[0];
        filedata = e.target.files[0];
        //extension = name.split('.').pop();
        setFilename(file.name);
        console.log("FILE DETAILS",name, e.target.files[0].type, type,name.split('.').pop())
    }

    const getS3SignedURL = async ()=>{
        setOpen(true);
        console.log("in DEFileupload")
        let s3SignedUrl = "",s3Key="";
        const currentDate = new Date();
        // const extension = filename !== undefined ? filename.split('.').pop(): "";
        console.log("file name", `${ name.split(".")[0]}_${ currentDate }`);
        const data = JSON.stringify({
            "bucket": Bucket_Name,
            "files":[
                {
                    "fileName": `${ name.split(".")[0]}_${ currentDate }`,
                    "documentType": "IFSCXL",
                    "fileSize": size/(1024**2),
                    "fileFormat": `${type}`,
                    "application": "Dist-Emp",
                    "pan":"RBIEXCEL"
                }
            ]
          });
        const config = {
            "method": "post",
            "url": `${ec2Url}/${urlType}/gets3presignedpost`,
            "headers": {
                // 'authorizationToken': userContextState.authToken,
                "Content-Type": "application/json"  
            },
            "data" : data
        };

        await axios(config)
            .then(async function (result) {
                s3Key = result.data.s3PresignedPostURL[0].key;
                s3SignedUrl = result.data.s3PresignedPostURL[0].signedUrl;
                onS3PresignedurlFetch(s3SignedUrl, s3Key);
                setOpen(false);
                    console.log("filedata", filedata)
                    console.log("s3SignedUrl", s3SignedUrl)
                    const putS3ObjectAxiosConfig = {
                        method: "put",
                        url: s3SignedUrl,
                        headers: {
                            "Content-Type": "application/octet-stream"
                        },
                        data : filedata,
                    };
                    await axios(putS3ObjectAxiosConfig)
                    .then(async (response) => {
                        setExcelFileS3UploadStatus(1)
                        console.log("S3 Response, setting status to true", response);
                    })
                    .catch((error) => {
                        setExcelFileS3UploadStatus(0)
                        console.log("s3 error, setting status to false",error);
                    })
                    // await axios.put(s3SignedUrl, filedata);
            })
            .catch(function (error) {
                console.log("erroer",JSON.parse(error.response.data.message)[0].error)
                setErrorMsg(error)
                Swal.fire({
                    title: JSON.parse(error.response.data.message)[1].error,
                    text: JSON.parse(error.response.data.message)[0].error,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
                setOpen(false);
            });
    }

    return (
        <>
        <FormControl
         fullWidth
         disabled={disabled}
         error={error}>
        <FormLabel sx={{ "marginBottom": "5px"}}>
                <Typography sx={FieldLabelTypography}>
                    {buttonLabel}
                </Typography>
            </FormLabel>

            <Box>
            <Stack
                direction="row"
                spacing={0}
            >
                <input
                    type="file"
                    data-testid="input-testid"
                    ref={inputRef}
                    onChange={(event) => {
                        changeTextFieldContentToFilename(event);
                        onFileUpload(event);
                        getS3SignedURL();
                    }}
                    hidden
                />

                <Button
                    size="small"
                    variant="contained"
                    onClick={() => inputRef.current?.click()}
                    sx={FileUploadButtonStyle}
                    color="primary"
                >
                    {"Browse File"}
                </Button>

                <TextField
                    value={(fieldValue===""||fieldValue===undefined)?filename:fieldValue}
                    error={error}
                    helperText ={helperText}
                    variant="outlined"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    sx={FileUploadInputStyle}
                    InputProps={{
                        readOnly: true,
                    }}
                />
                </Stack>

            </Box>
        </FormControl>
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}

export default DEFileUpload;
