import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import FeaturesCard from "./FeaturesCard";
import { Buttons } from "../../components";

const Features = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent:'center',
      padding: '40px 60px',
      gap: '30px',
    }}>
        <Box>
            <Typography variant='h5'
            sx={{
              fontFamily: 'Recoleta',
              color: '#F5A34C',
              fontWeight: 700,
              fontSize: '1.35rem',
            }}>Our Bread And Butter</Typography>
            <Typography variant='h3'
            sx={{
              fontFamily: 'Gotham',
              color: 'black',
              fontWeight: 600,
              paddingBlock: '15px 5px',
              fontSize: '2.7rem'
            }}>We Build A Brand That Resonates With Your Niche</Typography>
            <Typography variant='h4'
            sx={{
              color: '#F5A34C',
              fontFamily: 'Gotham',
              fontWeight: 700,
              fontSize: '1.6rem',
            }}>Roadmap</Typography>
            <Buttons />
        </Box>

        <Grid container spacing={4}>
            <FeaturesCard number={1}
            text={'Define Your Target'} textPara={'Identify Your Desired Target For The Next Quarter.'} />
            <FeaturesCard number={3}
            text={'North Star'} textPara={'Set Goals And Metrics To Stay On Track.'} />
            <FeaturesCard number={5}
            text={'Convert More'} textPara={'Cultivate Community Through Belonging And Ugc.'} />
            <FeaturesCard number={2}
            text={'In-Depth Analysis'} textPara={'We Analyze Your Business, Define Your Audience, And Find The Perfect Channel To Engage Them.'} />
            <FeaturesCard number={4}
            text={'Build & Sustain'} textPara={'Create A Strong Brand Identity With Viral Content And Our Influencer Community For Rapid Exposure.'} />
            <FeaturesCard number={6}
            text={'Succeed & Scale'} textPara={'Boost Revenue With Our Proven Strategies And Optimize For Maximum Results.'} />
        </Grid>

    </Box>
  )
}

export default Features