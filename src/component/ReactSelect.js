import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";



const SignupSchema = yup
  .object({
    
    iceCream: yup.object().shape({
      label: yup.string().required(),
      value: yup.string().required()
    })
  })
  .required();

function ReactSelect() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });

  const onSubmit = (data) => {
    
    console.log({data});

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     
      <Controller
        name="iceCream"
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

      {errors.iceCream && <p style={{color:'red'}}>{errors.iceCream.label?.message}</p>}

      <input type="submit" />
    </form>
  );
}
export default ReactSelect


