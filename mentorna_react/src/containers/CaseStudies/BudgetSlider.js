import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './BudgetSlider.scss';

function BudgetSlider() {
  const [budget, setBudget] = React.useState(500000); // set initial budget to $500,000
  
  const handleBudgetChange = (event) => {
    let newBudget = event.target.value.replace(/[^0-9]/g, ''); // remove any non-numeric characters from input
    newBudget = Math.max(100000, Math.min(10000000, newBudget)); // constrain budget to range $100,000 to $10,000,000
    setBudget(parseInt(newBudget)); // convert to integer and update state
  };

  const formatBudget = (budget) => {
    return budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // add comma separators to budget value
  };

  return (
    <Box sx={{ width: '70%', display:'flex', flexDirection:'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant='body2' fontWeight={700} fontFamily={'Gotham'}>My Goal For Next Quarter Is</Typography>

      <Typography color={'#F5A34C'} variant='h4' fontWeight={700} fontFamily={'Gotham'}>${formatBudget(budget)}</Typography>
      
      <Grid container spacing={3} alignItems="center">
        <Grid item color={'white'}>
          <Typography variant='h5' color={'#6f6f6f'} fontFamily={'Recoleta'}>$100,000</Typography>
        </Grid>
        <Grid item xs>
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
            min="100000" 
            max="10000000" 
            step="100" 
            value={budget} 
            onChange={handleBudgetChange} 
            id="budget-slider"
          />
        </Grid>
        <Grid item color={'white'}>
          <Typography variant='h5' color={'#6f6f6f'} fontFamily={'Recoleta'}>$10,000,000</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default BudgetSlider