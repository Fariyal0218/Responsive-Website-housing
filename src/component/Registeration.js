//react hook form with tailwind css


import React from "react";
import { useForm } from "react-hook-form";


 function Registeration() {

  const {  handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };
   
  return (

        <form className="w-full " onSubmit={handleSubmit(onSubmit)} >

            <div className="form-control w-60 mb-5 ml-96">
                
                 <label className="">

                      <span className="text-secondary font-semibold text-lg">Email</span>
                    
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="border-solid border-2 w-full rounded-full"
                      
                    />


                  </div>


                  <div className="form-control w-60 ml-96">

                    <label className="">

                      <span className="text-secondary font-semibold text-lg"> Password</span>
                   
                    </label>

                    <input
                      type="password"
                      placeholder="Enter Password" 
                      className="border-solid border-2 w-full rounded-full"
                     
                    />

                  </div>        

          <button className="mt-4 mr-64 font-semibold" type="submit" >submit</button>

    </form>
  );
}
export default Registeration