import React from "react";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

import { Container,TextField,Grid,Box, IconButton } from "@mui/material";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import "./styles.css";

import { TableContainer, Table, TableHead, TableRow, TableCell,TableBody ,Paper,} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';



const useStyles = makeStyles({

    table:{

        minWidth:650,
    },
   
    tableHeaderCell:{
        
        fontWeight: 'bold',

    }

});

function FormData() {

    const Schema = yup
    
        .object({

        organizationCode: yup.string().matches(/^[0-9]+$/, "Must be only digits")
        .min(5, "minimum 5 digit organization Code is required").required("Organization code is required"),

        oname: yup.string().required("Organization Name is required")
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),

        address: yup.string().required('Address is required'),

        selectCountry:yup.object().shape({
        
            label: yup.string().required('Please select one Country'),
            value: yup.string().required()

        }),

        selectState:yup.object().shape({

            label: yup.string().required('Please select one State'),
            value: yup.string().required()
        
        }),

        selectDistrict:yup.object().shape({

        label: yup.string().required('Please select one District'),    
        value: yup.string().required()
        
        }),

        selectTaluka:yup.object().shape({

            label: yup.string().required('Please select one Taluka'),    
            value: yup.string().required()
                
        }),

        selectCity:yup.object().shape({

            label: yup.string().required('Please select one City'),    
            value: yup.string().required()
                
         }),

        selectPincode:yup.object().shape({

            label: yup.string().required('Please select one Pincode'),    
            value: yup.string().required()
                
         }),

        selectArea:yup.object().shape({

            label: yup.string().required('Please select Area'),    
            value: yup.string().required()
                
         }),

        cNumber:yup.string().required("Please enter Contact Number").matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Contact Number Must be 10 digits').max(10, 'Contact Number Must be 10 digits'),

        email: yup.string().required('Email is required').email('Email is invalid'),

        website: yup.string().required('website is required').url()
        
        }) .required();

    
        const{register,setValue,handleSubmit,control,formState:{errors},reset} =useForm({

        mode:"onChange",

        resolver:yupResolver(Schema),

    });
    


      
    const userObj={

        organizationCode :'',
        oname:'',
        address:'',
        selectCountry:'',
        selectState:'',
        selectDistrict:'',
        selectTaluka:'',
        selectCity:'',
        selectPincode:'',
        selectArea:'',
        cNumber:'',
        email:'',
        website:'',
        active:''  
        
    }


    const[user,setUser]=React.useState(userObj)

    const [userList,setUserList]=React.useState([])

    
    const saveData = (event) => {

        event.preventDefault()
        
        //console
        setUserList([...userList,user])
        setUser(userObj)

        reset();
    };

   


    return(


        <div>

        <Box>

        <div  className=" mb-0 lg:mr-8 md:mr-8 " align="right" >

        <IconButton  color="error" > 

        <CancelPresentationIcon /> 

        </IconButton>  

        </div>


        <fieldset className="border border-black text-left lg:pl-10 w-76 h-82  md:py-5  ml-8 mr-8 rounded ">

        <legend className="px-2 font-bold text-gray-700"> Create Organization </legend>

        <form onSubmit={saveData}>
            
            <Container>

                <Box >


                <div className="container">

                <Grid container spacing={1} justifyContent="center">


                <Grid item xs={6} md={3}>

                <TextField  multiline  fullWidth rows={1}
                id="organizationCode" name="organizationCode" margin="dense"
                label="Organization Code" variant="outlined" 
                inputProps={{style: {height: 18},}}

                
                {...register('organizationCode')} error={errors.organizationCode ? true:false}/>

                <p style={{color:'red'}}>{errors.organizationCode ?.message}</p>
                
                </Grid>


                <Grid item xs={6} md={3}>
                <TextField multiline rows={1} fullWidth 
                id="oname" type="text" name="oname" margin="dense"
                label="Organization Name" variant="outlined" 
                inputProps={{ style: { height: 18, }, }}

                
                {...register('oname')} error={errors.oname ? true:false}/>

                <p style={{color:'red'}}>{errors.oname ?.message}</p>

                </Grid>


                <Grid item xs={12} md={6}>

                <TextField multiline rows={1} fullWidth 
                id="address" type="text" name="address" margin="dense"
                label="Organization Address" variant="outlined" 
                inputProps={{ style: { height: 18, },   }}
                    
                {...register('address')} error={errors.address ? true:false}/>
                
                <p style={{color:'red'}}> {errors.address ?.message}</p>

                </Grid>


                <Grid item xs={6} md={3} >

                <Controller

                    multiline rows={1} 
                    name="selectCountry"
                    control={control}

                    render={({field}) =>{

                    return(
                        <Select
                        name="selectCountry"
                        placeholder="Select Country"
                        
                        {...field}

                            options={[

                                {value: "India", label: "India"},
                              
                                {value: "Afghanistan", label: "Afghanistan"},
                              
                                {value: "Canada",  label: "Canada"},
                              
                                {value: "Iraq",label: "Iraq"},

                            ]}
                            />
                        );
                    }}
                />

        {errors.selectCountry &&<p style={{color:'red'}}>{errors.selectCountry.label?.message}</p>}
                </Grid>


                <Grid item xs={6} md={3}>

                <Controller

                multiline rows={1} 
                name="selectState"
                control={control}

                render={({field}) =>{

                return(

                    <Select
                     name="selectState"
                    placeholder="Select State"
                    {...field}
                    
                    options={[
                        
                        {value: "Maharashtra",label: "Maharashtra"},
                    
                        {value:"Gujrat",label:"Gujrat"},
                    
                        {value:"Goa",label:"Goa"},
                    
                        {value:"Andhra Pradesh",label:"Andhra Pradesh"},

                     ]}
                     />
                        );
                     }}
                 />
            
            {errors.selectState && <p style={{color:'red'}}>{errors.selectState.label?.message}</p>}
                </Grid>



                    <Grid item xs={6} md={3}>

                     <Controller

                            multiline rows={1} 
                            name="selectDistrict"
                            control={control}

                            render={({field}) =>{

                            return(

                                <Select
                                 name="selectDistrict"
                                placeholder="Select District"
                               
                                {...field}
                                
                                options={[
                                    
                                    { value:"AhmedNagar",label:"AhmedNagar"},
                                
                                    {value:"Pune",label:"Pune"},
                                
                                    { value:"Ahmedabad", label:"Ahmedabad"},
                                
                                    {value:"Karnataka",label:"Karnataka"},
                                
                                    { value:"Tirupati", label:"Tirupati"},

                                ]}
                                    />
                                );
                          }}
                    
                        />

                            {errors.selectDistrict && <p style={{color:'red'}}>{errors.selectDistrict.label?.message}</p>}
                    </Grid>



                        <Grid item xs={6} md={3}>

                         <Controller

                            multiline rows={1} 
                            name="selectTaluka"
                            control={control}
                            render={({field}) =>{

                            return(

                                <Select

                                placeholder="Select Taluka"
                                name="selectTaluka"

                                {...field}
                                
                                options={[
                                    
                                    { value:"Jamkhed", label:"Jamkhed"},
                                
                                    {value:"Bhor",label:"Bhor"},
                                
                                    {value:"Dhandhuka",label:"Dhandhuka"},
                                
                                    { value:"Bagalkote", label:"Bagalkote"},
                                
                                    {value:"Mallavaram",label:"Mallavaram"},

                                ]}
                            />
                            );
                            }}

                            />

                        {errors.selectTaluka && <p style={{color:'red'}}>{errors.selectTaluka.label?.message}</p>}
                        </Grid>


                            <Grid item xs={6} md={3}>

                            <Controller

                                    multiline rows={1} 
                                    name="selectCity"
                                    control={control}

                                    render={({field}) =>{

                                    return(

                                        <Select
                                        name="selectCity"
                                        placeholder="Select City"
                                        {...field}
                                        
                                        options={[
                                            
                                        { value:"Jamkhed", label:"Jamkhed"},
                                        
                                        {value:"Bhor",label:"Bhor"},
                                        
                                        {value:"Dhandhuka",label:"Dhandhuka"},
                                        
                                        { value:"Bagalkote", label:"Bagalkote"},
                                        
                                        {value:"Mallavaram",label:"Mallavaram"},

                                        ]}
                                    />
                                );
                            }}

                        />

                {errors.selectCity && <p style={{color:'red'}}>{errors.selectCity.label?.message}</p>}
                    </Grid>

                                <Grid item xs={6} md={3}>

                                <Controller
                                    
                                    name="selectPincode"
                                    control={control}

                                    render={({field}) =>{

                                    return(

                                        <Select
                                        name="selectPincode"
                                        placeholder="Search Pin Code"
                                        {...field}
                                        
                                        options={[

                                                { value:"413201", label: "413201"},
                                                { value:"413010", label: "413010"},
                                                { value:"413222", label: "413222"},
                                                { value:"413678", label: "413678" },
                                                { value:"411011", label: '411011'},
                                                { value:"413366",label: '413366'},
                                                { value:"413411", label: '413411' },
                                                
                                        ]}
                                    />
                                 );
                              }}

                        />

                {errors.selectPincode && <p style={{color:'red'}}>{errors.selectPincode.label?.message}</p>}

                         </Grid>



                                <Grid item xs={6} md={3}>

                                <Controller

                                     multiline rows={1} 
                                     name="selectArea"
                                     control={control}

                                     render={({field}) =>{

                                     return(
                                                
                                    <Select
                                       name="selectArea"
                                        placeholder="Select Area"
                                        {...field}
                                                
                                    options={[
                                                    
                                        { value:"Jamkhed", label:"Jamkhed"},
                                                
                                        {value:"Bhor",label:"Bhor"},
                                                
                                        {value:"Dhandhuka",label:"Dhandhuka"},
                                                
                                        { value:"Bagalkote", label:"Bagalkote"},
                                                
                                        {value:"Mallavaram",label:"Mallavaram"},

                                        ]}
                                     />  
                                    );
                                 }}
                             />

            {errors.selectArea && <p style={{color:'red'}}>{errors.selectArea.label?.message}</p>}
                    </Grid>



                        <Grid item xs={6} md={3}>
                                    
                            <TextField multiline rows={1} fullWidth 
                                    id="cNumber" type="text" name="cNumber" 
                                    placeholder="Contact Number" variant="outlined" 

                                    inputProps={{ style: { height: 18,  },}}

                                            
                                    {...register('cNumber')} error={errors.cNumber ? true:false}/>
                                
                                    <p style={{color:'red'}}>{errors.cNumber?.message}</p>

                        </Grid>


                             <Grid item xs={6} md={3}>
                                    
                                    <TextField  multiline rows={1} fullWidth
                                     placeholder="Email Id" id="email"  margin="none"
                                    type="email" name="email" variant="outlined" 
                                    inputProps={{style: { height: 18, },}}

                                        
                                    {...register('email')} error={errors.email ? true:false}/>
                                      
                                    <p style={{color:'red'}}>{errors.email?.message}</p>
                                </Grid>


                                <Grid item xs={6} md={3}>
                                    
                                     <TextField  multiline rows={1} fullWidth 
                                     name="website" placeholder="Website" margin="none"
                                     type='text' variant="outlined"
                                     inputProps={{ style: {  height: 18, }, }}

                                {...register('website')} error={errors.website ? true:false}/>

                                 <p style={{color:'red'}}>{errors.website?.message}</p>
                            
                                </Grid>

                                <Grid item xs={12} md={6}>


                                <FormControlLabel

                                multiline rows={1} fullWidth
                                name="active" control={<Checkbox  defaultChecked/>}
                                label="Active" 
                                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}/>
                              
                                </Grid>

                            </Grid>
                                 
                                 </div>

                             <Box display="flex" justifyContent="right" alignItems="right" >

                             <Button variant="text" sx={{width:200}}  style={{ fontSize: "18px", color:"darkblue"}} onClick={()=> reset()}>Reset</Button>

                             <Button type="submit" variant="outlined" sx={{width:200}}  style={{ fontSize: "18px", color:"darkblue"}} value='Submit' >Add</Button> 


                             </Box>

                            
                       
                 </Box>


            </Container>

        </form>

     </fieldset>

     </Box>
     
     <UserList userList={userList}/>

     </div>
    )
}




function UserList({userList}){

      
  const classes = useStyles();

    return(

        <div >

        <Box alignItems="center">

        
            <TableContainer component={Paper} className={classes.TableContainer}>

                
                <Box mt={12}>

                <h2 className="text-gray-500 font-medium m-4" align="left">Organizations </h2>

                <Table className={classes.table} aria-label="simple table" >
                    <TableHead>
                        <TableRow>

                        <TableCell  align="center" className={classes.tableHeaderCell} >Organization Code</TableCell>

                        <TableCell  align="center" className={classes.tableHeaderCell} >Organization Name</TableCell>

                        <TableCell  align="center" className={classes.tableHeaderCell} >Organization Address</TableCell>

                        <TableCell  align="center" className={classes.tableHeaderCell} >Country</TableCell>

                        <TableCell  align="center" className={classes.tableHeaderCell} >State</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >District</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Taluka</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >City</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Pincode</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Area</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Number</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Email</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Website</TableCell>
                        
                        <TableCell  align="center" className={classes.tableHeaderCell} >Status</TableCell>
                        
                        <TableCell align="center" className={classes.tableHeaderCell}>Actions</TableCell>

                       
                        </TableRow>
                    </TableHead>

                <TableBody>
                    
                    {userList.map((row) => (
    
                    <TableRow key={row.name}>
    
                        <TableCell  component="th" scope="row">{row.organizationCode}</TableCell>            
                       
                        <TableCell  align="center">{row.oname}</TableCell>
                       
                        <TableCell  align="center">{row.address}</TableCell>
                       
                        <TableCell  align="center">{row.selectCountry}</TableCell>
                       
                        <TableCell  align="center">{row.selectState}</TableCell>
                       
                        <TableCell  align="center">{row.selectDistrict}</TableCell>
                       
                        <TableCell  align="center">{row.selectTaluka}</TableCell>
                       
                        <TableCell  align="center">{row.selectCity}</TableCell>
                       
                        <TableCell  align="center">{row.selectPincode}</TableCell>
                       
                        <TableCell  align="center">{row.selectArea}</TableCell>
                       
                        <TableCell  align="center">{row.cNumber}</TableCell>
                       
                        <TableCell  align="center">{row.email}</TableCell>
                       
                        <TableCell  align="center">{row.website}</TableCell>
                       
                        <TableCell  align="center">{row.active}</TableCell>


                         <TableCell align="center">

                            <IconButton  aria-label="edit" color="primary"  >
                            <ModeEditIcon/>
                            </IconButton>
                        
                        
                            <IconButton color="error" variant="outlined">
                            <DeleteIcon/>
                            </IconButton>
                        
                    </TableCell>
    
                </TableRow>
                    
                    ))}

                </TableBody>
                </Table>
                </Box>

            </TableContainer>
        </Box>      

        </div>  

    )
}
export default FormData