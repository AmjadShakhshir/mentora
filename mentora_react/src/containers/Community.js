import { Box, Typography } from '@mui/material'
import React from 'react'
import { Buttons } from '../components'
import { images } from '../constants'

const Community = () => {
  return (
    <Box component='section' padding={'60px'} bgcolor={'#F8F8F8'}>
        <Typography variant='h6'sx={{
            fontFamily: 'Recoleta',
            color: '#F5A34C',
            fontWeight: 700,
        }}>What Makes Us Different</Typography>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBlock:'10px'
        }}>
            <Typography variant='h3' sx={{
                fontFamily:'Gotham',
                fontWeight: 700,
                fontSize: '2.3rem',
                flexBasis: '40%',
            }}>We Build Communities That Supercharge Businesses</Typography>
            <Buttons flexBasis={'20%'} />
        </Box>
        <Typography variant='subtitle2' fontSize={14} pb={3}>Leveraging Over A Decade Of Expertise In Marketing, Branding, And Personal Branding, Along With Our Vast Network Of Prominent Social Media Influencers, We Provide Customised Growth Strategies To Help You Achieve Your Business Goals Within Just Three Months.</Typography>
        <Box component={'section'} sx={{
            display: 'flex',
            justifyContent:'center',
            position: 'relative',
        }}>
            <img width={'100%'} src={images.community} alt="online meeting discussing about the startups ideas" />
            <Box component={'section'} sx={{
                position: 'absolute', 
                transform: 'translate(50px, 240px)',
                backgroundColor: 'white',
                padding: '15px',
                borderRadius: '22px'
            }}>
                <img src={images.communityLogo} alt="community word with metorna logo" />
            </Box>
        </Box>
    </Box>
  )
}

export default Community