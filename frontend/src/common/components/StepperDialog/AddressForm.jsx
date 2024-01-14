import { TextField, Paper, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import images from '../../../assets/imgs/constants/images';

function AddressForm({ setAddressForm }) {
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setAddressForm(form);
  }, [form, setAddressForm]);

  const fields = [
    { id: 'firstName', name: 'firstName', label: 'First name', required: true, autoComplete: 'given-name' },
    { id: 'lastName', name: 'lastName', label: 'Last name', required: true, autoComplete: 'family-name' },
    { id: 'email', name: 'email', label: 'Email', required: true, autoComplete: 'shipping address-line1' },
    { id: 'phone', name: 'phone', label: 'Phone', autoComplete: 'shipping address-line2' },
  ];

  return (
      <Grid container component="main" sx={{ height: '60vh' }}>
          <Grid item 
          container
          xs={12}
          sm={8}
          md={6}
          justifyContent='space-evenly'
          component={Paper}
          elevation={6}
          square gap={2}>
          <Grid item xs={12} sm={6} >
            <img src="" alt="" />
          </Grid>
          <Grid item xs={12} sm={12} pl={4}>
            <Typography align='left' variant="h6" gutterBottom>
              Tell Us About Yourself
            </Typography>
          </Grid>
          {fields.map((field) => (
            <Grid item xs={12} sm={4} key={field.id}>
              <TextField
                required={field.required}
                id={field.id}
                name={field.name}
                label={field.label}
                fullWidth
                autoComplete={field.autoComplete}
                variant="standard"
                onChange={handleChange}
              />
            </Grid>
          ))}
          </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${images.onFocusTarget})`,
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
  setAddressForm: PropTypes.func.isRequired,
};

export default AddressForm;