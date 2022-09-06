import React from "react";

function Register(){

    return(


    <div class="w-full md:w-96 md:max-w-full mx-auto">

        <div class="p-6 border border-gray-300 sm:rounded-md">
            
            <form >

                <label class="block mb-6">
                    <span class="text-gray-700">Email address</span>
                        <input name="email" type="email"
                        class="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50
                        "
                        placeholder="Enter Email"
                        required/>
                        </label>

                    <label class="block mb-6">
                        
                        <span class="text-gray-700">Password</span>
                        <input name="password" type="password"
                        class="
                            block
                            w-full
                            mt-1
                            border-gray-300
                            rounded-md
                            shadow-sm
                            focus:border-indigo-300
                            focus:ring
                            focus:ring-indigo-200
                            focus:ring-opacity-50 "
                        minlength="6"
                        placeholder="(must be 6+ chars)"
                        required/>

                    </label>

                    <div class="mb-6">
                        <div class="mt-2">
                            <div>
                                <label class="inline-flex items-center">
                                <input
                                    name="tos"
                                    value="yes"
                                    type="checkbox"
                                    class="
                                    text-indigo-600
                                    border-gray-300
                                    rounded
                                    shadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-offset-0
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                                    " required/>

                                <span class="ml-2">I agree with the TOS</span>
                            </label>
                             </div>
                            </div>
                        </div>

                    <div class="mb-6">
                        <button
                        type="submit"
                        class="
                            h-10
                            px-5
                            text-indigo-100
                            bg-indigo-700
                            rounded-lg
                            transition-colors
                            duration-150
                            focus:shadow-outline
                            hover:bg-indigo-800">
                        
                        Sign Up
                        
                        </button>

                    </div>

                       
                </form>
             </div>
        </div>

    )
}
export default Register