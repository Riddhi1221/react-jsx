import React from "react";
import { Button as MuiButton } from "@mui/material";
const Button = ({ children, variant = "contained",css }) => {
  return (
    <MuiButton
      variant={variant}
      sx={{
        backgroundColor: variant === "contained" ? "red" : "",
        color: variant === "contained" ? "white" : "",
        border: variant === "outlined" ? "2px solid red" : "",
        color: variant === "outlined" ? "red" : "",
        ...css,
        "&:hover": {
          backgroundColor: variant === "contained" ? "pink" : "",
          color: variant === "contained" ? "red" : "",
        //   backgroundColor: variant === "outlined" ? "red" : "",
        //   border: variant === "outlined" ? "none" : "",
        //   color: variant === "outlined" ? "white" : "",
        },
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
