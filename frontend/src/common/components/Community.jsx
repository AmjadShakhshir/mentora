import { Box, Typography } from '@mui/material';

import Buttons from './Buttons';
import images from '../../assets/imgs/constants/images';
import { styles } from '../../assets/styles/community';

const Community = () => {
  return (
    <Box component='section' sx={styles.section}>
        <Typography variant='h6' sx={styles.title}>What Makes Us Different</Typography>
        <Box sx={styles.flexBox}>
            <Typography variant='h3' sx={styles.heading}>We Build Communities That Supercharge Businesses</Typography>
            <Buttons flexBasis={'20%'} />
        </Box>
        <Typography variant='subtitle2' sx={styles.subtitle}>Leveraging Over A Decade Of Expertise In Marketing, Branding, And Personal Branding, Along With Our Vast Network Of Prominent Social Media Influencers, We Provide Customised Growth Strategies To Help You Achieve Your Business Goals Within Just Three Months.</Typography>
        <Box component={'section'} sx={styles.imageBox}>
            <img width={'100%'} src={images.community} alt="online meeting discussing about the startups ideas" />
            <Box component={'section'} sx={styles.logoBox}>
                <img src={images.communityLogo} alt="community word with metorna logo" />
            </Box>
        </Box>
    </Box>
  )
}

export default Community