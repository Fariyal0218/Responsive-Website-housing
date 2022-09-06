import React from "react";
import { Box } from "@mui/material";
import AdUnitsOutlinedIcon from "@mui/icons-material/AdUnitsOutlined";
import SearchIcon from "@mui/icons-material/Search";


const sectionStyle = {
  height: "70vh",


  backgroundImage:

    "url('https://c.housingcdn.com/demand/s/common/assets/buyCover.0c89fb91.jpg') ",

  backgroundRepeat: "no-repeat",

  backgroundSize: "cover",

};

const Home = () => {
  return (
    <div style={sectionStyle}>
      <div>
        <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a class="flex items-center">
              <img
                className="h-5 inline"
                src="https://c.housingcdn.com/demand/s/common/assets/housing.df1a39a7.png"
                alt="Housing.com"
              />
            </a>

            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                class="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4  pl-3 text-white mt-1.5 rounded md:bg-transparent  md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    <AdUnitsOutlinedIcon style={{ color: "#fff" }} />
                    Download App
                  </a>
                </li>

                <li>
                  <div className="bg-white rounded-sm flex  gap-1 w-40 h-8">
                    <div className="pt-1 pl-3">
                      <a
                        href="#"
                        class="block py-2 pr-4  text-purple-500 ml-[-20%]  rounded md:bg-transparent  md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        List Property
                      </a>
                    </div>
                    <div className="bg-red-600 h-5 mt-1.5 w-12">
                      <a
                        href="#"
                        class="block py-2 pr-4 pl-3  text-white  rounded md:bg-transparent  md:p-0 dark:text-white"
                        aria-current="page"
                      >
                        Free
                      </a>
                    </div>
                  </div>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 mt-1.5 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Saved
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-white  mt-1.5 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    News
                  </a>
                </li>

                <li>
                  <div className="bg-white rounded-3xl flex  gap-4 h-9 w-20">
                    <div className="flex h-2 w-28 pt-1 pr-3">
                      <a href="#" class="" aria-current="page">
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/ui-ux-set/24/menu-mini-512.png"
                          className="mt-[-20%] "
                        />
                      </a>
                      <a href="#" class="" aria-current="page">
                        <img
                          src="https://c.housingcdn.com/demand/s/common/assets/tenant-avatar.81d688a4.png"
                          className="h-22 w-72"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="pt-8 ">
        <h1 className="text-white  text-4xl pb-4">
          Properties to buy in
          <strong class="bold"> Pune</strong>
        </h1>
        <p className="text-white font-bold text-xl pb-6">
          Yahan Search Khatam Karo
        </p>
      </div>

      <div className="bg-black opacity-50 mr-48 h-40 w-50 ml-44 mt-12 pl-8">
        <div>
          <div className="flex w-50">
            <ul className="flex flex-col mt-4  pl-32 text-white pt-5 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium">
              <li >
                <a href="#" className="">
                  BUY
                </a>
              </li>
              <li>
                <a href="#" className="">
                  RENT
                </a>
              </li>
              <li>
                <a href="#" className="">
                  COMMERCIAL
                </a>
              </li>
              <li>
                <a href="#" className="">
                  PG/CO-LIVING
                </a>
              </li>
              <li>
                <a href="#" className="">
                  PLOTS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex mt-[-10%] ">
        <div className="mt-8 ml-72 w-54 z-40">
          <div>

            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              class="text-gray-500 bg-white   focus:outline-none  font-medium  text-sx px-4 py-2.5 h-14 w-40 text-center inline-flex items-center  "
              type="button"
            >
              Pune{" "}
              <svg
                class="w-5 h-5 ml-14  text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

          
          </div>
        </div>

        <div className="z-40">
          <div class="flex items-center justify-center  pt-8  ">
            <div class="flex border-2 h-14  border-gray-200 ">
              <input
                type="text"
                class="px-4 py-2 w-96"
                placeholder="Search for locality,landmark,project,or builder"
              />

              <button class="px-4  text-white w-36 bg-green-400 border-l ">
                <SearchIcon />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "70vh" }}
        color="white"
        fontSize={44}
      ></Box>
    </div>
  );
};
export default Home;
