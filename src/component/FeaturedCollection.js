import React from "react"

function FeaturedCollection(){


    return(
        <div>
    
            <div className="mt-20 ml-[-60%] ">
                
            <h1 className="text-3xl ">Featured 
            <span className="font-bold text-3xl ml-2">Collections</span>
          </h1>

            <p className="/ ">
            HandPicked Projects For you
            </p>

               
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-6 justify-items-center mr-12 ml-12 sm:overflow-hidden">

                <div className=" rounded-lg ">
                    <img className="w-88 rounded-lg h-56" src="https://content3.jdmagicbox.com/comp/def_content/estate_agents/default-estate-agents-3.jpg?clr=3a2c2c"/>
                </div>

                <div className=" rounded-lg">
                <img className="w-88 rounded-lg h-56" src="https://is1-2.housingcdn.com/354cef8f/10ea8e414f29e6f69c94f7064727fc15/v0/fs.jpg.webp"/>
                </div>

                <div className=" rounded-lg ">
                <img className="w-88 rounded-lg h-56" src="https://is1-3.housingcdn.com/354cef8f/5e368851e587f29c7527f001a315a747/v0/fs.jpg.webp"/>
                </div>


            </div>
        </div>
    )
}
export default FeaturedCollection