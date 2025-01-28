import React, { useEffect } from 'react';
import './index.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar'
import HomePage from './pages/home';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const homey = localStorage.getItem('homeY');
    if (homey && pathname === '/') {
      window.scrollTo(0, homey);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="w-full bg-black min-h-screen">
        <div className="max-w-7xl w-11/12 mx-auto px-4 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </div>

    </>
  );
}

export default App;