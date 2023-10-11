import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Header from './pages/Header';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

console.log(import.meta.env.DEV);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>,
  ),
  { basename: '/dogs' },
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
