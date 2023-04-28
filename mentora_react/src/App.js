import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './fonts/fonts.css'
import { Header, Marketing, Features } from './containers';
import { Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';

function App() {
  // To change the default font-family for whole app
  const theme = createTheme ({
    typography: {
      h3: { 
        fontFamily:'RecoletaBold',
      }
    }
  });
  
  return (
    <BrowserRouter> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="false">
          <Header />
          <Marketing />
          <Features />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
