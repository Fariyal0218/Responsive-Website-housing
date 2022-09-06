import React from "react";

function FeatureProject() {

  return (

    <div>


      <div className="flex  justify-between mt-36  mr-32 ">

        <div className="">

          <h1 className="text-3xl ml-32">
            Featured <span className="font-bold text-3xl ml-2">Projects</span>
          </h1>

          <p className="ml-32 mt-2 text-gray-400">
            Exclusive showcase of top projects
          </p>

        </div>

      </div>

      <div className="grid grid-cols-3 gap-5 mx-24 mt-5">

        <box className= "border-2 w-full h-8/4" >


          <div>

            <img
              className="h-40 w-full"
              src="https://is1-3.housingcdn.com/4f2250e8/c53d9196548a8aa39a13020e1c2dfbde/v0/fs/bhalchandra_prospera-ravet-pune-n_b_bhondve_group.jpeg.webp"
            />

          </div>
          
          <div className=" mt-2 m-2" align="left ">
            <span>
              <b>Bhalchandra Prospera</b>
            </span>
            <br></br>
            <span className="text-sm">by N B Bhandeve group</span>
          </div>
          <div className="mt-2 m-2" align="left">
            <span className="text-sm " >2 BHK Apartment<br/>
            </span>

            <span className="text-gray-500 text-sm">Rawet Pimpri- Chinchwad...</span>
          </div>
          <div className="ml-4" align="left">
            <b>$70.63L</b>
          </div>
        </box>

        <box className="border-2 w-full h-8/4">
          <div>
            <img
              className="h-40 w-full"
              src="https://is1-2.housingcdn.com/4f2250e8/b081e691c61b9c2541352576cd991a01/v0/large/marigold_calendula-pimple_nilakh-pune-audumbar_homes_llp.jpeg.webp"
            ></img>
          </div>
          <div className="ml-4 mt-2" align="left">
            <span>
              <b>Marigold Calendula </b>
            </span>
            <br></br>
            <span className="text-sm">by Audumbar Homes LLP</span>
          </div>
          <div className="mt-2 ml-4" align="left">
            <span  className="text-sm">
              2 BHK Apartment<br/>
            </span>

            <span className="text-gray-500 text-sm">Pimple Nilakh, Pimpri Chi...</span>
          </div>
          <div className="ml-4 mt-2" align="left">
            <b>$83.18L-90.79L</b>
          </div>
        </box>

        <box className="border-2 w-full h-8/4   ">
          <div>
            <img
              className="h-40 w-full"
              src="https://is1-3.housingcdn.com/4f2250e8/b305fbe9dfa256298462782139e1e86c/v0/large/yashada_supreme-moshi-pune-yashada_realty_group.jpeg.webp"
            ></img>
          </div>
          <div className="ml-4 mt-2" align="left">
            <span>
              <b>Yashada Supreme</b>
            </span>
            <br></br>
            <span className="text-sm">By Yashada Realty Group</span>
          </div>
          <div className="mt-2 ml-4" align="left">
            <span className="text-sm">2,3 BHK Apartment<br/>
            </span>

            <span className="text-gray-500 text-sm">Moshi,Pimpri Chinchwad...</span>
          </div>
          <div className="ml-4 m-2 " align="left">
            <b>$37.9L - 56.3 L</b>
          </div>
        </box>
      </div>
    </div>
  );
}
export default FeatureProject;
