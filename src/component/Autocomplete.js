
import {
    TextField,
    Select,
  } from "@mui/material";

  import React, { Component ,useState} from 'react';
import { useForm, Controller } from "react-hook-form";


const defaultValues = {
    TextField: "",
    Select: "",
    Select: { value: "vanilla", label: "Vanilla" },
  
  };

function Autocomplete(){

    const {  control } = useForm({ defaultValues });

    return(
        <form>
        
        <div  className="container">
        
        <section>
        <label>MUI autocomplete</label>
        <MuiAutoComplete control={control} />

      </section>

      <section>
        <label>React Select</label>
        <Controller
          as={Select}
          options={options}
          name="ReactSelect"
          isClearable
          control={control}
        />
      </section>
      </div>
      </form>

    )
}
export default Autocomplete