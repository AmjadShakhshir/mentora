import { useState, useRef, useEffect } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, ClickAwayListener,
Grow, Paper, Popper, MenuItem, MenuList, Stack } from '@mui/material';
import {HiOutlineMenuAlt1} from "react-icons/hi";
import { Link } from 'react-router-dom';

import images from '../../assets/imgs/constants/images';

export default function Navbar() {
    const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
    
  return (
    <Box sx={{ flexGrow: 1 }} component={'nav'}>
      <AppBar position="static"
        sx={{ bgcolor: '#fff',
              borderRadius: 22,
              }}
              xs={{paddingInline: 10}}
              md={{paddingInline: 15}}
              >
        <Toolbar>
            <Box display={'flex'} flexGrow={1} component={'div'}>
                <img src={images.logo} alt="logo" />
            </Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2}}  
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >

            <Typography variant="h6"
            component="div"
            sx={{ display:'inline-flex',
                  flexGrow: 1,
                  pt: 2,
                  fontFamily: 'GothamBold' }} marginRight={1} color={'orange'}
                  >
                Menu
              <HiOutlineMenuAlt1 size={26} style={{color: "orange", transform: 'rotate(180deg)', marginLeft: 5, marginTop: -4}}/>
            </Typography>
            </IconButton>
          </Toolbar>
          </AppBar>
          <Stack direction="row" spacing={2}>
          <div>
            <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        key='home'
                        onClick={handleClose}> 
                        <Link to='/'>Home</Link>
                      </MenuItem>
                      <MenuItem
                        key='login'
                        onClick={handleClose}>
                        <Link to='/login'>Login</Link>
                      </MenuItem>

                      <MenuItem
                        key='register'
                        onClick={handleClose}>
                        <Link to='/register'>Register</Link>
                      </MenuItem>

                      <MenuItem
                        key='dashboard'
                        onClick={handleClose}>
                        <Link to='/dashboard'>Dashboard</Link>
                      </MenuItem>
                    </MenuList>

                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </Box>
  );
}