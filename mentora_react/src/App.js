import './App.css';
import Container from '@mui/material/Container';
import { Navbar } from './components';

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Navbar />
      </Container>
    </div>
  );
}

export default App;
