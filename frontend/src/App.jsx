import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './common/pages/Root';
import './assets/fonts/fonts.css'
import Home from './common/pages/Home';

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

export default App