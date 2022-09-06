import React from "react";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { IconButton } from "@mui/material";

function CloseIcon(){

    return(

        <IconButton  color="error" > 

            <CancelPresentationIcon/>
            
        </IconButton>

    )
}
export default CloseIcon