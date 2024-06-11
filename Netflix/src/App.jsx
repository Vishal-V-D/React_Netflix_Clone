import React, { useEffect } from 'react';
import { Routes, Route, useNavigate ,useLocation} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        if (location.pathname === '/Login') {
          navigate('/'); // Optionally, navigate to the home page if user is logged in
        }
      } else {
        console.log("Logged Out");
        if (location.pathname !== '/Login') {
          navigate('/Login');
        }
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate, location.pathname]);
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
