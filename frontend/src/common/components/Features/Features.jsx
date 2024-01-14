import { Box, Typography, Grid } from '@mui/material';

import FeaturesCard from "./FeaturesCard";
import Buttons from "../Buttons";
import { featuresData } from "./featuresData";
import { styles } from '../../../assets/styles/features';

const Features = () => (
  <Box sx={styles.box}>
    <Box sx={{ marginTop: '20px'}}>
      <Typography variant='h5' sx={styles.title}>Our Bread And Butter</Typography>
      <Typography variant='h3' sx={styles.subtitle}>We Build A Brand That Resonates With Your Niche</Typography>
      <Typography variant='h4' sx={styles.roadmap}>Roadmap</Typography>
      <Buttons />
    </Box>

    <Grid container spacing={4} >
      {featuresData.map((feature, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} sx={{ display: 'flex'}}>
          <FeaturesCard number={feature.number} img={feature.img} text={feature.text} textPara={feature.textPara} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Features;