import { FormControl, Checkbox, Paper, Grid, Typography, Select, MenuItem, InputLabel, FormGroup, FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import BudgetSlider from './BudgetSlider';
import images from '../../../assets/imgs/constants/images';

const industries = [
    { value: 'it', label: 'Information Technology (IT)' },
    { value: 'health', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'Retail', label: 'Retail' },
    { value: 'hospitality', label: 'Hospitality' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'construction', label: 'Construction' },
  ];

  const targets = [
    { label: 'Technology' },
    { label: 'Content/Influencing' },
    { label: 'Education/E-Learning' },
    { label: 'Others' },
  ];

function AddressForm({ setBusinessForm }) {
  const [industry, setIndustry] = useState('');
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setIndustry(event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setBusinessForm(form);
  }, [form, setBusinessForm]);

  return (
      <Grid container component="main" sx={{ height: '60vh' }}>
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
                {industries.map((industry) => (
                  <MenuItem key={industry.value} value={industry.value}>
                    {industry.label}
                  </MenuItem>
                ))}
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
            {targets.map((target) => (
              <Grid item xs={8} sm={5} key={target.label}>
                <FormControlLabel
                  control={<Checkbox />}
                  label={<Typography variant='body2' fontSize={11}>{target.label}</Typography>}
                />
              </Grid>
            ))}
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
  );
}

AddressForm.propTypes = {
  setBusinessForm: PropTypes.func.isRequired,
};

export default AddressForm;