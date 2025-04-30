import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const BackButton = styled.img`
  position: absolute;
  left: 40px;
  top: 40px;
  width: 144px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const swingAnimation = keyframes`
  0% {
    transform: rotate(-5deg);
  }
  50% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
`;

const LuluCharacter = styled.img`
  position: absolute;
  right: 60px;
  bottom: 40px;
  width: 180px;
  height: auto;
  z-index: 2;
  animation: ${swingAnimation} 3s ease-in-out infinite;
  transform-origin: bottom center;
`;

const FadeOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  opacity: ${props => props.visible ? 1 : 0};
  pointer-events: none;
  transition: opacity 0.5s;
  z-index: 9999;
`;

function Story1_1() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleTransition = (to) => {
    setFade(true);
    setTimeout(() => {
      navigate(to);
    }, 500);
  };

  const handleBackClick = () => {
    handleTransition('/select-book');
  };

  return (
    <Container>
      <BackgroundImage 
        src={process.env.PUBLIC_URL + '/images/互动故事1.1.png'} 
        alt="Story 1.1 Background" 
      />
      <BackButton
        src={process.env.PUBLIC_URL + '/images/全局-返回.png'}
        alt="Back to Book Selection"
        onClick={handleBackClick}
      />
      <LuluCharacter
        src={process.env.PUBLIC_URL + '/images/全局-lulu.png'}
        alt="Lulu Character"
      />
      <FadeOverlay visible={fade} />
    </Container>
  );
}

export default Story1_1; 