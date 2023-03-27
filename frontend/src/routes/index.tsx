import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useThemeMode } from '../hooks/useThemeMode';
import { Home } from '../pages/Home';
import { Layout } from '../pages/Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Layout />,
  },
]);

export const SystemRoutes = () => {
  const { theme } = useThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
