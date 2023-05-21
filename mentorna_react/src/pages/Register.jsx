import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useState, useEffect} from 'react';
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const onChange = (e) => {
  setFormData((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
   }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <>
      <Box
      component={'section'}
      maxWidth={'sm'}
      m={'30px auto'}>
        <Typography variant={'h3'}>
          <FaUser /> Register
        </Typography>
        <Typography variant={'p'}>
          Create Your Account
        </Typography>
        
        <Box
        component={'form'}
        sx={{ display: 'flex',
        flexDirection:
        'column',
        width: '100%'
        }}>
          <FormControl variant="filled">
            <TextField
              placeholder='Enter the name'
              id="name"
              type="text"
              name="name"
              value={name}
              label="Name"
              variant="filled"
              onChange={onChange}
              required
            />
          </FormControl>
          <FormControl variant="filled">
            <TextField
              id="email"
              type="email"
              name="email"
              value={email}
              label="Email Address"
              variant="filled"
              placeholder='Enter the email'
              onChange={onChange}
              required
            />
          </FormControl>
          <FormControl variant="filled">
            <TextField
              id="password"
              type="password"
              name="password"
              value={password}
              label="Password"
              variant="filled"
              placeholder='Enter the password'
              onChange={onChange}
              required
            />
          </FormControl>
          <FormControl variant="filled">
            <TextField
              id="password2"
              type="password"
              name="password2"
              value={password2}
              label="Confirm Password"
              variant="filled"
              placeholder='Confirm the password'
              onChange={onChange}
              required
            />
          </FormControl>
          <Button
          color='error'
          variant="contained"
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          onClick={onSubmit}
          > Register </Button>
        </Box>
      </Box>
    </>
  )
}

export default Register