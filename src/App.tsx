import {
  Route,
  createRoutesFromElements,
  RouterProvider,
  createHashRouter,
} from 'react-router-dom';
import Header from './pages/Header';

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

console.log(import.meta.env.DEV);

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
