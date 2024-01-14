import { Box, Button, Grid } from '@mui/material';
import React from 'react'
import {useState} from 'react';

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <Grid container spacing={4} >
   {time.map(times => {
    return (
    <Grid item xs={4} sm={2} > 
      <Button variant="outlined" onClick={(e)=> displayInfo(e)}> {times} </Button>
    </Grid>
        )
     })}
    <Box component={'div'}>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </Box>
 </Grid>
  )
}

export default Times;