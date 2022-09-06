import { Box, Tabs } from "@mui/material"
import React from "react"


function FeaturedDeveloper() {

    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {

        setValue(newValue);
        
    };


    return (


        <div>

            <div className="mt-20 p-4" align="left">

            <h1 className="text-3xl ">Featured 
            <span className="text-3xl ml-2">Developers</span>
            </h1>

            <p className=" mt-2 text-gray-500">
            Prominent Developers in pune
            </p>

            </div>
            

            <div className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-items-center hidden md:block md:flex p-4" >

                <div className="border-2 w-80 h-96 ">

                    <div className="grid grid-cols-2 ">

                        <div className=" rounded-lg h-28 w-24 ml-2 ">

                         <img className="h-32 ml-2" src=" https://is1-3.housingcdn.com/0b8ad14c/78ef7e54f7e05480b428c63bd3e6c50a/v0/medium.jpg.webp"/>
                      
                        </div>


                        <div className="mt-6">
                            <span className="text-sm"><b>Unique Properties</b></span>

                            <div className="grid grid-cols-2 mt-4">

                                <div>
                                    <span><b>2006</b></span><br/>
                                    <span className="text-gray-600 text-sm">year estd</span>
                                </div>

                                <div>
                                    <span><b>7</b></span><br/>
                                    <span className="text-gray-600 text-sm">Projects</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="ml-2 mt-2">

                        <span className="ml-2  text-sm text-gray-500">Unique Properties is a construction & a 
                        real estate company with innovation at its core.
                         Aimed at building a </span>

                    </div>


                    <div className="mt-4">
                        <span className="text-xl text-purple-800" ><b>Unique Legacy</b></span>
                        <img className="h-44 w-full rounded" src="https://is1-3.housingcdn.com/4f2250e8/74909e3dfe577f44ed1203ec5adb4c75/v0/fs/unique_legacy_royale-mundhwa-pune-unique_properties.jpeg.webp"></img>
                    </div>


                </div>



               

                    <div className="border-2 w-80 h-96">

                        <div className="grid grid-cols-2">

                            <div className="rounded-lg h-28 w-24 ml-2">

                                <img className="h-26 ml-2 mt-4 border" src="https://is1-2.housingcdn.com/0b8ad14c/93e669fd4dcc437d8e569341a92d2708/v4/medium.jpg.webp"/>
                            
                            </div>

                            <div className="mt-6">

                                <span className="text-sm "><b>Kolte-patil developers  </b></span>

                                <div className="grid grid-cols-2 mt-4">

                                    <div>
                                        <span><b>1990</b></span><br/>
                                        <span className="text-gray-600 text-sm">year estd</span>
                                    </div>

                                    <div className="">

                                        <span><b>131</b></span><br/>
                                        <span className="text-gray-600 text-sm">Projects</span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="mt-2 ml-2">
                            <span className="ml-2 text-sm text-gray-500">Kolte-Patil Developers Founded nearly 3 decades ago and guided by the simple, yet profound, philosophy of ‘Creation,</span>
                        </div>


                        <div className="mt-4">
                            <span className="text-xl text-purple-800  "><b>24k Stargaze</b></span>
                            <img className="h-44 w-full rounded" src="https://is1-2.housingcdn.com/4f2250e8/031f169d7bf4b8bc52399c0adff437ce/v0/large/24k_stargaze-bavdhan-pune-kolte-patil_developers.jpeg.webp"/>
                        </div>


                    </div>




                <div className="border-2 w-80  h-96">

                        <div className="grid grid-cols-2">

                            <div className="rounded-lg h-28 w-24 ml-2">

                                <img className="h-30 ml-2 mt-2 border" src="https://is1-3.housingcdn.com/0b8ad14c/ccbba3d989b8830cb62f65d351595167/v0/medium.jpg.webp"/>

                            </div>


                            <div className="mt-6">

                                <span className=" text-sm"><b>Mantra Properties  </b></span>

                                <div className="grid grid-cols-2 mt-4">

                                    <div>

                                        <span className=""><b>2008</b></span><br/>
                                        <span  className="text-gray-500 text-sm">year estd</span>
                                    
                                    </div>

                                    <div>

                                        <span><b>5</b></span><br/>
                                        <span className=" text-gray-500 text-sm">Projects</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="mt-2 ml-2">

                            <span className="ml-2 text-sm text-gray-500">We follow a simple Mantra...
                            
                            continuous innovation brings continuous 
                            
                            success. And our portfolio is</span>

                        </div>

                        <div className="mt-4">

                            <span className="text-xl text-purple-800 "><b>City 360 phase</b></span>
                            <img className="h-44 w-full rounded" src="https://is1-3.housingcdn.com/4f2250e8/0dc30969e5a201650e8d776c69a70373/v0/large/city_360_phase_2-talegaon_dabhade_1-pune-mantra_properties_and_developers.jpeg.webp"/>
                        
                        </div>
                </div>


            </div>

            <div className="block md:hidden ">

                <Box>
                    <Tabs
                     value={value}
                     onChange={handleChange}
                     variant="scrollable"
                     scrollButtons="auto"
                     aria-label="scrollable auto tabs example"
                     >
                    
                <div className="p-2">
                <div className="border-2 w-72 h-96 ">

                    <div className="grid grid-cols-2 ">

                        <div className=" rounded-lg h-32 w-24 ml-2 ">

                        <img className="h-32 ml-4" src=" https://is1-3.housingcdn.com/0b8ad14c/78ef7e54f7e05480b428c63bd3e6c50a/v0/medium.jpg.webp"/>
                    
                        </div>


                        <div className="mt-6">
                            <span className="mr-4"><b>Unique Properties</b></span>

                            <div className="grid grid-cols-2 mt-4">

                                <div>
                                    <span><b>2006</b></span><br/>
                                    <span className="text-gray-600">year estd</span>
                                </div>

                                <div>
                                    <span><b>7</b></span><br/>
                                    <span className="text-gray-600">Projects</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="ml-2 mt-2 overflow-hidden">

                        <span className="text-sm text-gray-500">Unique Properties is a construction & a 
                        real estate company with innovation at its core.
                        Aimed at building a healthier</span>

                    </div>


                    <div className="mt-4">
                        <span className="text-xl text-purple-800" ><b>Unique Legacy</b></span>
                        <img className="h-44 w-full rounded" src="https://is1-3.housingcdn.com/4f2250e8/74909e3dfe577f44ed1203ec5adb4c75/v0/fs/unique_legacy_royale-mundhwa-pune-unique_properties.jpeg.webp"></img>
                    </div>


                    </div>
                    </div>




                    <div className="p-2">

                    <div className="border-2 w-72  h-96">


                        <div className="grid grid-cols-2">

                            <div className="rounded-lg h-28 w-24 ml-2">

                            <img className="h-28 ml-1 mt-5 border" src="https://is1-2.housingcdn.com/0b8ad14c/93e669fd4dcc437d8e569341a92d2708/v4/medium.jpg.webp"/>
                            
                            </div>

                            <div className="mt-6" >

                                <span className="mr-4 text-sm" ><b>Kolte-patil developer</b></span>

                                <div className="grid grid-cols-2 mt-4">

                                    <div>
                                        <span><b>1990</b></span><br/>
                                        <span className="text-gray-600">year estd</span>
                                    </div>

                                    <div className="ml-2">

                                        <span><b>131</b></span><br/>
                                        <span className="text-gray-600">Projects</span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="mt-6 ml-2 overflow-hidden">
                            <span className="ml-2 text-sm text-gray-500">Kolte-Patil Developers Founded nearly 3 decades ago and guided by the simple, yet profound, philosophy of ‘Creation,</span>
                        </div>


                        <div className="mt-4">
                            <span className="text-xl text-purple-800  "><b>24k Stargaze</b></span>
                            <img className="h-44 w-full rounded" src="https://is1-2.housingcdn.com/4f2250e8/031f169d7bf4b8bc52399c0adff437ce/v0/large/24k_stargaze-bavdhan-pune-kolte-patil_developers.jpeg.webp"/>
                        </div>



                </div>
                </div>

                <div className="p-2">

                <div className="border-2 w-72  h-96">

                        <div className="grid grid-cols-2">

                            <div className="rounded-lg h-28 w-24 ml-2">

                                <img className="h-28 ml-4  border mt-5" src="https://is1-3.housingcdn.com/0b8ad14c/ccbba3d989b8830cb62f65d351595167/v0/medium.jpg.webp"/>

                            </div>


                            <div className="mt-6">

                                <span className="mr-4"><b>Mantra Properties  </b></span>

                                <div className="grid grid-cols-2 mt-4">

                                    <div>

                                        <span className=""><b>2008</b></span><br/>
                                        <span  className=" text-gray-600">year estd</span>
                                    
                                    </div>

                                    <div>

                                        <span><b>5</b></span><br/>
                                        <span className=" text-gray-500">Projects</span>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="mt-6 ml-2 overflow-hidden">

                            <span className="ml-2 text-sm text-gray-500">We follow a simple Mantra...
                            
                            continuous innovation brings continuous 
                            
                            success. And our portfolio is</span>

                        </div>

                        <div className="mt-4">

                            <span className="text-xl text-purple-800"><b>City 360 phase</b></span>
                            <img className="h-44 w-full rounded" src="https://is1-3.housingcdn.com/4f2250e8/0dc30969e5a201650e8d776c69a70373/v0/large/city_360_phase_2-talegaon_dabhade_1-pune-mantra_properties_and_developers.jpeg.webp"/>
                        
                        </div>
                    </div>
                    </div>

                    </Tabs>
                </Box>

            </div>


        </div>
    )
}
export default FeaturedDeveloper