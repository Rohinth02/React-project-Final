import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <div>
       <Link to="/login">
      <Button variant="contained" color="secondary">
        Login  /  SignUp
      </Button>
       </Link>
        
    </div>
  );
}

export default LoginButton;