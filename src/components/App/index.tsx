import {
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import './App.css';
import ErrorPage from '../pages/404Page';
import CharacterDetails from '../Sidebar';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'page/:pageID',
        element: <MainPage />,
        children: [
          {
            path: 'details/:characterID',
            element: <CharacterDetails />,
          },
        ],
      },
    ],
  },
];

function App() {
  return <RouterProvider router={createBrowserRouter(routesConfig)} />;
}

export default App;
