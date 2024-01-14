import { Card, CardActions, CardContent, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { styles } from '../../../assets/styles/caseCardBig';

const CaseCardBig = ({imgUrl, altText, spanText, title, link, symbol}) => {
    return (
        <Card sx={styles.card}>
                <CardContent sx={styles.cardContent}>
                        <img src={imgUrl} alt={altText} />
                        <Typography sx={styles.spanText}>{spanText}</Typography>
                        <Typography sx={styles.title}>{title}</Typography>
                        <CardActions>
                                <Link href="#" sx={styles.link}>{link}{symbol}</Link>
                        </CardActions>
                </CardContent>
        </Card>
    )
}

CaseCardBig.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    spanText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
};

export default CaseCardBig