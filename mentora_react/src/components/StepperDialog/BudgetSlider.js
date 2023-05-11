import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './BudgetSlider.scss';

function BudgetSlider({step, mark, minBudget, maxBudget}) {
  const [budget, setBudget] = React.useState(0); // set initial budget to $500,000
  
  const handleBudgetChange = (event) => {
    let newBudget = event.target.value.replace(/[^0-9]/g, ''); // remove any non-numeric characters from input
    newBudget = Math.max(minBudget, Math.min(maxBudget, newBudget)); // constrain budget to range $100,000 to $10,000,000
    setBudget(parseInt(newBudget)); // convert to integer and update state
  };

  const formatBudget = (budget) => {
    return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add comma separators to budget value
  };

  return (
    <Box sx={{ width: '100%'}}>
      
      <Grid container spacing={2}
        alignItems={'center'}  >
        <Grid item color={'white'} xs={3}
          sm={3}>
          <Typography variant='body2' color={'#6f6f6f'}>{mark} {minBudget}</Typography>
        </Grid>
        <Grid item xs={3}
          sm={3}>
          <input 
          className='slider'
            style={{width: "100%", 
            'WebkitAppearance': 'none',
            'backgroundColor': '#6f6f6f',
            'height': '2px',
            'borderRadius': '2px',
            'outline': 'none',
            'marginTop': '10px',
          }}
            type="range" 
            min={minBudget} 
            max={maxBudget} 
            step={step} 
            value={budget} 
            onChange={handleBudgetChange} 
            id="budget-slider"
          />
        </Grid>
        <Grid item color={'white'} xs={3}
          sm={3}>
          <Typography variant='body2' color={'#6f6f6f'}>{mark}{maxBudget}</Typography>
        </Grid>
        <Grid item xs={3}
          sm={3}>
          <Typography pl='12px' color={'#F5A34C'} variant='body2' fontWeight={700}>{mark}{formatBudget(budget)}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default BudgetSlider