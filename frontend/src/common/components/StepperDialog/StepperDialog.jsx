import React, { useState } from 'react';
import { Box , Container, Paper, MobileStepper, Button, Typography } from '@mui/material';
import AddressForm from './AddressForm';
import BusinessForm from './BusinessForm';
import ChallengeForm from './ChallengeForm';
import CalenderForm from './CalenderForm';
import Review from './Review';

const steps = ['Address', 'Business details', 'Challenge details', 'Schedule', 'Review'];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [addressForm, setAddressForm] = useState({});
  const [businessForm, setBusinessForm] = useState({});
  const [challengeForm, setChallengeForm] = useState({});
  const [calenderForm, setCalenderForm] = useState({});

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm setAddressForm={setAddressForm} />;
      case 1:
        return <BusinessForm setBusinessForm={setBusinessForm} />;
      case 2:
        return <ChallengeForm setChallengeForm={setChallengeForm} />;
      case 3:
        return <CalenderForm setCalenderForm={setCalenderForm} />;
      case 4:
        return <Review addressForm={addressForm} businessForm={businessForm} challengeForm={challengeForm} calenderForm={calenderForm} />;
      default:
        throw new Error('Unknown step');
    }
  }
  
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={activeStep}
            classes={{
              root: 'MuiMobileStepper-root',
              progress: 'MuiMobileStepper-progress',
            }}
            sx={{ maxWidth: 800,
            flexGrow: 1,
            pt: 3,
            pb: 5,
            justifyContent:'center',
            marginInline: 'auto',
            }} />
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 2 ? 'Review' : activeStep === steps.length - 1 ? 'Finish' :'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
  );
}
