import { Box, Grid, Typography } from '@mui/material';

import HeaderCard from './HeaderCard';
import { headerCardData } from './headerCardData';
import Navbar from '../Navbar';
import Buttons from '../Buttons';
import images from '../../../assets/imgs/constants/images';

const Header = () => {  

  return (
  <Grid 
    p={3}
    justify='center'
    component={'header'} 
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
        />

        <Typography
          p={3}
          component="h3"
          align='center'
          variant='h3'
          >
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
        <Grid container spacing={3} maxWidth={'md'} justify='center' bgcolor={'black'}>
          {headerCardData.map((data, index) => (
            <Grid
              key={index}
              item
              color={'white'}
              sm={data.sm}
              md={data.md}
              order={data.order}
              bgcolor={data.bgcolor}
              sx={data.sx}
            >
              <HeaderCard amount={data.amount} span1={data.span1} span2={data.span2} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  )
}

export default Header