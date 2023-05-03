import { Box, Typography } from '@mui/material'
import React from 'react'

const Niche = () => {
  return (
    <Box component={'section'} sx={{
      padding: '60px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      alignItems: 'center',
      textAlign: 'center'
    }}>
        <Typography variant='h6' sx={{
            fontFamily: 'Recoleta',
            color: '#F5A34C',
            fontWeight: 700,
        }}>Built For Your Niche</Typography>
        <Typography variant='h3'sx={{
            fontFamily: 'Gotham',
            fontWeight: 700,
            width: '60%'
        }}>Spot-On Branding: Aligning Your Audience And Their Values</Typography>
    </Box>
  )
}

export default Niche