import React from "react"
import { Box,Tabs } from "@mui/material"


function Articals() {


    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };


    return (

        <div >


            <div className="mt-20 m-2" align="left">
                
                <h1 className="text-3xl ">News  &
                <span className=" text-3xl ml-2">Articles</span>
              </h1>
    
                <p className=" mt-2 text-gray-500 mb-8">

                Read what's happening  in Real Estate

                </p>

                </div>

            <div>

 

                <div className="text-gray-600  grid grid-cols-1  md:grid-cols-3 gap-6 justify-items-center hidden md:block md:flex p-4 mt-5">

                    <div className="flex">        


                     <div className=" p-4 md:w-1/3  mb-6">

                            <div className=" h-62 overflow-hidden">

                                <img  className="object-cover object-center h-full w-full" src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/11152009/First-time-home-buyers-find-out-why-Pune-is-worth-the-investment-FB-1200x700-compressed.jpg"/>

                            </div>

                                <h2 className=" font-medium title-font text-gray-900 mt-5 text-xm"> Home buyers, find out why Pune is worth investment</h2>

                                <p className=" leading-relaxed mt-2 text-xs ">We look at what makes Pune a ripe, buyer-friendly market,looking to invest in their first dream home</p>

                                <hr/>

                                <div className="grid grid-cols-2">

                                    <div className="mt-8 text-xs">

                                        <span>Housing New Desk</span>

                                    </div>

                                    <div className="ml-24 mt-8 text-xs">

                                        july 

                                    </div>

                                </div>

 

                            </div>

                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">

 

                                <div className=" h-62 overflow-hidden">

                                    <img className="object-cover object-center h-full w-full" src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/08144922/Office-market-leasing-in-H1-2022-witnesses-65.jpg"/>

                                </div>

                                <h2 className="text-xm font-medium title-font text-gray-900 mt-5">Office market leasing in H1 2022 witnesses 65% </h2>

                                <p className="leading-relaxed mt-2 text-xs ">Office market leasing in H1 2022 witnesses 65% YoY growth, returns to pre-pandemic</p>

                                <hr/>
                                

                                <div className="grid grid-cols-2">

                                    <div className="mt-8 text-xs">

                                        <span>Housing New Desk</span>

                                    </div>

                                    <div className="ml-24 mt-8 text-xs">

                                        july 

                                    </div>

                                </div>

                            </div>



                            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">

                                <div className=" h-62 overflow-hidden">

                                    <img  className="object-cover object-center h-full w-full" src="https://assets-news.housing.com/news/wp-content/uploads/2020/03/30095707/Bigha-All-about-land-area-measurement-unit-FB-1200x700-compressed.jpg"/>

                                </div>

                                <h2 className="text-xm font-medium title-font text-gray-900 mt-5">Bigha: All about land area measurement unit</h2>

                                <p className=" leading-relaxed mt-2 text-xs    ">A commonly used land area measurement unit, bigha is used across northern India.</p>

                                <hr/>

                                <div className="grid grid-cols-2">

 

                                <div className="mt-8 text-xs">

                                <span>Housing New Desk</span>

                                </div>

                                <div className="ml-24 mt-8 text-xs">

                                july

                                </div>

                                </div>

                            </div>
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
                    <div className="flex ">        

                    <div className=" p-4 w-1/3  mb-6">

                    <div className=" h-62 overflow-hidden">

                        <img  className="object-cover object-center h-62 w-72" src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/11152009/First-time-home-buyers-find-out-why-Pune-is-worth-the-investment-FB-1200x700-compressed.jpg"/>

                    </div>

                        <h2 className=" font-medium title-font text-gray-900 mt-4 text-xm" align="left"> Home buyers, find why Pune is worth <br/>investment</h2>

                        <p className="  mt-2 text-xs " align="left">We look at what makes Pune a ripe,  buyer-friendly <br/>
                        market, looking to invest in their first dream home</p>

                        <hr className="w-72"/>

                        <div className="grid grid-cols-2">

                            <div className="mt-5 text-xs" align="left">

                                <span>Housing New Desk</span>

                            </div>

                            <div className=" mt-5 text-xs " align="right">

                                july 

                            </div>

                        </div>
                    </div>


                    <div className="p-4 w-1/3 mb-6">

                        

                        <div className=" h-62 overflow-hidden">

                            <img className="object-cover object-center h-62 w-72" src="https://assets-news.housing.com/news/wp-content/uploads/2022/07/08144922/Office-market-leasing-in-H1-2022-witnesses-65.jpg"/>

                        </div>

                        <h2 className="text-xm font-medium title-font text-gray-900 mt-4" align="left">Office market leasing in H1 2022 <br/>witnesses 65% </h2>

                        <p className=" mt-2 text-xs" align="left">Office market leasing in H1 2022 witnesses 65% YoY <br/>growth, returns to pre-pandemic</p>

                        <hr className="w-72"/>


                        <div className="grid grid-cols-2">

                            <div className="mt-5 text-xs" align="left">

                                <span>Housing New Desk</span>

                            </div>

                            <div className="mt-5 text-xs " align="right">

                                july 

                            </div>

                        </div>

                        </div>


                        <div className="p-4 w-1/3  mb-6">

                            <div className=" h-62 overflow-hidden">

                                <img  className="object-cover object-center h-62 w-72" src="https://assets-news.housing.com/news/wp-content/uploads/2020/03/30095707/Bigha-All-about-land-area-measurement-unit-FB-1200x700-compressed.jpg"/>

                            </div>

                            <h2 className="text-xm font-medium title-font text-gray-900 mt-4" align="left">Bigha: All about area  measurement<br/> unit</h2>

                            <p className="mt-2 text-xs" align="left">A commonly used land area measurement unit, bigha <br/>is used across northern India.</p>

                            <hr  className="w-72"/>

                            <div className="grid grid-cols-2">



                            <div className="mt-5 text-xs" align="left">

                            <span>Housing New Desk</span>

                            </div>

                            <div className="mt-5 text-xs " align="right">

                            july

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

export default Articals

 

