import { Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';

import '../../../assets/styles/carousel.css';
import { styles } from '../../../assets/styles/carouselCard';

const CarouselCard = ({ profileImg, name, title, followers, fund}) => {
    return (
        <Paper sx={styles.paper}>
            <Avatar
                    imgProps={{ style: { borderRadius: "50%" } }}
                    className="avatar"
                    src={profileImg}
                />
            <Typography variant='h4' sx={styles.name}>{name}</Typography>
            <Typography variant='body2' sx={styles.title}>{title}</Typography>
            <Typography variant='h5' sx={styles.followers}>{followers}</Typography>
            <Typography variant='h5' sx={styles.fund}>{fund}</Typography>
        </Paper>
    )
}

CarouselCard.propTypes = {
    profileImg: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    followers: PropTypes.string,
    fund: PropTypes.string
}

export default CarouselCard