import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Join from '@/pages/Join';

const router = createBrowserRouter([
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
], {
  basename: '/website',
});

export default function App() {
  return <RouterProvider router={router} />;
}