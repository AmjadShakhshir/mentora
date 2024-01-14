import { Grid, Paper, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

import { styles } from '../../../assets/styles/featuresCard';

const FeaturesCard = ({ number, img, text, textPara }) => (
  <Grid item xs={12} sm={6} md={4} lg={3} sx={styles.item}>
    <Paper elevation={1} sx={styles.paper}>
      <Box sx={styles.box}>
        <Typography variant='h5' flexBasis={'30%'} sx={styles.number}>{number}</Typography>
        <Box flexBasis={'30%'} sx={styles.imgBox}><img src={img} alt="" /></Box>
      </Box>
      <Typography variant='h5' sx={styles.text}>{text}</Typography>
      <Typography variant='body2' sx={styles.textPara}>{textPara}</Typography>
    </Paper>
  </Grid>
);

FeaturesCard.propTypes = {
  number: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textPara: PropTypes.string.isRequired,
};

export default FeaturesCard;