import React from "react";


const HousingEdge = () => {
  
  
return (

<div>

    <div className= " flex h-90 " >

      <div className="">

        <div className="flex mt-14  gap-6 ">

          <div className="" align="left">
            
            <h1 className="text-3xl md:text-4xl lg:ml-4 ml-4">
              Housing <span className=" text-3xl">Edge</span>{" "}
            </h1>

          </div>

          
          <div>

            <button class="bg-transparent  text-purple-700 font-semibold mt-3  px-4 border border-purple-500  rounded">
              Explore All
            </button>
          </div>
        </div>



        <div className="flex lg:space-x-24 grid grid-cols-4 md:space-x-10 m-2  ">

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28 mt-10 lg:ml-24 md:ml-10 shadow-md bg-gray-100 mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/payRent.5de06b93.svg"
                  className=" h-18 w-14  "
                />
              </div>
              <div>
                <h1 className="mt-2 ml-[-20%] text-sm">Pay Rent</h1>
              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28 bg-gray-100  mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/rentAgreement.3cda80b1.svg"
                  className="h-18 w-14"
                />
              </div>
              <div>

                <h1 className="mt-2 text-sm overflow-hidden"> 
                Agreement
                </h1>

              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28  bg-gray-100  mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/homeLoans.6b8be74d.svg"
                  className="h-18 w-14"
                />
              </div>
              <div>
                <h1 className="mt-2 text-sm text-sm">Home Loans</h1>
              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28  bg-gray-100  mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/homeInteriors.92c117cd.svg"
                  className="h-18 w-14"
                />
              </div>
              <div>
                <h1 className="mt-2 text-sm">
                  Home <br />
                  Interiors
                </h1>
              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28 bg-gray-100 mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/solarRooftop.df1370be.svg"
                  className="h-18 w-14"
                />
              </div>
              <div>
                <h1 className="mt-2 text-sm">Solar Rooftop</h1>
              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28  bg-gray-100 mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/tenantPlans.e65c2ac6.svg"
                  className="h-18 w-14"
                />
              </div>
              <div>
                <h1 className="mt-2 text-sm">Housing Premium</h1>
              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28  bg-gray-100 mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/packersMovers.6f9dfe9a.svg"
                  className="h-18 w-14"
                />
              </div>
              <div>
                <h1 className="mt-2 text-sm">Packers & 
                <br/>Movers</h1>
              </div>
            </a>
          </div>

          <div className="border-2 rounded-xl lg:h-32 lg:w-32 h-28  bg-gray-100 mt-10  shadow-md mr-2">
            <a>
              <div className="ml-4 pt-2">
                <img
                  src="https://c.housingcdn.com/demand/s/common/assets/propertyManagement.e029c450.svg"
                  className="h-18 w-14"
                />
              
              </div>
              <div>
                <h1 className="mt-2 text-sm overflow-hidden"> Mangement </h1>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>


    <div>

    </div>

    </div>
  );
};

export default HousingEdge;
