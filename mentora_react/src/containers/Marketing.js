import React from 'react'
import { Box, Typography } from '@mui/material';
import '../fonts/fonts.css';
import EastIcon from '@mui/icons-material/East';

const Marketing = () => {
  return (
   <Box maxWidth="xl"
    sx={{
        display: 'flex',
        justifyContent:'center',
        padding: '80px 60px',
    }}>
    <Typography variant='h2'
    sx={{
        color: '#F5A34C',
        fontFamily:'Recoleta',
        fontWeight: '700',
        borderRight: '2px solid black',
        paddingRight: '5%',

    }}>Tailored <br />Tactics</Typography>
    <Typography variant='h4' fontFamily={'Gotham'} pl={'5%'} maxWidth='sm' fontSize={35} fontWeight={600}
    >Customized Marketing And Strategies 
    <Typography variant='span' color={'#F5A34C'}> Management</Typography> <br /> 
    Start <EastIcon fontSize='large'/>Finish.</Typography>
   </Box>
  )
}

export default Marketing