import { Paper, Typography } from '@mui/material'
import React from 'react'


const CarouselCard = ({ profileImg, name, title, followers, fund}) => {
  return (
    <Paper sx={{
        width: '234px',
        height: '330px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: '5%'
    }}>
        <img src={profileImg} alt={name} style={{ height: '94px', width: '94px'}} />
        <Typography variant='h4'
        sx={{
            fontFamily: 'Gotham',
            fontWeight: 700,
            fontSize: '1.6rem'
        }}>{name}</Typography>
        <Typography variant='body2'
        sx={{
            fontFamily: 'Gotham',
            fontWeight: 300,
            fontSize: '.6rem'
        }}>{title}</Typography>
        <Typography variant='h5'
        sx={{
            fontFamily: 'Gotham',
            fontWeight: 700,
            fontSize: '1.6rem',
            color: 'orange'
        }}>{followers}</Typography>
        <Typography variant='h5'
        sx={{
            fontFamily: 'Gotham',
            fontWeight: 700,
            fontSize: '1.6rem'
        }}>{fund}</Typography>
    </Paper>
  )
}

export default CarouselCard