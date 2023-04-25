import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{ bgcolor: '#000',
            borderRadius: 22}}>
        <Toolbar>
            <Box display={'flex'} flexGrow={1}>
                <img src="../../assets/logo.png" alt="logo" />
            </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
            
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} marginLeft={0.5}>
                Menu
            </Typography>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}