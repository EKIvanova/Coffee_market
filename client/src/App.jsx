import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/HOC/ProtectedRoute';
import SignUpPage from './components/pages/SignupPage';
import axiosInstance, { setAccessToken } from './axiosInstance';
import LoginPage from './components/pages/LoginPage';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh')
    .then(res => {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    })
    .catch(() => {
      setUser(null);
      setAccessToken('');
    });
  }, []);
  

  const handleSignUp = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    if(res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/login', data);
    if(res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };  

  const handleLogout = async() => {
    const res = await axiosInstance.post('/auth/logout');
    if(res.status === 200) {
      setUser(null);
      setAccessToken('');
    }
  };

  const router = createBrowserRouter([
    {
      element: <Layout user={user} handleLogout={handleLogout} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/messages',
          element: <MessagesPage user={user} />,
        },
        {
          element: <ProtectedRoute isAllowed={user === null} />,
          children: [
            {
              path: '/login',
              element: <LoginPage handleLogin={handleLogin} />,
            },
            {
              path: '/signup',
              element: <SignUpPage handleSignUp={handleSignUp} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App
