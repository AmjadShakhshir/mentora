import { Card, CardActions, CardContent, Link, Typography } from '@mui/material';
import React from 'react'

const CaseCardBig = ({imgUrl, altText, spanText, title, link, symbol}) => {
  return (
    <Card sx={{ minWidth: 275,
                height: '100%',
                bgcolor: 'black',
                color: 'white',
                borderRadius: '22px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
        <CardContent sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px 10px 20px 40px',
            justifyContent: 'center',
            alignItems:'flex-start',
            gap: '5px'
        }}>
            <img src={imgUrl} alt={altText} />
            <Typography variant='body2' fontSize={'1.3rem'} fontWeight={300} pt={'20px'}>{spanText}</Typography>
            <Typography variant='h4' fontWeight={700} fontSize={'2.6rem'}>{title}</Typography>
            <CardActions>
                <Link href="#"
            underline="none" variant='body2' color={'#F5A34C'} 
            sx={{ fontFamily: 'Gotham', 
                  fontWeight: 600,
                  fontSize: '1.35rem'
            }}>{link}{symbol}</Link>
            </CardActions>
        </CardContent>
    </Card>
  )
}

export default CaseCardBig