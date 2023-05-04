import { Box, BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import React, { useState } from "react";
import { images } from '../constants';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TimelineIcon from '@mui/icons-material/Timeline';

const Footer = () => {
    const [value, setValue] = useState(0);
  
    const CustomBottomNavigation = (props) => {
        return (<BottomNavigation
            sx={{
                bgcolor: '#f5a34c',
            }}
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            {props.children}
        </BottomNavigation>
        );
    }
  return (
    <Box width={'100%'} height={'400px'} bgcolor={'#f5a34c'} component={'footer'}
    display={'grid'} sx={{ placeItems: 'center'}} padding={'60px'}>
        <img src={images.logoLight} alt="logo" />
        <Typography paddingTop={'10px'} variant='h2' color={'white'} fontWeight={700} fontFamily={'Gotham'}>We Make The Difference</Typography>
        <CustomBottomNavigation>
                <BottomNavigationAction label="Twitter" 
                    icon={<TwitterIcon />} />
                <BottomNavigationAction label="Instagram" 
                    icon={<InstagramIcon />} />
                <BottomNavigationAction label="Facebook" 
                    icon={<FacebookIcon />} />
                <BottomNavigationAction label="Timeline" 
                    icon={<TimelineIcon />} />
            </CustomBottomNavigation>
    </Box>
  )
}

export default Footer