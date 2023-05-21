import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, ClickAwayListener,
Grow, Paper, Popper, MenuItem, MenuList, Stack } from '@mui/material';
import {HiOutlineMenuAlt1} from "react-icons/hi";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { images } from '../constants';
import '../fonts/fonts.css'


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    position: 'relative',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: '25%',
    right: '25%',
    zIndex: 2,
    overflow: 'hidden',
    marginLeft: '-8px',
    width: '594px',
    height: '334px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default function Navbar() {
    const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  
  const classes = useStyles();
  
  return (
    <Box sx={{ flexGrow: 1 }} component={'nav'}>
      <AppBar position="static"
        sx={{ bgcolor: '#fff',
              borderRadius: 22,
              }}
              xs={{paddingInline: 10}}
              md={{paddingInline: 15}}
              className={classes.appBar}>
        <Toolbar>
            <Box display={'flex'} flexGrow={1} component={'div'}>
                <img src={images.logo} alt="logo" />
            </Box>
            <img src={images.ground} alt="many black hands holding soil from ground" className={classes.img} />
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