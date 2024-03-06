import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import KfinLogo from "../src/Image/kfin-logo.svg";
import './App.css';
import { RootState } from './UserContext/store';
import DEFileUpload from './components/DEFileUpload';
import { ec2Url, urlType } from "./config";
import FileUploadActions from './state/fileUpload/dispatchActionProvider';
import Swal from 'sweetalert2';

function App() {
  const fileUploadDataState = useSelector((state: RootState) => state.fileUploadDataState);
  const {
    uploadExcelFile,
    excelFileS3Key,
    // excelFileS3SignedURL
  } = fileUploadDataState;
  const {
    setUploadExcelFile,
    setExcelFileS3Key,
    setExcelFileS3SignedURL,
    setExcelFileS3UploadStatus,
    resetState
  } = FileUploadActions();

      const handleUpload = async () => {

        const data = {
          "filePath": excelFileS3Key,
          "userId": ""
        };
            const config = {
              method: "post",
              url: `${ec2Url}/${urlType}/ifscinsert`,
              headers: {
              "Content-Type": "application/json", },
              data : data
            };

          await axios(config)
            .then(function (result) {
              Swal.fire({
                title: 'Sucess',
                text: 'Inserting ifsc into table...',
                icon: 'success',
                confirmButtonText: 'OK'
              })

        console.log(result.data);
        resetState()
        console.log(uploadExcelFile)
        //setOpen(true);
      })
      .catch(function (error) {
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
          confirmButtonText: 'OK'
        })
      })
    }
  
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ boxShadow: "0px 2px 4px #EEEEEE", background: "#ffffff", display: "flex", height: "62px", flexDirection: "row" }}>
        <Toolbar sx={{ minHeight: "10vh", cursor: "pointer" }}>
          <img
            src={KfinLogo}

            style={{
              height: "300px",
              width: "250px",
              position: "relative"
            }}
          />
        </Toolbar>
      </AppBar>

        <Typography sx={{fontSize:"35px",textAlign:"center",marginTop:8,color:"#16599b",fontWeight:"600"}} >Upload Excel Sheet and Insert latest IFSC Codes</Typography>

      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: 'calc(100vh - 40vh)' }}> {/* Adjust the height calculation based on AppBar height */}
        <Grid item container xs={12} sm={8} md={12} spacing={3} justifyContent="center" alignItems="center" style={{ textAlign: 'center' }}>

          <Grid item xs={12} sm={6} md={6}>
            <DEFileUpload
              label="Upload File"
              fieldValue={uploadExcelFile === null ? "" :uploadExcelFile.name}
              onFileUpload={(event) => {
                if (!event.target.files) return;
                setExcelFileS3UploadStatus(0);
                setUploadExcelFile(event.target.files[0]);

              }}
              onS3PresignedurlFetch={(s3Url, s3Key) => {
                setExcelFileS3SignedURL(s3Url)
                setExcelFileS3Key(s3Key)
              }}

              documentType="Cancelled Cheque"

            />
          </Grid>
          <Grid item>
            <Button onClick={handleUpload}  variant="contained" color="primary" sx={{ marginTop: "21%" }} >
              Upload
            </Button>


          </Grid>




        </Grid>
      </Grid>
    </Box>
  )
}
export default App;


