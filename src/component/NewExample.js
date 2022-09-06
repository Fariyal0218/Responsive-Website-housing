import React from "react";
import { Controller, useForm,FieldError} from "react-hook-form";
import * as yup from "yup";
import CreatableSelect from "react-select";
import{Button} from "@mui/material";

import { yupResolver } from "@hookform/resolvers/yup";

const NewExample=()=>{

    const formSchema = yup.object().shape({
      
      sports: yup.array().of(yup.object().shape({

            value: yup.number(),
            label: yup.string(),

          })
        ).min(1, "Please select one skill"),
        
  }).required();


  const {
    control,
    handleSubmit,
    inputRef,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),

    defaultValues:{
        sports:'',
    }

});

const sports = [

   {  value: "1", label: "Cricket"} ,
    {value: "2", label: "Football"} ,
     {value: "3", label: "Soccer"} ,
     {value: "4", label: "Badminton"} ,
     {value: "5", label: "Tennis"} ,
     {value: "6", label: "Javline"} ,
     {value: "7", label: "Hockey" },
     {value: "8", label: "Kabaddi" },
     {value: "9", label: "Chess" },
     {value: "10", label: "Carrom"} ,

  ];

  const onSubmit = (data) => {

    console.log(data);

    reset();

  };

    return(
          <div className="" align="center">
            
             <form onSubmit={handleSubmit(onSubmit)} >

                <div className="mt-6 w-52" >

                <Controller
                name='sports'
                control={control}
                defaultValue={[]}
                render={({field:{ref,...field},
                fieldState:{error},})=>(
                    <CreatableSelect
                    inputRef={inputRef}
                    {...field}
                    ref={null}
                    placeholder={<div>Sports</div>}
                    isMulti
                    name='sports'
                    options={sports}
                    />
                )}
                />

                <p className="text-red-700">{errors.sports?.message}</p>

            </div>

            <div>
          <br/>
          <Button type="submit" variant="contained">
            Submit
          </Button>

          <Button onClick={()=> reset()}>Reset</Button>
        </div>
             </form>
             </div>


    )
}
export default NewExample