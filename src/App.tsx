import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Join from '@/pages/Join';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/join',
    element: <Join />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}