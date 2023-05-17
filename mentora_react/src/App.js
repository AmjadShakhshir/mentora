import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './fonts/fonts.css'
import { Header, Marketing, Features, Community, Niche, Testimonials, CaseStudies, Footer,  } from './containers';
import { Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:7000/testAPI`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setApiResponse(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setApiResponse(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])
  // To change the default font-family for whole app
  const theme = createTheme ({
    typography: {
      h3: { 
        fontFamily:'RecoletaBold',
      }
    },
    Container: {
      maxWidth: 'xl',
    },
  });
  
  return (
    <BrowserRouter> 
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {apiResponse && (
          <div>
            <h1>{apiResponse.name}</h1>
            <h1>{apiResponse.title}</h1>
          </div>
        )}
        <Container>
          <Header />
          <Marketing />
          <Features />
          <Community />
          <Niche />
          <Testimonials />
          <CaseStudies />
          <Footer />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;