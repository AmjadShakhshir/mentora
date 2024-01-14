import { Box, Typography } from '@mui/material';

import { styles } from '../../assets/styles/niche';

const Niche = () => {
  return (
    <Box component={'section'} sx={styles.section}>
        <Typography variant='h6' sx={styles.title}>Built For Your Niche</Typography>
        <Typography variant='h3' sx={styles.heading}>Spot-On Branding:</Typography>
        <Typography variant='h3' sx={styles.heading1}> Aligning Your Audience And Their Values</Typography>
    </Box>
  )
}

export default Niche