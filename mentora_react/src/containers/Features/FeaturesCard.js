import React from 'react'
import { Grid, Paper, Typography, Box } from '@mui/material';
import { images } from "../../constants";

const FeaturesCard = (props) => {
  return (
    <Grid item xs={4}>
        <Paper elevation={1} sx={{
          backgroundColor:'#DDDDDD',
          width: '213px',
          height: '179px',
          borderTopRightRadius: '22px',
          borderBottomLeftRadius: '22px',
          display: 'flex',
          flexDirection:'column',
          justifyContent: 'space-around',
          padding: '5px 13px',
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
              <Typography variant='h5' flexBasis={'30%'} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 700,
                borderRadius: '50%',
                color:'white',
                backgroundColor: 'black'
              }}>{props.number}</Typography>

              <Box flexBasis={'30%'} bgcolor={'#F5A34C'} sx={{
                borderRadius: '50%',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}><img src={images.arrow} alt="" /></Box>
          </Box>
          <Typography variant='h5' sx={{
            fontWeight: 700,
          }}>{props.text}</Typography>

          <Typography variant='body2' fontSize={10}>{props.textPara}</Typography>
        </Paper>
    </Grid>
  )
}

export default FeaturesCard