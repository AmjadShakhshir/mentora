import * as React from 'react';
import { CssBaseline, Paper, Grid, Typography, TextField} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BudgetSlider from './BudgetSlider';
import { images } from '../../constants';

const theme = createTheme();

export default function ChallengeForm() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
   
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
              Please describe the challenge that you require our assistance with.
            </Typography>
          </Grid>
          {/* Scale your budget */}
          <Grid container item xs={12} sm={10}>
            <Typography variant='body2'>
              What is your budget to solve this challenge? (scale)
            </Typography>
              <BudgetSlider step={"100"} mark={'$'} minBudget={3500} maxBudget={50000}/>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextField fullWidth id="hear-about-basic" label="How did you hear about us?" variant="standard" />
          </Grid>
          <Grid container item xs={12} sm={10}>
            <Typography variant='body2'>
              What is your duration you plan to utilise our partnership? (scale)
            </Typography>
            <BudgetSlider step={"1"} mark={'Month'} minBudget={3} maxBudget={12} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${images.chartStat})`,
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