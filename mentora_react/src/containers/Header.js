import React from 'react';
import { Navbar } from '../components';
import { Box, Typography } from '@mui/material';

import { images } from '../constants';
import { Buttons } from "../components";
import '../fonts/fonts.css';

const Header = () => {  

  return (
    <Box maxWidth="xl" p={3}
    sx={{
      display: 'grid',
      backgroundImage: `url(${images.mainBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      width: '100%',
      minHeight: '100vh',
      borderBottom: '113px solid #222222',
    }}>
      <Navbar />
      <Typography pt={37} pb={3}
      sx={{ paddingInline: '15%',
      textAlign: 'center',
      fontWeight: '700'
      }} component="h3" variant='h3'>

       <Typography variant='span' sx={{
        width: '20%',
        border: 'solid 6px #F5A34C',
        borderColor: 'transparent transparent #F5A34C  transparent',
        borderRadius: '100%',
      }} >Boost</Typography> Your Business With Our Tailored Community Growth Strategies.
      </Typography>

      <Box component={'div'} justifySelf={'center'}><Buttons /></Box>

      <Box sx={{
        justifySelf:'center',
        alignSelf:'end',
        width: '60%',
        height: 200,
        backgroundColor: 'black',
        transform:'translate(0, 135px)',
        zIndex:'100',
        display:'flex',
        fontFamily: 'Gotham',
        justifyContent:'space-around',
        alignItems:'center',
      }}>

        <Box color={'white'} 
        sx={{
          height:'70%',
          flexBasis: '30%',
          borderRight:'2px solid #7f7f7f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>

          <Typography variant='h2' fontWeight={700}>+$10M</Typography>
          <Typography variant='h6' fontWeight={700} color={'#7f7f7f'} >Amount <br />Raised</Typography>
        </Box>
        <Box color={'white'}
        sx={{
          height:'70%',
          flexBasis: '30%',
          borderRight:'2px solid #7f7f7f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Typography variant='h2' fontWeight={700}>+2M</Typography>
          <Typography variant='h6' fontWeight={700} color={'#7f7f7f'} >Members <br />Of Community</Typography>
        </Box>
        <Box color={'white'}
        sx={{
          height:'70%',
          flexBasis: '30%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent:'center',
        }}>
          <Typography variant='h2' fontWeight={700}>50</Typography>
          <Typography variant='h6' fontWeight={700} color={'#7f7f7f'} >Funnels <br />Built</Typography>
        </Box>
      </Box>
      
    </Box>
  )
}

export default Header