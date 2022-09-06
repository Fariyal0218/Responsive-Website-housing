import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

function Scrollabel(){

    const[value,setValue]=React.useState('');

    const handleChange =(newValue)=>{

        setValue(newValue);
    }

    return(

        <Box sx={{maxWidth: {xs:320, sm:480},bgcolor: 'Background.paper'}}>

            <Tabs value={value}

            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example">

                <Tab label="One"/>
                <Tab label="Two"/>
                <Tab label="Three"/>
                <Tab label="Four"/>
                <Tab label="Five"/>
                <Tab label="Six"/>

            </Tabs>
            
        </Box>
      
    )
}
export default Scrollabel