// React Select dropdown with yup Validation

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";


  const SignupSchema = yup.object({
    
      iceCreamType: yup.object().shape({

        label: yup.string().required('please select one ice-cream'),
        value: yup.string().required(),
        
      })
    })
    .required();

function Practice() {


    const { register, handleSubmit, control, formState: { errors }} = useForm({

        resolver: yupResolver(SignupSchema)

      });
    
      const onSubmit = (data) => {

         console.log({data});
           
        };


  return (
    

    <form onSubmit={handleSubmit(onSubmit)}>
     
      <Controller

        name="iceCreamType"
        control={control}
        render={({ field }) => {

          return (

            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
              ]}
            />
          );
        }}
      />

      {errors.iceCreamType && <p style={{color:'red'}}>{errors.iceCreamType.label?.message}</p>}

      <input type="submit" />

    </form>

  );
}

export default Practice

