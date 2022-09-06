import React from "react"
import { Box, Tabs } from "@mui/material"

function Trending(){

    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {

        setValue(newValue);
        
    };
    
    return(
        <div>
       
            <div className="mt-20 p-4" align="left">
                
              <h1 className="text-3xl ">Trending 
                <span className="text-3xl ml-2">Projects</span>
              </h1>
    

                <p className=" mb-8 text-gray-500 ">
                    Most sought-after projects in pune
                </p>

                </div>

    

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center hidden md:block md:flex p-4">


                <div className="border-2 h-44 w-72">
                
                <div className="grid grid-cols-2 md:w-64">
                    
                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-2.housingcdn.com/4f2250e8/e1729d744d592885706c4fd4aadf1a80/v0/large/manhattan_at_pride_world_city-charholi_budruk-pune-pride_builders_llp.jpeg.webp"/>
                    </div>

                    <div className="" align="left">
                        <span className=" "><b>Codename Zero</b></span><br/>
                        <span className="mt-3 ml-2 text-xs text-gray-500">by Classic Promoters</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm text-gray-500">Dapodi,Pimpri</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$54.8L-94.77L</b></span>
                        </div>
                    </div>
                </div>
                </div>




                <div className="border-2 h-44 w-72  ">
                
                <div className="grid grid-cols-2  md:w-64">
                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-2.housingcdn.com/4f2250e8/2a922f8ead009bec3c3de46c345c696f/v0/large/sai_signature-mamurdi-pune-city_one.jpeg.webp"/>
                    </div>
                    <div className="" align="left">
                        <span className=" ml-3"><b>Sai Signature</b></span><br/>
                        <span className="mt-3 ml-2 text-xs text-gray-500">by City one</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm text-gray-500">Hadapsar</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$48.54L - 73.68L</b></span>
                        </div>
                    </div>
                </div>
                    
                </div>



                <div className="border-2 h-44 w-72  ">
                
                <div className="grid grid-cols-2  md:w-64">

                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-3.housingcdn.com/4f2250e8/1a7d9c17996f4e276df3964e2549550a/v5/fs/codename_bestofmagarpatta-hadapsar-pune-prithvi_edifice.jpg.webp"/>
                    </div>

                    <div className="" align="left">
                        <span className=" ml-3"><b> Bestofm</b></span><br/>
                        <span className="mt-3 ml-2 text-xs text-gray-500">by Pruthvi Ediface...</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm text-gray-500">Fursungi,pune</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$1.21Cr - 1.6Cr</b></span>
                        </div>
                    </div>
                </div>
                </div>


                <div className="border-2 h-44 w-72  ">
                
                <div className="grid grid-cols-2  md:w-64">
                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-3.housingcdn.com/4f2250e8/c46da73a8406eaa8637ff65e597ec4f0/v0/large/codename_zero-dapodi-pune-classic_promoters_and_builders.jpeg.webp"></img>
                    </div>

                    <div  className="" align="left">
                        <span className=" "><b>Samrat Sarthak</b></span><br/>
                        <span className="mt-3 ml-2  text-xs text-gray-500">by Classic promoters</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm text-gray-500">Katraj,Pune</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$47.8L-77L</b></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>



            <div className="block md:hidden">

                <Box>
                    <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example">

                
                <div className="border-2 m-2">
                
                <div className="grid grid-cols-2 w-64 overflow-hidden">
                    
                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-2.housingcdn.com/4f2250e8/e1729d744d592885706c4fd4aadf1a80/v0/large/manhattan_at_pride_world_city-charholi_budruk-pune-pride_builders_llp.jpeg.webp"/>
                    </div>

                    <div className="" align="left">
                        <span className=" ml-3"><b>Codename Zero</b></span><br/>
                        <span className="mt-3 ml-2 text-xs text-gray-500">by Classic Promoters</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm">1,2 BHK Apartments  </span>
                        <span className="text-sm text-gray-500">Dapodi,Pimpri</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$54.8L-94.77L</b></span>
                        </div>
                    </div>
                    </div>
                    </div>



                <div className="border-2 m-2">
                
                <div className="grid grid-cols-2 w-64 overflow-hidden">
                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-2.housingcdn.com/4f2250e8/2a922f8ead009bec3c3de46c345c696f/v0/large/sai_signature-mamurdi-pune-city_one.jpeg.webp"/>
                    </div>
                    <div className="" align="left">
                        <span className=" ml-3"><b>Sai Signature</b></span><br/>
                        <span className="mt-3 ml-2 text-xs text-gray-500">by City one</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm">2,3 BHK Apartment  </span>
                        <span className="text-sm text-gray-500">Hadapsar</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$48.54L - 73.68L</b></span>
                        </div>
                    </div>
                </div>
                    
                </div>



                <div className="border-2 m-2">
                
                <div className="grid grid-cols-2 w-64 overflow-hidden">

                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-3.housingcdn.com/4f2250e8/1a7d9c17996f4e276df3964e2549550a/v5/fs/codename_bestofmagarpatta-hadapsar-pune-prithvi_edifice.jpg.webp"/>
                    </div>

                    <div className="" align="left">
                        <span className=" ml-3"><b> Bestofm</b></span><br/>
                        <span className="mt-3 ml-2 text-xs text-gray-500">by Pruthvi Ediface...</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm">3 BHK Apartment  </span>
                        <span className="text-sm text-gray-500">Fursungi,pune</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$1.21Cr - 1.6Cr</b></span>
                        </div>
                    </div>
                </div>
                </div>


                <div className="border-2 m-2">
                
                <div className="grid grid-cols-2 w-64 overflow-hidden">
                    <div>
                        <img className="h-44 border-2 w-36" src="https://is1-3.housingcdn.com/4f2250e8/c46da73a8406eaa8637ff65e597ec4f0/v0/large/codename_zero-dapodi-pune-classic_promoters_and_builders.jpeg.webp"></img>
                    </div>

                    <div  className="" align="left">
                        <span className=" ml-3"><b>Samrat Sarthak</b></span><br/>
                        <span className="mt-3 ml-2  text-xs text-gray-500">by Classic promoters</span>
                        
                        <div className="mt-3 ml-2">
                        <span className="text-sm">1,2 BHK Apartment  </span>
                        <span className="text-sm text-gray-500">Katraj,Pune</span>
                        </div>
                        <div className="ml-2 mt-3">
                        <span><b>$47.8L-77L</b></span>
                        </div>
                    </div>
                </div>
                </div>


                    </Tabs>

                </Box>


            </div>

        </div>
    )
 }
 export default Trending