import React from 'react';
import { Navbar } from '../../components';
import { Box, Grid, Typography } from '@mui/material';

import { images } from '../../constants';
import { Buttons } from "../../components";
import '../../fonts/fonts.css';
import { makeStyles } from '@material-ui/core/styles';
import HeaderCard from './HeaderCard';

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.up('sm')]: {
      borderBottom: '113px solid #222222',
      position: 'relative',
    },
    [theme.breakpoints.down('sm')]: {
      borderBottom: 0,
      marginBottom: '113px',
    },
  },
  img: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: '342px',
      height: '194px',
      paddingTop: '20px',
      alignItems: 'center',
    },
    [theme.breakpoints.down('md')]: {
      display: 'block',
      width: '594px',
      height: '334px',
      paddingTop: '20px',
      alignItems: 'center',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  typo: {
    [theme.breakpoints.up('sm')]: {
      paddingTop: '296px',
      paddingInline: '15%',
      fontWeight: '700',
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '20px',
    },
  },
  triangle: {
    [theme.breakpoints.up('sm')]: {
      width: '30%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      position: 'absolute',
      bottom: '-113px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      bottom: 0,
      height: '50px',
      position: 'relative',
    },
  },
  box: {
    [theme.breakpoints.up('sm')]: {
      paddingRight: '200px',
      borderRight: '1px solid #707070',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '0px',
      borderRight: '0px',
    },
  },
}));

const Header = () => {  
  const classes = useStyles();

  return (
    <Grid 
    p={3}
    justify='center'
    component={'header'}
    className= {classes.header}
    
    sx={{
      backgroundImage: `url(${images.mainBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'stretch',
      width: '100%',
      minHeight: '100vh',
    }}>
      <Navbar />
      <Box
        component={'section'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        marginInline= {'auto'}>

        <img
          src={images.ground}
          alt="many black hands holding soil from ground"
          className={classes.img} />

        <Typography
          pb={3}
          className= {classes.typo}
          component="h3"
          align='center'
          variant='h3'>

            <Typography
            variant='span'
            sx={{
              width: '20%',
              border: 'solid 6px #F5A34C',
              borderColor: 'transparent transparent #F5A34C  transparent',
              borderRadius: '100%',
            }} >Boost</Typography>
        Your Business With Our Tailored Community Growth Strategies.
        </Typography>
        
        <Box
        component={'section'}
        marginBlock={'20px 80px'}
        >
          <Buttons />
        </Box>
        

        {/* The Triangle at the bottom of Header section */}
        <Grid
        container
        spacing={3}
        maxWidth={'md'}
        justify='center'
        bgcolor={'black'}
        className={classes.triangle}
        >

          <Grid item color={'white'} 
          sm={12}
          md={4}
          order={{ sm: 3, md: 1 }}
          className= {classes.box}
          >
            <HeaderCard amount={'$10M'} span1={'Amount'} span2={'Raised'} />
          </Grid>

          <Grid item color={'white'}
          sm={6}
          md={4}
          bgcolor={{ sm: '#272727', md: 'black'}}
          order={{ sm: 1, md: 2 }}
          sx={{
            paddingRight: '200px',
            borderRight: '1px solid #707070',
          }}
          >
            <HeaderCard amount={'+2M'} span1={'Members'} span2={'Of Community'} />
          </Grid>

          <Grid item color={'white'}
          sm={6}
          md={4}
          paddingRight={'200px'}
          bgcolor={{ sm: '#272727', md: 'black'}}
          order={{ sm: 2, md: 3 }}
          >
            <HeaderCard amount={'50'} span1={'Funnels'} span2={'Built'} />
          </Grid>

        </Grid>
      </Box>
    </Grid>
  )
}

export default Header