import { useState } from "react";
import Select from "react-select";
    
    const options = [

      { value: "one", label: "One" },
      { value: "two", label: "Two" }
   
    ];

function Exampls() {

      const [value, setValue] = useState("one");
    
      const handleChange = (value) => {

        setValue(value);

      };
    
      return (

        <div>

          <Select

            name="form-field-name"
            value={value}
            onChange={handleChange}
            options={options}
            
          />

          <button onClick={() => setValue(null)}>reset</button>

        </div>

      );

}
export default Exampls