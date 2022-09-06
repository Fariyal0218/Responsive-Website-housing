import { Box, Tabs } from "@mui/material";
import React from "react";



const Topproject = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {

    setValue(newValue);

  };

  return (


    <div>


      <div>
        <div className=" mt-20 p-4" align="left">
          <h1 className="text-3xl ">
            Top
            <span className="text-3xl ml-2">Projects</span>
          </h1>

          <p className="mb-8 text-gray-500">
            Best developers in Pune to explore
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center hidden md:block md:flex p-4">


        <box className="border-2  w-auto ">

          <img
            className="h-64 w-96"
            src="https://is1-2.housingcdn.com/4f2250e8/031f169d7bf4b8bc52399c0adff437ce/v0/large/24k_stargaze-bavdhan-pune-kolte-patil_developers.jpeg.webp"
          />

          <div className="grid grid-cols-2 ">
            <div className="ml-2">
              <span className="text-base  mt-8">
                <b>24k stargaze</b>
              </span>

              <br />

              <span className="text-xs text-gray-600">
                by Kolte-Patil Developers{" "}
              </span>
              <br />

              <div className="mt-4">
                <span className=""> 3,4, BHK Apartments</span>
              </div>

              <span className="text-xs text-gray-600 ">
                {" "}
                bavdhan,Paud Road, Pune{" "}
              </span>
            </div>

            <div>
              <div className="mt-5">
                <span className="text-base  ">
                  {" "}
                  <b>$1.9cr-4.5cr</b>
                </span>
                <br />

                <span className=" text-xs  text-gray-600 ">Price</span>
              </div>
            </div>
          </div>
        </box>



        <box className="border-2  w-auto ">


          <img
            className="h-64 w-96"
            src="https://is1-3.housingcdn.com/4f2250e8/66a07c141d9bf347ea012eca333a55cf/v0/fs/pride_wellington-dhanori-pune-pride_builders_llp.jpeg.webp"
          />

          <div className="grid grid-cols-2">
            <div className="ml-2">
              <span className="text-base  mt-8">
                {" "}
                <b> pride Wellington</b>{" "}
              </span>
              <br />

              <span className="text-xs text-gray-600">
                {" "}
                by Pride Builders LIp{" "}
              </span>
              <br />

              <div className="mt-4">
                <span className="text-xm "> 2,3 BHK Apartments</span>
              </div>

              <span className=" text-xs text-gray-600">
                Charohli Budruk, Pune
              </span>
            </div>

            <div>
              <div className="mt-5">
                <span className="text-base">
                  {" "}
                  <b>$64.24L-94.77L</b>{" "}
                </span>
                <br />

                <span className="text-xs text-gray-600">Price</span>
              </div>
            </div>
          </div>
        </box>
      </div>


      <div className="block md:hidden">

        <Box>
            
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
              <box>

                <div className="border-2 p-2">
                    <div className="w-64 h-40">
                  <img
                    className="h-40 w-64"
                    src="https://is1-2.housingcdn.com/4f2250e8/031f169d7bf4b8bc52399c0adff437ce/v0/large/24k_stargaze-bavdhan-pune-kolte-patil_developers.jpeg.webp"
                  />
                </div>

                <div className="grid grid-cols-2 ">
                  <div className="" align="left">
                    <span className="text-base  mt-8">
                      <b>24k stargaze</b>
                    </span>

                    <br />

                    <span className="text-xs text-gray-600">
                      by Kolte-Patil Developers{" "}
                    </span>
                    <br />

                    <div className="mt-4">
                      <span className=""> 3,4, 4.5 BHK Apartments</span>
                    </div>

                    <span className="text-xs text-gray-600 ">
                      {" "}
                      bavdhan,Paud Road, Pune{" "}
                    </span>
                  </div>

                  <div>
                    <div className="" align="right">
                      <span className="text-base  ">
                        {" "}
                        <b>$1.9cr-4.5cr</b>
                      </span>
                      <br />

                      <span className=" text-xs  text-gray-600 ">Price</span>
                    </div>
                  </div>
                  </div>
                </div>
              </box>

              <box className="border-2 p-2">
                <div  className="w-64 h-40">
                <img
                  className="h-40 w-64"
                  src="https://is1-3.housingcdn.com/4f2250e8/66a07c141d9bf347ea012eca333a55cf/v0/fs/pride_wellington-dhanori-pune-pride_builders_llp.jpeg.webp"
                />

                <div className="grid grid-cols-2">
                  <div className="text-sm" align="left">
                    <span className="text-base  mt-8">
                      {" "}
                      <b> pride Wellington</b>{" "}
                    </span>
                    <br />

                    <span className="text-xs text-gray-600">
                      {" "}
                      by Pride Builders LIp{" "}
                    </span>
                    <br />

                    <div className="mt-4">
                      <span className="text-xm "> 2,3 BHK Apartments</span>
                    </div>

                    <span className=" text-xs text-gray-600">
                      Charohli Budruk, Pune
                    </span>
                  </div>

                  <div>
                    <div className="" align="right">
                      <span className="text-base">
                        {" "}
                        <b>$64.L-94.L</b>{" "}
                      </span>
                      <br />

                      <span className="text-xs text-gray-600">Price</span>
                    </div>
                  </div>
                </div>
                </div>
              </box>
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default Topproject;
