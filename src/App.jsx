import Header from "../src/components/Header";
import React from 'react';
import HomeShop from "../src/components/HomeShop";
import Footer from "../src/components/Footer";
import { useState, useEffect } from 'react'
import './styles.module.scss'

function App() {

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <Header />
      <HomeShop width={windowSize.innerWidth} />
      <Footer />
    </>
  );
}

export default App;
