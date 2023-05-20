import { Typography } from '@mui/material'
import React from 'react'

const HeaderCard = ({amount, span1, span2}) => {
  return (
    <>
        <Typography
            variant='h2'
            fontWeight={700}>{amount}</Typography>
            <Typography
            variant='h6'
            fontSize={18}
            fontWeight={700}
            color={'#7f7f7f'} >{span1} {span2}
        </Typography>
    </>
  )
}

export default HeaderCard