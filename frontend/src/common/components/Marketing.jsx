import { Box, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import '../../assets/styles/marketing.js';
import { styles } from '../../assets/styles/marketing';

const Marketing = () => (
  <Box maxWidth="xl" sx={styles.box}>
    <Typography variant='h2' sx={styles.title}>Tailored <br />Tactics</Typography>
    <Typography variant='h4' sx={styles.subtitle}>
      Customized Marketing And Strategies <Typography variant='span' sx={{ color: '#F5A34C'}}> Management </Typography>
      Start <EastIcon fontSize='large'/> Finish.
    </Typography>
  </Box>
);

export default Marketing;