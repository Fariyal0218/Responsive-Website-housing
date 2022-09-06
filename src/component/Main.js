import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {Button, IconButton,InputAdornment,TextField,FormControl,Radio,FormControlLabel,RadioGroup,FormLabel,FormGroup,Checkbox,
  InputLabel,Select,MenuItem,Autocomplete,} from "@mui/material";
import CreatableSelect from "react-select/creatable";
import React, { useState } from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import { Controller, useForm,FieldError} from "react-hook-form";
import * as yup from "yup";
import "yup-phone";


const Main= () => {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

    const [responsiveValue, setResponsiveValue] = React.useState(new Date());
    


  const formSchema = yup.object().shape({

      firstName: yup.string().required("Firstname is required"),

      lastName: yup.string().required("Lastname is required"),

      mobileNumber: yup.string().phone().required(),

      email: yup.string().email().required("E-Mail is required"),

      password: yup.string().min(4).max(12).required(),

      confirmPassword: yup.string().oneOf([yup.ref("password"), null]),

      os: yup.string().required("Select OS is required"),

      states: yup.string().required("Select your state"),

      responsiveCalender:yup.date().default(()=> new Date(responsiveValue)),

      gender:yup.string().required("Select Gender"),

      language:yup.string().required("Select atleast one langauge"),

          // date:yup.date().required(),
          // age: yup.number().min(18).max(50).required(),
          // mobileCalender:yup.date().default(()=> new Date(mobileValue)).required(),
          // desktopCalender:yup.date().default(()=> new Date(desktopValue)).required(),
         
          sports: yup.array().of( yup.object().shape({
             
            value: yup.number(),
            label: yup.string(),

            })

          ).min(1, "Please select one skill"),
    })
    .required();

  const { control,handleSubmit,inputRef,register,reset,formState: { errors },} = useForm({

       resolver: yupResolver(formSchema),

         defaultValues: {
                firstName: "",
                lastName: "",
                mobileNumber: "",
                email: "",
                password: "",
                confirmPassword: "",
                gender: "",
                os: "",
                states: "",
                sports:'',
                responsiveCalender:"",
 
         },
 
   });


  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const sports = [
    { value: "1", label: "Cricket" },
    { value: "2", label: "Football" },
    { value: "3", label: "Soccer" },
    { value: "4", label: "Badminton" },
    { value: "5", label: "Tennis" },
    { value: "6", label: "Javline" },
    { value: "7", label: "Hockey" },
    { value: "8", label: "Kabaddi" },
    { value: "9", label: "Chess" },
    { value: "10", label: "Carrom" },
  ];

//   const handleFormSubmit = (dates) => {
    
//   };

  const onSubmit = (data) => {

    console.log(data);

    reset();

  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="flex justify-center m-4">
          <div className="space-y-4 mx-4">

            <div>

              <Controller
                control={control}
                name="firstName"
                render={({ field: { value, onChange } }) => (
                  <TextField
                  fullWidth
                    label="First Name"
                    value={value}
                    onChange={onChange}
                    {...register("firstName")}
                  />
                )}
              />

              <p className="text-red-700">{errors.firstName?.message}</p>
           
            </div>

            <div>
              <Controller
                control={control}
                name="lastName"
                render={({ field: { value, onChange } }) => (
                  <TextField
                  fullWidth
                    label="Last Name"
                    value={value}
                    onChange={onChange}
                    {...register("lastName")}
                  />
                )}
              />

              <p className="text-red-700">{errors.lastName?.message}</p>

            </div>


            <div>
              <Controller
                name="mobileNumber"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                  fullWidth
                    label="Mobile Number"
                    value={value}
                    onChange={onChange}
                    {...register("mobileNumber")}
                  />
                )}
              />

              <p className="text-red-700">{errors.mobileNumber?.message}</p>

            </div>


            <div>
              <Controller
                name="email"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <TextField
                  fullWidth
                    label="E-Mail"
                    value={value}
                    onChange={onChange}
                    {...register("email")}
                  />
                )}
              />

              <p className="text-red-700">{errors.email?.message}</p>

            </div>

            <div>
              <Controller
                control={control}
                name="password"
                render={({ field: { value, onChange } }) => (
                  <TextField
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    {...register("password")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />


              <p className="text-red-700">{errors.password?.message}</p>

            </div>

            <div>
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { value, onChange } }) => (
                  <TextField
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={value}
                    onChange={onChange}
                    {...register("confirmPassword")}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                          >
                            {showConfirmPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    // required
                    // {...register("firstName", { required: true})}
                  />
                )}
              />

              <p className="text-red-700">{errors.confirmPassword?.message}</p>
              
            </div>
          </div>


          <div className="space-y-4 mx-4">

            <div>
              <Controller
                control={control}
                name="gender"
                render={({ field: { value, onChange } }) => (
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      name="gender"
                      value={value.gender}
                      onChange={onChange}
                      row
                    >
                      <FormControlLabel
                        key="male"
                        value="male"
                        control={<Radio size="small"/>}
                        label="Male"
                      />
                      <FormControlLabel
                        key="female"
                        value="female"
                        control={<Radio size="small" />}
                        label="Female"
                      />
                      <FormControlLabel
                        key="other"
                        value="other"
                        control={<Radio size="small" />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                )}
              />

              <p className="text-red-700">{errors.gender?.message}</p>

            </div>


            <div>

            <Controller
              control={control}
              name="language"
              render={({ field: { value, onChange } }) => (
                <FormControl>
                  <FormLabel>Language</FormLabel>
                  <FormGroup
                    name="language"
                    value={value}
                    onChange={onChange}
                    row
                  >
                    <FormControlLabel
                      value="marathi"
                      control={<Checkbox />}
                      label="Marathi"
                    />
                    <FormControlLabel
                      value="english"
                      control={<Checkbox />}
                      label="English"
                    />
                    <FormControlLabel
                      value="hindi"
                      control={<Checkbox />}
                      label="Hindi"
                    />
                  </FormGroup>
                </FormControl>
              )}
            />

            <p className="text-red-700">{errors.language?.message}</p>

            </div>

            
          </div>
          <div className="space-y-4 mx-4">
            <div>
            <Controller
              control={control}
              name="os"
              render={({ field: { value, onChange } }) => (
                <FormControl>
                  <InputLabel>Select OS</InputLabel>
                  <Select
                    className='w-72'
                    name="os"
                    label="Select OS"
                    value={value}
                    onChange={onChange}
                    {...register("os")}
                  >
                    <MenuItem value="windows">Windows</MenuItem>
                    <MenuItem value="linux">Linux</MenuItem>
                    <MenuItem value="mac">Mac</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <p className="text-red-700">{errors.os?.message}</p>
            </div>
            <div>
            <Controller
              control={control}
              name="states"
              render={({ field: { value, onChange } }) => (
                <Autocomplete
                  sx={{ alignContent: "center", alignItems: "center" }}
                  className="w-72"
                  options={states}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="List of States"
                      name="states"
                      value={value.states}
                      onChange={onChange}
                      {...register("states")}
                    />
                  )}
                />
              )}
            />
            <p className="text-red-700">{errors.states?.message}</p>
            </div>
            <div>
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DatePicker
                  disableFuture
                  label="Responsive"
                  name='responsiveCalender'
                  openTo="year"
                  // views={["year", "month", "day"]}
                  renderInput={(params) => <TextField name='responsiveCalender' className='w-72' {...register("responsiveCalender")} {...params} />}
                  value={responsiveValue}
                  onChange={(newValue) => {
                    setResponsiveValue(newValue);
                  }}
                />
                <p className="text-red-700">{errors.responsiveCalender?.message}</p>
          </Stack>
            </LocalizationProvider>
            </div>
          </div>
        </div>
        <div>
          <Button type="submit" variant="contained">
            Submit
          </Button>

          <Button onClick={()=> reset()}>Reset</Button>
        </div>
      </form>
    </>
  );
};

export default Main;




// password: yup
// .string()
// .required('Please Enter your password')
// .matches(
//   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
// ),

