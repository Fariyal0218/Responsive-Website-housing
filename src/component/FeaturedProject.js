import React from "react";
import { Box,Tabs } from "@mui/material"



function FeaturedProject() {


    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
  
  
      <div>

          <div  className=" mt-20  p-4" align="left">

            <h1 className="text-3xl ">  Featured 
            <span className=" text-3xl ml-2">Projects</span>
            </h1>

            <p className=" mt-2 text-gray-500 mb-8">
              Exclusive showcase of top projects
            </p>

        </div>


  
        <div className= "grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center hidden md:block md:flex p-4 mt-5" >

          <box className= "border-2 " >

            <div className="w-64 h-40 ">

              <img className="h-40 w-64"
                src="https://is1-3.housingcdn.com/4f2250e8/c53d9196548a8aa39a13020e1c2dfbde/v0/fs/bhalchandra_prospera-ravet-pune-n_b_bhondve_group.jpeg.webp"/>

            </div>

            <div className=" mt-2 m-2" align="left ">

            <span> <b>Bhalchandra Prospera</b> </span>
            <br/>

            <span className="text-sm">by N B Bhandeve group</span>

            </div>

            <div className="mt-2 m-2" align="left">

            <span className="text-sm " >2 BHK Apartment<br/> </span>
             
            <span className="text-gray-500 text-sm">Rawet Pimpri- Chinchwad...</span>
            
            </div>


            <div className="ml-4" align="left">

              <b>$70.63L</b>

            </div>

          </box>


  
          <box className="border-2 ">


            <div className="w-64 h-40">

              <img
                className="h-40 w-64"
                src="https://is1-2.housingcdn.com/4f2250e8/b081e691c61b9c2541352576cd991a01/v0/large/marigold_calendula-pimple_nilakh-pune-audumbar_homes_llp.jpeg.webp"
             />
            </div>


            <div className="ml-4 mt-2" align="left">
             
            <span><b>Marigold Calendula </b> </span>
             <br/>

              <span className="text-sm">by Audumbar Homes LLP</span>

            </div>


            <div className="mt-2 ml-4" align="left">

              <span  className="text-sm">  2 BHK Apartment<br/></span>
              
              
  
              <span className="text-gray-500 text-sm">Pimple Nilakh, Pimpri Chi...</span>

            </div>


            <div className="ml-4 mt-2" align="left">
              <b>$83.18L-90.79L</b>
            </div>

          </box>


  
          <box className="border-2" >

            <div className="w-64 h-40">

              <img

                className="w-64 h-40 "
                src="https://is1-3.housingcdn.com/4f2250e8/8ecc790cace4191c778a469b15b53acb/v0/large/sukhwani_palms-wagholi-pune-sukhwani_promoters__builders.jpeg.webp" />

            </div>

            <div className="ml-4 mt-2" align="left">
              <span> <b>Yashada Supreme</b>  </span>
               <br/>


              <span className="text-sm">By Yashada Realty Group</span>

            </div>

            <div className="mt-2 ml-4" align="left">

              <span className="text-sm">2,3 BHK Apartment<br/></span>

              <span className="text-gray-500 text-sm">Moshi,Pimpri Chinchwad...</span>

            </div>

            <div className="ml-4 m-2 " align="left">
              <b>$37.9L - 56.3 L</b>
            </div>


          </box>

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
              
              <box className= "border-2 p-2" >
              <div className="w-64 h-40 ">

              <img className="h-40 w-64"
                src="https://is1-3.housingcdn.com/4f2250e8/c53d9196548a8aa39a13020e1c2dfbde/v0/fs/bhalchandra_prospera-ravet-pune-n_b_bhondve_group.jpeg.webp"/>

              </div>

              <div className=" mt-2 m-2" align="left ">

              <span> <b>Bhalchandra Prospera</b> </span>
              <br/>

              <span className="text-sm">by N B Bhandeve group</span>

              </div>

              <div className="mt-2 m-2" align="left">

              <span className="text-sm " >2 BHK Apartment<br/> </span>

              <span className="text-gray-500 text-sm">Rawet Pimpri- Chinchwad...</span>

              </div>


              <div className="ml-4" align="left">

              <b>$70.63L</b>

              </div>
              </box>


              <box className= "border-2 p-2" >

              <div className="w-64 h-40 ">

              <img className="h-40 w-64"
                src="https://is1-2.housingcdn.com/4f2250e8/b081e691c61b9c2541352576cd991a01/v0/large/marigold_calendula-pimple_nilakh-pune-audumbar_homes_llp.jpeg.webp"/>

              </div>

              <div className=" mt-2 m-2" align="left ">

              <span> <b>Bhalchandra Prospera</b> </span>
              <br/>

              <span className="text-sm">by N B Bhandeve group</span>

              </div>

              <div className="mt-2 m-2" align="left">

              <span className="text-sm " >2 BHK Apartment<br/> </span>

              <span className="text-gray-500 text-sm">Rawet Pimpri- Chinchwad...</span>

              </div>


              <div className="ml-4" align="left">

              <b>$70.63L</b>

              </div>
              </box>


              <box className= "border-2 p-2" >
              <div className="w-64 h-40 ">

              <img className="h-40 w-64"
                src="https://is1-3.housingcdn.com/4f2250e8/8ecc790cace4191c778a469b15b53acb/v0/large/sukhwani_palms-wagholi-pune-sukhwani_promoters__builders.jpeg.webp"/>

              </div>

              <div className=" mt-2 m-2" align="left ">

              <span> <b>Bhalchandra Prospera</b> </span>
              <br/>

              <span className="text-sm">by N B Bhandeve group</span>

              </div>

              <div className="mt-2 m-2" align="left">

              <span className="text-sm " >2 BHK Apartment<br/> </span>

              <span className="text-gray-500 text-sm">Rawet Pimpri- Chinchwad...</span>

              </div>


              <div className="ml-4" align="left">

              <b>$70.63L</b>

              </div>
              </box>


            </Tabs>

          </Box>

        </div>

      </div>

    );
  }
  export default FeaturedProject;