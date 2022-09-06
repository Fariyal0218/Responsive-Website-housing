import React from "react";

const sectionStyle = {
  

  height: "70vh ",

  backgroundImage: 
    "url('https://is1-3.housingcdn.com/4f2250e8/6a97d877c8b3703d66e97bb581ee70db/v0/fs-large/meriton_tower-ambegaon_budruk-pune-shubh_laxmi_infrastructure__developers_and_spar_infracon.jpeg.webp') ",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

};

const InSpotlight = () => {

  return (

    <div>

      <div className="flex  justify-between mt-20 "align="left">

        <div className="">

          <h1 className="text-3xl m-2">
            In <span className=" text-3xl ml-2">Spotlight</span>
          </h1>

          <p className=" mt-2 text-gray-500">
            Find your best place to live with us.
          </p>

        </div>

        <div className=" mr-14">
          <a className="hidden md:block ">
            <img
             className="h-16 w-32"
              src="https://is1-3.housingcdn.com/4f2250e8/6a97d877c8b3703d66e97bb581ee70db/v0/small/meriton_tower-ambegaon_budruk-pune-shubh_laxmi_infrastructure__developers_and_spar_infracon.jpeg"
             
            />
            <p>Meriton Tower</p>
          </a>
        </div>
      </div>

      <div className=" border-2 lg:h-96 mx-40 " style={sectionStyle}>

        <div className="hidden md:block" >
          <img className="md"
            src="	https://c.housingcdn.com/demand/s/common/assets/spotlight-bg.d46303b9.svg"
            width="477px"
            height="240px"
          />
        </div>


        <div className="flex w-62 h-28 mt-[-25%] p-4">

          <img
            className="border"
            src="https://is1-3.housingcdn.com/0b8ad14c/337bc8daa1d299b32e9b54d505ce3919/v0/medium.jpg.webp"
          />

          <div className="info-card-title  p-2" align="left ">
            <b>Shubh Laxmi Infrastructure &amp;...</b>

            <div className=" info-card-details mt-4 mr-96">
              <div>
                <b>2006</b>
              </div>
              <div className="text-gray-400">Year estd.</div>

              <div className="mt-[-67%] " align="right">
                {" "}
              </div>

              <div className="ml-28 mt-20 text-gray-400 md:mt-22" align="right">
                Projects
              </div>
            </div>
          </div>
        </div>
        <div className=" flex text-gray-400 mt-2 p-2 md:mt-1" align="left">
          <p>
            From a single project, Sai Shraddha <br />
            Developers have grown to beco...{" "}
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default InSpotlight;
