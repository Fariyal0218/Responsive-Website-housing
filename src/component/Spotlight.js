import React from "react";

const sectionStyle = {

  height: "70vh",

  backgroundImage:
    "url('https://is1-3.housingcdn.com/4f2250e8/6a97d877c8b3703d66e97bb581ee70db/v0/fs-large/meriton_tower-ambegaon_budruk-pune-shubh_laxmi_infrastructure__developers_and_spar_infracon.jpeg.webp') ",

  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

};

const Spotlight = () => {

  return (

    <div>
      <div className="flex  justify-between mt-20" align="left">
        <div className="lg:ml-4 ml-4">
          <h1 className="text-3xl  ">
            In <span className="font-bold text-3xl ml-2">Spotlight</span>
          </h1>
          <p className=" mt-2 text-gray-500" align="left">
            Find your best place to live with us.
          </p>
        </div>

        <div className="hidden md:block lg:mr-44 mr-12">
          <a className=" ">
            <img
              src="https://is1-3.housingcdn.com/4f2250e8/6a97d877c8b3703d66e97bb581ee70db/v0/small/meriton_tower-ambegaon_budruk-pune-shubh_laxmi_infrastructure__developers_and_spar_infracon.jpeg"
              className="h-16 w-32"
            />
            <p>Meriton Tower</p>
          </a>
        </div>
      </div>

      <div className=" border-2  h-96 lg:mx-40 " style={sectionStyle}>
        <div>
          <img
            src="	https://c.housingcdn.com/demand/s/common/assets/spotlight-bg.d46303b9.svg"
            width="477px"
            height="240px"
          />
        </div>

        <div className="flex w-62 h-28 lg:mt-[-25%] p-6 mt-[-55%] md:mt-[-30%]">
          <img
            className="border"
            src="https://is1-3.housingcdn.com/0b8ad14c/337bc8daa1d299b32e9b54d505ce3919/v0/medium.jpg.webp"
          />

          <div className="info-card-title  p-2 overflow-hidden" align="left">
            <b>Shubh Laxmi Infrastructure &amp;...</b>

            <div className=" info-card-details mt-4 mr-96">
              <div className="hidden md:block">
                <b>2006</b>
              </div>
              <div className="hidden md:block text-gray-400">Year estd.</div>

              <div className="mt-[-67%] " align="right">
                {" "}
              </div>

              <div className="ml-28 mt-20 text-gray-400" align="right">
                Projects
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block flex text-gray-400 mt-2 p-2 " align="left">
          <p>
            From a single project, Sai Shraddha <br />
            Developers have grown to beco...{" "}
          </p>

         
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
