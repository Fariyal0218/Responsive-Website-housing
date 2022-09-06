import React from "react";
// import "./styles.css";
import { TextField } from "@material-ui/core";


function Textf() {

  return (

    <div className="container">

      <TextField
        label="Full name"
        placeholder="Full Name"
        margin="dense"
        variant="outlined"
      />
    </div>

  );
}


export default Textf