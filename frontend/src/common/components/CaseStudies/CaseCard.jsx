import { Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { styles } from '../../../assets/styles/caseCard';

const CaseCard = ({ spanText, title }) => (
  <Card sx={styles.card}>
    <CardContent>
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.spanText}>{spanText}</Typography>
    </CardContent>
  </Card>
);

CaseCard.propTypes = {
  spanText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CaseCard;