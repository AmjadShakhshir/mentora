import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const CaseCard = ({spanText, title}) => {
  return (
    <Card sx={{ minWidth: 275, height: '100%', bgcolor: 'black', color: 'white', borderRadius: '22px'}}>
        <CardContent>
          <Typography variant='h4' fontWeight={'700'} color={'#F5A34C'}>{title}</Typography>
          <Typography variant='body1' fontSize={'.8rem'} fontWeight={'300'}>{spanText}</Typography>
      </CardContent>
    </Card>
  )
}

export default CaseCard