import React from "react";
import { Box, TableContainer, Table, TableHead, TableRow, TableCell,TableBody ,Paper,IconButton,InputAdornment,TextField} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SearchIcon from "@material-ui/icons/Search";
import { TuneOutlined } from "@material-ui/icons";


const useStyles = makeStyles({

    table:{

        minWidth:650,
    },
   
    tableHeaderCell:{
        
        fontWeight: 'bold',

    }

});


function OrganizationTable({userData,sendData}){


    const obj={

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

      
  const classes = useStyles();

    return(
        <div >

        <Box  p={3}  sx={{width: 7/12,

        marginLeft: 30,  position: 'absolute', }}>

        < TextField  fullWidth label="Search by Organization Code / Name" variant="outlined" 

        InputProps={{
            endAdornment:(
            <InputAdornment >

            <IconButton >

                <SearchIcon/>
                
            </IconButton>



            <IconButton >
            <TuneOutlined

            fontSize="inherit"
            style={{ fontSize: "30px" }}
            />

            </IconButton>

            </InputAdornment>
        )
    }}
     />

    </Box >

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
                    
                    {userData.map((row) => (
    
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

                            <IconButton  aria-label="edit" color="primary" onClick={()=>sendData(row)} >
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
export default OrganizationTable