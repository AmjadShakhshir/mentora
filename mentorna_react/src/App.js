import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Root from './pages/Root';
import './App.css';
import './fonts/fonts.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
