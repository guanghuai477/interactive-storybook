import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: translateY(${props => props.currentPage * -100}vh);
`;

const MaskOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8b00ff
  );
  background-size: 400% 400%;
  animation: rainbow 3s ease infinite;
  z-index: 1000;
  clip-path: ${props => props.isTransitioning ? 
    'circle(150% at 50% 50%)' : 
    'circle(0% at 50% 50%)'};
  transition: clip-path 0.3s ease;
  pointer-events: none;
  display: block;

  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return;

      if (e.deltaY > 0 && currentPage === 0) {
        setIsScrolling(true);
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentPage(1);
          setTimeout(() => {
            setIsTransitioning(false);
            setIsScrolling(false);
          }, 300);
        }, 300);
      } else if (e.deltaY < 0 && currentPage === 1) {
        setIsScrolling(true);
        setIsTransitioning(true);
        
        setTimeout(() => {
          setCurrentPage(0);
          setTimeout(() => {
            setIsTransitioning(false);
            setIsScrolling(false);
          }, 300);
        }, 300);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isScrolling, isTransitioning]);

  return (
    <AppContainer>
      <MaskOverlay isTransitioning={isTransitioning} />
      <PageContainer currentPage={currentPage}>
        <LandingPage />
        <MainPage />
      </PageContainer>
    </AppContainer>
  );
}

export default App; 