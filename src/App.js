import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>
    }
  ])
  return (

    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>

  );
}

export default App;
