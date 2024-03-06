import { SxProps } from "@mui/material";

export const AuthSignListNoteTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "16px",
    "color": "#808080",
    '@media screen and (max-width: 600px)':{
        "fontSize": "14px",
        "width":"80%",
        "marginBottom":"5%"
    }
}

export const RadioButtonLabelTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "14px",
    "color": "#111111",
}

export const FileUploadInputStyle: SxProps = {
    '& .MuiInputBase-root':{
        "boxSizing": "border-Box",
        "background": "#FFFFFF",
        "borderRadius": "2px",
    }
}

export const FileUploadButtonStyle: SxProps = {
        "fontFamily": "Lato,sans-serif",
        "boxSizing": "border-Box",
       // "background": "#1565c0s",
        "height":"40px",
        "width":"200px",
        "borderRadius": "2px",
        "textTransform":"capitalize",
        "color":"#FFFFFF",
        // "& :hover":{
        //     "background":"#AE9142"
        // }
}

export const SubmitButtonStyle: SxProps = {
    "position": "absolute",
    "boxSizing": "border-Box",
    "width": "240px",
    "height":"45px",
    "background": "linear-gradient(90deg, #FFEAB2 0%, #FFD360 100%)",
    "borderRadius": "24px",
    "marginRight":"40px",
    "textTransform":"capitalize",
    "color":"#000000",
    "fontFamily": "Lato,sans-serif",
    "fontWeight":700,
    "fontSize":"14px",
    '@media screen and (max-width: 600px)':{
         height:'7%',
         width:"60%",
         marginLeft:'15%'
     }
}

export const skipButtonStyle: SxProps = {
    "marginLeft": "auto",
    "boxSizing": "border-Box",
    "width": "100px",
    "height":"40px",
    "background": "linear-gradient(90deg, #FFEAB2 0%, #FFD360 100%)",
    "borderRadius": "24px",
    "marginRight":"40px",
    "textTransform":"capitalize",
    "color":"#000000",
    "fontFamily": "Lato,sans-serif",
    "fontWeight":700,
    "fontSize":"12px",
}

export const TermsAndConditionSubmitButtonStyle: SxProps = {
    "position": "absolute",
    "boxSizing": "border-Box",
    "width": "180px",
    "height":"30px",
    "background": "linear-gradient(90deg, #FFEAB2 0%, #FFD360 100%)",
    "borderRadius": "24px",
    "marginTop":"-1.5%",
    "textTransform":"capitalize",
    "color":"#000000",
    "fontFamily": "Lato,sans-serif",
    "fontWeight":600,
    "fontSize":"12px",
    '@media screen and (max-width: 600px)':{
         height:'7%',
         width:"60%",
         marginLeft:'15%'
     }
}

export const AddNomineeButtonStyle: SxProps = {
    "fontFamily":"Lato,sans-serif",
    "fontStyle":"normal",
    "textTransform":"capitalize",
    "color":"#999999"
}

export const FieldInputStyle: SxProps = {

    '& .MuiInputBase-root': {
        "boxSizing": "borderBox",
        "background": "#FFFFFF",
        "borderRadius": "2px",
      },
      '& .MuiOutlinedInput-root': {
        //border: '1px solid #AAAAAA', // change the border color here
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
         // change the border color when hovering here
      },
}

export const DateInputStyle: SxProps = {
       '& .MuiInputBase-root':{
        "boxSizing": "border-Box",
        "width": "540pxpx",
        "height":"45px",
        "background": "#FFFFFF",
        "borderRadius": "2px",
        'media (max-width:600px)':{
            width:"70%",
            height:'70%',
        },
    }
}

export const SelectInputStyle: SxProps = {
        "boxSizing": "border-Box",
        "background": "#FFFFFF",
        "borderRadius": "2px",

}

export const FieldLabelTypography: SxProps = {
    display:"flex",

    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "14px",
    "color": "#666666",
    '@media screen and (max-width: 600px)':{
        "fontSize":"12px"
    }
}
export const TermsAndConditionsTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "14px",
    "color": "#333333",
}

export const FieldInputTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "14px",
    "color": "#000000",
}

export const NomineeCheckBoxTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "14px",
    "color": "#333333",
}

export const FieldErrorTextTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "9px",
    "color": "#FD4C60",
    "textDecoration": "underline",
    "marginLeft":"-1px"
}
export const FieldSuccessTextTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "9px",
    "color": "green",
    "textDecoration": "underline",
    "marginLeft":"-1px"
}

export const TextButtonTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 500,
    "fontSize": "14px",
    "color": "#0072BC",
}

export const CheckboxLabelTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontWeight": 400,
    "fontSize": "14px",
    "opacity": 0.8,
    '@media screen and (max-width: 600px)':{
        "fontSize":"12px",
        "paddingTop": "15px",
        "fontWeight": 200,
        "width": "100%"
    }
}

export const OtpLabelBoxTypography : SxProps={
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "12px",
    "color": "#999999",
    "paddingTop": "30px",
    "marginRight" : "-75px",
    "marginBottom" : "20px",
    '@media screen and (max-width: 600px)':{
        "fontSize":"8px",
        "paddingTop": "0px",
        "textAlign":"justify",
        "fontWeight": 200,
    }
}

export const CheckboxLabelTypographyForResponse: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontWeight": 600,
    "fontSize": "14px",
   '@media screen and (max-width: 600px)':{fontSize:"12px"}
}


export const FormHeadingTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 700,
    "fontSize": "36px",
    "color": "#000000",
    '@media screen and (max-width: 600px)':{
        "fontWeight": 700,
        "fontSize": "15px",
    }
}

export const FormSubHeadingTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "font-style": "normal",
    "font-weight": 400,
    "font-size": "16px",
    "color": "#23263B",
    "@media (max-width: 600px)":{
        "font-size": "13px",
    }
}

export const FormSubHeadingDescriptionTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "16px",
    "color": "#AAAAAA",
}

export const EmapnalementDailogTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "26px",
    "color": "#111111",
    "textAlign": "center"
}

export const NavbarProps: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 400,
    "fontSize": "26px",
    "color": "#111111",
     "box-shadow": "0px 2px 4px #EEEEEE",
    "background": "#000000",
    "height":"80px",
    '@media screen and (max-width: 600px)':{
        "height":"50%",
    }

}

export const PageLayoutProps: SxProps = {
    "background": "#FFFFFF",
    "boxShadow": "0px 4px 28px 2px rgba(0, 0, 0, 0.08)",
    "borderRadius": "8px",
    "width": "90%",
    "marginTop": "3%" ,
    "marginLeft": "5%" ,
    "display":"flex",
    "marginBottom": "5%" ,
    '@media screen and (max-width: 600px)':{
        "marginTop": "10%" ,
        "marginBottom": "15%" ,
    }

}

export const LoginButtonTypographyStyle :React.CSSProperties = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 700,
    "fontSize": "14px",
    "color": "#000000",
    "textTransform":"capitalize",
}

export const LoginHeadingTypography: SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontStyle": "normal",
    "fontWeight": 700,
    "fontSize": "30px",
    "color": "#000000",
    "marginTop":"0%",
    "marginLeft":"",
    '@media screen and (max-width: 600px)':{
        "marginLeft":"0%",
        "width":"100%",
        "fontWeight": 700,
        "color": "#000000",
    }
}

export const OtpDialogContentTextStyle: SxProps = {
    "textAlign": "center",
    "marginTop": "-30px",
    "fontFamily": "Lato,sans-serif",
    "fontWeight":"400",
    "color":"#333333",
    "fontSize":"16px",
    "width":"60%",
    "marginLeft":"25%",
     '@media screen and (max-width: 600px)':{
        fontSize:'10px',
        textAlign:"center",
        width:"90%",
        "marginLeft":"8%",
        "marginTop":"25px"
    }
}

export const OtpDialogBoxStyle: SxProps = {
    boxSizing: "border-box",
    "& .MuiDialog-paper":{
         minWidth: "780px",
         height: "400px",
    },
    '@media screen and (max-width: 600px)': {
        "& .MuiDialog-paper": {
          minWidth: "300px",
          height: "380px",
        },
    },
    top:"10%"
}

export const OtpMainPaperStyle: SxProps = {
    marginBottom: "5%",
    marginTop: "5%",
    height: "400px",
    width: "850px" ,
    boxShadow: "0px 4px 40px 2px rgba(0, 0, 0, 0.07)",
    '@media screen and (max-width: 600px)':{
        width:'100%'
  }
}

export const OtpPaperStyle: SxProps ={
    boxSizing: "border-box",
    width: "400px",
	height: "200px",
	borderRadius: "4px",
	display: "flex",
	flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"3.5%"
}

export const PaperStyleProps: SxProps ={
    boxSizing: "border-box",
    width: "400px",
	height: "200px",
	borderRadius: "4px",
	display: "flex",
	flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    '@media screen and (max-width: 600px)':{
        width:'100%'
    }
}

export const NomineeTableCellGridStyle : SxProps = {
    padding:"10px",
    '@media screen and (min-width: 600px)':{
        "display":"none"
    }
}
export const NomineeCheckBoxLabelProps : SxProps = {
    "fontFamily": "Lato,sans-serif",
    "fontWeight":"400",
    "color":"#333333",
    "fontSize":"14px",
    '@media screen and (min-width: 600px)':{
        "fontSize":"12px",
    }
}

export const OtpProceedButtonProps : SxProps = {
    width: "240px",
    height: "45px",
    background:"linear-gradient(90deg, #FFEAB2 0%, #FFD360 100%)",
    color: "#000000",
    fontWeight:700,
    fontSize:"14px",
    borderRadius: "24px",
    textTransform:"capitalize",
    ":hover": {
        bgcolor: "#FFFFFF",

    },
    ":disabled": {
        bgcolor: "#79a7e9",
    },
    '@media screen and (max-width: 600px)':{
        width:'60%',
        height:'30%',
        marginTop:'0%',
        marginBottom:'20%'
   }
}


