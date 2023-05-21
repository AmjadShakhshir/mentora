import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './fonts/fonts.css'
import { Header, Marketing, Features, Community, Niche, Testimonials,
  CaseStudies, Footer,  } from './containers';
import { Container, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
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
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/:id" element={<Dashboard />} />
            </Routes>
            {/* <Marketing />
            <Features />
            <Community />
            <Niche />
            <Testimonials />
            <CaseStudies />
            <Footer /> */}
          </Container>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
