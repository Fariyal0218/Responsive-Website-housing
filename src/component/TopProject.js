import React from "react";

const Topproject = () => {

  return (

    <div>
      <div>
        <div className=" mt-20 ml-[-50%] ">
          <h1 className="text-3xl ">
            Top <span className="font-bold text-3xl ml-2">Projects</span>
          </h1>
          <p className="ml-10 mt-2 text-gray-500">
            Best developers in Pune to explore
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10">
        <box className="border-2 mt-9 w-auto ml-24">
          <img
            className="h-64 w-full"
            src="https://is1-2.housingcdn.com/4f2250e8/031f169d7bf4b8bc52399c0adff437ce/v0/large/24k_stargaze-bavdhan-pune-kolte-patil_developers.jpeg.webp"
          ></img>

          <div className="grid grid-cols-2">
            <div className="ml-2">
              <span className="text-base  mt-8    ">
                <b>24k stargaze</b>
              </span>
              <br/>
              <span className="text-xs  text-gray-600  ">
                by Kolte-Patil Developers
              </span>
              <br/>
              <div className="mt-4">
                <span className=""> 3,4, 4.5 BHK Apartments</span>
              </div>
              <span className="text-xs  text-gray-600 ">
                bavdhan,Paud Road, Pune
              </span>
            </div>
            <div>
              <div className="mt-5">
                <span className="text-base ml-28 mt">
                  <b>$1.9cr-4.5cr</b>
                </span>
                <br/>
                <span className=" text-xs  text-gray-600 ml-28">Price</span>
              </div>
            </div>
          </div>
        </box>


        <box className="border-2 mt-9 w-auto mr-24 h-2.2">

          <img src="https://is1-3.housingcdn.com/4f2250e8/66a07c141d9bf347ea012eca333a55cf/v0/fs/pride_wellington-dhanori-pune-pride_builders_llp.jpeg.webp"></img>

          <div className="grid grid-cols-2">

            <div className="ml-2">
              <span className="text-base ml-2 mt-8    ">
                <b> pride Wellington</b>
              </span>
              <br/>
              <span className="text-xs text-gray-600">
                {" "}
                by Pride Builders LIp{" "}
              </span>
              
              <br/>
              <div className="mt-4">
                <span className="text-xm "> 2,3 BHK Apartments</span>
              </div>
              <span className=" text-xs text-gray-600">
                Charohli Budruk, Pune
              </span>
            </div>
            <div>
              <div className="mt-5">
                <span className="text-base ml-28 mt">
                  <b>$64.24L-94.77L</b>
                </span>

                <br/>
                <span className="ml-28 text-xs text-gray-600">Price</span>
              </div>

            </div>
          </div>
        </box>
      </div>
    </div>


  );
};

export default Topproject;
