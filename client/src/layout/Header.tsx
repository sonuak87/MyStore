import React from 'react'
import {AppBar,Switch,Toolbar,Typography} from '@mui/material';
type Props = {
  
    onChange: () => void;
 
};
 const Header = ({onChange}:Props) => { 
   return (
     <AppBar position="static" sx={{mb:4}}>
        <Toolbar>
          <Typography> MY-STORE <Switch
  onChange={onChange}
  inputProps={{ 'aria-label': 'controlled' }}
/></Typography>
        </Toolbar>
        </AppBar>    
     )
 }
 
 export default Header
 

