import { Box, Button, Grid } from '@mui/material';
import {useState} from 'react';
import PropTypes from 'prop-types'; // import prop-types

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {

  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)

  function displayInfo(e) {
    if (!info) {
      setEvent(e.target.outerText)
      setInfo(true)
    } else {
      setInfo(false)
    }
  }

  return (
    <Grid container spacing={4} >
      {time.map((times, index) => { // add index parameter
        return (
          <Grid item xs={4} sm={2} key={index}>
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

Times.propTypes = { // validate props
  date: PropTypes.instanceOf(Date).isRequired,
};

Times.defaultProps = {
  date: new Date(),
};
export default Times;