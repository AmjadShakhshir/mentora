import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

const HeaderCard = ({ amount = '0', span1 = '', span2= '' }) => {
  return (
    <>
      <Typography variant='h2' fontWeight={700}>{amount}</Typography>
      <Typography variant='h6' fontSize={18} fontWeight={700} color={'#7f7f7f'}>{span1} {span2}</Typography>
    </>
  );
};

HeaderCard.propTypes = {
  amount: PropTypes.string.isRequired,
  span1: PropTypes.string.isRequired,
  span2: PropTypes.string.isRequired,
};

export default HeaderCard