import { Box,Tabs } from "@mui/material"
import React from "react"



function Collections(){

    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };


    return(

        <div>
    
            <div className="mt-20 p-4" align="left">
                
            <h1 className="text-3xl ">Featured 
            <span className=" text-3xl ml-2">Collections</span>
            </h1>

            <p className=" mb-8 text-gray-500">
                HandPicked Projects For you
            </p>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center 
            
            hidden  md:block md:flex p-4">

                <div className=" rounded-lg ">
                <img className="w-96 rounded-lg h-56" src="https://is1-2.housingcdn.com/afe3f526/72c2a553a4868784bf918956539be27c/v2/medium.jpg.webp"/>
                </div>

                <div className=" rounded-lg">
                <img className="w-96 rounded-lg h-56" src="https://is1-2.housingcdn.com/afe3f526/1264f1fbf64cb1d23dfaa3beb33ff0ef/v2/medium.jpg.webp"/>
                </div>

                <div className=" rounded-lg ">
                <img className="w-96 rounded-lg h-56" src="	https://is1-3.housingcdn.com/afe3f526/5b76eee6ef7c5a2349b28c65c23f2571/v2/medium.jpg.webp"/>
                </div>

                <div className=" rounded-lg ">
                <img className="w-96 rounded-lg h-56" src="https://is1-3.housingcdn.com/354cef8f/5e368851e587f29c7527f001a315a747/v0/fs.jpg.webp"/>
                </div>

            </div>



            <div className="block md:hidden">


                <Box >


                    <Tabs
                        value={value}

                        onChange={handleChange}

                        variant="scrollable"

                        scrollButtons="auto"

                        aria-label="scrollable auto tabs example"

                        >


                    <img className="p-4 " src="https://is1-2.housingcdn.com/afe3f526/72c2a553a4868784bf918956539be27c/v2/medium.jpg.webp"/>
                   
                    <img className="p-4 " src="https://is1-2.housingcdn.com/afe3f526/1264f1fbf64cb1d23dfaa3beb33ff0ef/v2/medium.jpg.webp"/>
                   
                    <img className="p-4 " src="	https://is1-3.housingcdn.com/afe3f526/5b76eee6ef7c5a2349b28c65c23f2571/v2/medium.jpg.webp"/>

                    <img className="p-4" src="https://is1-3.housingcdn.com/354cef8f/5e368851e587f29c7527f001a315a747/v0/fs.jpg.webp"/>

                    </Tabs>


                </Box>


            </div>

        </div>
    )
}
export default Collections