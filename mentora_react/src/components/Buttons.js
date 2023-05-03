import React from 'react';
import { Button } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Buttons = () => {
  return (
    <Button variant="contained"
      sx={{ textAlign: 'center',
            backgroundColor: '#F5A34C',
            fontFamily: 'Gotham',
            fontWeight: '700',
            fontSize: '1rem',
            width: '231px',
            height: '55px',
            borderRadius:'22px',
            paddingTop: '20px',
            }}
            endIcon={<CallMadeIcon />}
            >Get Started</Button>
  )
}

export default Buttons