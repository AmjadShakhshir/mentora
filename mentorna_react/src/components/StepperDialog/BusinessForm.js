import * as React from 'react';
import { CssBaseline, FormControl, Checkbox, Paper, Grid, Typography, Select, MenuItem, InputLabel, FormGroup, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BudgetSlider from './BudgetSlider';
import { images } from '../../constants';

const theme = createTheme();

export default function AddressForm() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
   const [industry, setIndustry] = React.useState('');

  const handleChange = (event) => {
    setIndustry(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '60vh' }}>
        <CssBaseline />
          <Grid item 
          container
          xs={12}
          sm={8}
          md={6}
          py={4}
          justifyContent='space-evenly'
          component={Paper}
          elevation={6}
          square gap={2}>
            {/* Logo */}
          <Grid item xs={12} sm={6} >
            <img src="" alt="" />
          </Grid>
          {/* Title */}
          <Grid item xs={12} sm={10}>
            <Typography align='left' variant="h6" gutterBottom>
              Tell Us About Your Business
            </Typography>
          </Grid>
          {/* Select industry type */}
          <Grid item xs={12} sm={10} >
            <FormControl fullWidth variant='standard'>
              <InputLabel id="industry-type">Industry</InputLabel>
              <Select
                labelId="industry-type"
                id="industry"
                label="Industry"
                value={industry}
                onChange={handleChange}
              >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'it'}>Information Technology (IT)</MenuItem>
              <MenuItem value={'health'}>Healthcare</MenuItem>
              <MenuItem value={'finance'}>Finance</MenuItem>
              <MenuItem value={'manufacturing'}>Manufacturing</MenuItem>
              <MenuItem value={'Retail'}>Retail</MenuItem>
              <MenuItem value={'hospitality'}>Hospitality</MenuItem>
              <MenuItem value={'automotive'}>Automotive</MenuItem>
              <MenuItem value={'construction'}>Construction</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>
        <FormGroup>
          <Typography pl={5} align='left' variant="body1" gutterBottom>
            Target Audience(Market):
          </Typography>
          <Grid item container justifyContent={'center'}
          xs={10} gap={1} pl={4} align='left'
          sm={8}>
              <Grid item xs={8} sm={5}>
                <FormControlLabel control={<Checkbox />}
                label={<Typography variant='body2' fontSize={11}>Technology</Typography>} />
              </Grid>
              <Grid item xs={8} sm={5}>
                <FormControlLabel control={<Checkbox />}
                label={<Typography variant='body2' fontSize={11}>Content/Influencing</Typography>} />
              </Grid>
              <Grid item xs={8} sm={5}>
                <FormControlLabel control={<Checkbox />}
                label={<Typography variant='body2' fontSize={11}>Education/E-Learning</Typography>} />
              </Grid>
              <Grid item xs={8} sm={5}>
                <FormControlLabel control={<Checkbox />}
                label={<Typography variant='body2' fontSize={11}>Others</Typography>} />
              </Grid>
          </Grid>
        </FormGroup>
        <Grid container item xs={12} sm={10}>
          <Typography>
            Quarterly Recurring Revenue (QRR):(scale)
          </Typography>
            <BudgetSlider step={"100"} mark={'$'} minBudget={5000} maxBudget={500000}/>
        </Grid>
        <Grid container item xs={12} sm={10}>
          <Typography>
            Your next QRP goal is:(scale)
          </Typography>
          <BudgetSlider step={"100"} mark={'$'} minBudget={100000} maxBudget={10000000} />
        </Grid>
          </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${images.suitMoney})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}