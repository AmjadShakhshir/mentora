import { useState } from 'react';
import { Box, Button, Dialog, DialogContent } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';

import StepperDialog from './StepperDialog/StepperDialog';

const Buttons = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}
        sx={{ textAlign: 'center',
              backgroundColor: '#F5A34C',
              fontFamily: 'Gotham',
              fontWeight: '700',
              fontSize: '1rem',
              width: '231px',
              height: '55px',
              borderRadius:'22px',
              paddingTop: '20px',
              }}
              endIcon={<CallMadeIcon style={{ marginBottom: 17, fontSize: '1.7rem' }} />}
              >Get Started</Button>
      <Box component={'div'}>
        <Dialog open={open} onClose={handleClose} maxWidth={'800px'} maxheight={'60vh'}>
          <DialogContent component={'div'} >
            <StepperDialog />
          </DialogContent>
        </Dialog>
      </Box>
    </>
  )
}

export default Buttons