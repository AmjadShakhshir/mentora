import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

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
    console.log(formData);
  };

  return (
    <>
      <Box
      component={'section'}
      maxWidth={'sm'}
      m={'30px auto'}>
        <Typography variant={'h3'} display={'flex'} alignItems={'center'} gap={2}>
          <FaSignInAlt /> Login
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
          <Button
          color='error'
          variant="contained"
          type="submit"
          sx={{ mt: 3, mb: 2 }}
          onClick={onSubmit}
          > Login </Button>
        </Box>
      </Box>
    </>
  )
}

export default Login