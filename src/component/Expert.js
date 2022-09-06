import React from "react"
import { Box, Tabs } from "@mui/material"


function Expert(){


    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {

        setValue(newValue);
        
    };

    return(

        <div>
          
            <div className="mt-20 p-4" align="left">
                
                <h1 className="text-3xl mr-4">Housing 
                <span className=" text-3xl ml-2">Experts</span>
              </h1>
    
                <p className=" mb-8 text-gray-500 " >
                Sellers with Complete Knowledge about locality 
                </p>
                </div>
    

            <div className="lg:flex hidden md:grid grid-cols-2 gap-6 justify-items-center p-4">

                <div className="border-2 bg-slate-100 h-36 ">

                    <div className="grid  grid-cols-2 md:w-56">

                        <div>
                            <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-2.housingcdn.com/fb15c03b/c22a78e689ea1db0952264aab6db71ea/v0/thumb.jpg.webp"/>
                          
                        </div>
                        <div className="">
                            <span className=""><b>Dream House</b></span>
                            <button className="border rounded  bg-orange-400 text-white text-sm">Housing experts</button>
                        </div>

                    </div>
                    <div className="grid grid-cols-2">
                            <div className="ml-32 text-xs">
                                <span >14 years </span><br/>
                                <span>experiance</span>
                            </div>
                            <div className="ml-16 text-xs  overflow-hidden">
                                <span>32</span><br/>
                                <span className="">Properties</span>
                            </div>
                        </div>

                        <div className="mt-2">
                            <button className="border-2 ml-2 rounded-lg text-sm">Kharadi</button>
                            <button className="border-2 ml-4 rounded-lg text-sm">wadgao Sheri</button>
                        </div>
                    </div>

               
                <div className="border-2 bg-slate-100 h-36">

                <div className="grid  grid-cols-2 md:w-56">

                    <div>
                        <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-3.housingcdn.com/fb15c03b/caf80e8a59de71683fd4d04242abbb1a/v0/thumb.jpg.webp"/>
                    
                    </div>
                    <div className="">
                        <span> <b>MyHome.com</b></span>
                        <button className="border rounded bg-orange-400 text-white text-sm">Housing experts</button>
                    </div>

   
                    </div>
                    <div className="grid grid-cols-2">
                            <div className="ml-32 text-xs   ">
                                <span>12 years </span><br/>
                                <span>experiance</span>
                            </div>
                            <div className="ml-16 text-xs  overflow-hidden ">
                                <span>76</span><br/>
                                <span className="">Properties</span>
                            </div>
                        </div>

                    <div className="mt-2">
                        <button className="border-2 ml-2 rounded-lg text-sm">Baner</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">Balewadi</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">Bhugao</button>
                    </div>
                    </div>

                    
                <div className="border-2 bg-slate-100 h-36">

                    <div className="grid  grid-cols-2 md:w-56">

                        <div>
                            <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-2.housingcdn.com/fb15c03b/e1ac58585f2392479602620392522d00/v0/thumb.jpg.webp"/>
                        
                        </div>
                        <div className="">
                            <span><b>Propline.in</b></span>
                            <button className="border rounded  bg-orange-400 text-white text-sm">Housing experts</button>
                        </div>

                    
                    </div>
                    <div className="grid grid-cols-2">
                            <div className="ml-32 text-xs   ">
                                <span>11 years </span><br/>
                                <span>experiance</span>
                            </div>
                            <div className="ml-16 text-xs  overflow-hidden ">
                                <span>53</span><br/>
                                <span className="">Properties</span>
                            </div>
                        </div>

                        <div className="mt-2">
                            <button className="border-2 ml-2 rounded-lg text-sm">Wakad</button>
                            <button className="border-2 ml-4 rounded-lg text-sm">Godambewadi</button>
                        </div>
                        </div>
                                        

                <div className="border-2 bg-slate-100 h-36">

                <div className="grid grid-cols-2 md:w-56">

                    <div>
                        <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-2.housingcdn.com/fb15c03b/c22a78e689ea1db0952264aab6db71ea/v0/thumb.jpg.webp"/>
                    
                    </div>
                    <div className="">
                        <span><b>Rock Reality</b></span>
                        <button className="border rounded bg-orange-400 text-white text-sm">Housing experts</button>
                    </div>

   
                </div>
                <div className="grid grid-cols-2">
                        <div className="ml-32 text-xs   ">
                            <span>11 years </span><br/>
                            <span>experiance</span>
                        </div>
                        <div className="ml-16 text-xs  overflow-hidden ">
                            <span>11</span><br/>
                            <span className="">Properties</span>
                        </div>
                    </div>

                    <div className="mt-2">
                        <button className="border-2 ml-2 rounded-lg text-sm">Tathwade</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">Mundhwa</button>
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


                <div className="border-2 bg-slate-100 m-2">

                <div className="grid  grid-cols-2 h-26 w-64">

                    <div>
                        <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-2.housingcdn.com/fb15c03b/c22a78e689ea1db0952264aab6db71ea/v0/thumb.jpg.webp"/>
                    
                    </div>
                    <div className="" align="right" >
                        <span className=""><b>Dream House</b></span><br/>
                        <button className="border rounded  bg-orange-400 text-white text-sm " >HOUSING EXPERTS</button>
                    </div>

                </div>
                <div className="grid grid-cols-2 mt-[-2%]">
                        <div className="ml-24 text-xs">
                            <span >14 years </span><br/>
                            <span>experiance</span>
                        </div>
                        <div className="ml-16 text-xs  ">
                            <span>32</span><br/>
                            <span className="">Properties</span>
                        </div>
                    </div>

                    <div className="mt-2">
                        <button className="border-2 ml-2 rounded-lg text-sm">Kharadi</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">wadgao Sheri</button>
                    </div>
                </div>

                <div className="border-2 bg-slate-100  m-2">

                <div className="grid  grid-cols-2 h-26 w-64">

                    <div>
                        <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-3.housingcdn.com/fb15c03b/caf80e8a59de71683fd4d04242abbb1a/v0/thumb.jpg.webp"/>
                    
                    </div>
                    <div className="" align="right">
                        <span> <b>MyHome.com</b></span><br/>
                        <button className="border rounded bg-orange-400 text-white text-sm">HOUSING EXPERTS</button>
                    </div>

   
                    </div>
                    <div className="grid grid-cols-2 mt-[-2%]">
                            <div className="ml-24 text-xs   ">
                                <span>12 years </span><br/>
                                <span>experiance</span>
                            </div>
                            <div className="ml-16 text-xs   ">
                                <span>76</span><br></br>
                                <span className="">Properties</span>
                            </div>
                        </div>

                    <div className="mt-2">
                        <button className="border-2 ml-2 rounded-lg text-sm">Baner</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">Balewadi</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">Bhugao</button>
                    </div>
                    </div>

                    <div className="border-2 bg-slate-100 m-2">

                    <div className="grid  grid-cols-2 h-26 w-64">

                        <div>
                            <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-2.housingcdn.com/fb15c03b/e1ac58585f2392479602620392522d00/v0/thumb.jpg.webp"/>
                        
                        </div>
                        <div className="" align="right">
                            <span><b>Propline.in</b></span><br/>
                            <button className="border rounded  bg-orange-400 text-white text-sm">Housing experts</button>
                        </div>

                    
                    </div>
                    <div className="grid grid-cols-2 mt-[-2%]">
                            <div className="ml-24 text-xs   ">
                                <span>11 years </span><br/>
                                <span>experiance</span>
                            </div>
                            <div className="ml-16 text-xs   ">
                                <span>53</span><br></br>
                                <span className="">Properties</span>
                            </div>
                        </div>

                        <div className="mt-2">
                            <button className="border-2 ml-2 rounded-lg text-sm">Wakad</button>
                            <button className="border-2 ml-4 rounded-lg text-sm">Godambewadi</button>
                        </div>
                        </div>


                        <div className="border-2 bg-slate-100 m-2">

                <div className="grid grid-cols-2 h-26 w-64">

                    <div>
                        <img className="rounded-full h-12 ml-2 mt-2 " src=" https://is1-2.housingcdn.com/fb15c03b/c22a78e689ea1db0952264aab6db71ea/v0/thumb.jpg.webp"/>
                    
                    </div>
                    <div className="" align="right">
                        <span><b>Rock Reality</b></span><br/>
                        <button className="border rounded bg-orange-400 text-white text-sm">Housing experts</button>
                    </div>

   
                </div>
                <div className="grid grid-cols-2 mt-[-2%]">
                        <div className="ml-24 text-xs   ">
                            <span>11 years </span><br/>
                            <span>experiance</span>
                        </div>
                        <div className="ml-16 text-xs   ">
                            <span>11</span><br/>
                            <span className="">Properties</span>
                        </div>
                    </div>

                    <div className="mt-2">
                        <button className="border-2 ml-2 rounded-lg text-sm">Tathwada</button>
                        <button className="border-2 ml-4 rounded-lg text-sm">Mundhwa</button>
                    </div>

                </div>

                </Tabs>
                </Box>
                </div>

            
        </div>
    )
}
export default Expert