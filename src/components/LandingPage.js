import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const ScrollWheel = styled.div`
  position: absolute;
  bottom: 60px;
  width: 50px;
  height: 80px;
  border: 3px solid white;
  border-radius: 25px;
  background-color: rgba(200, 200, 200, 0.5);
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 4px;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(30px);
    }
    100% {
      transform: translateX(-50%) translateY(0);
    }
  }
`;

const HintText = styled.div`
  position: absolute;
  bottom: 30px;
  color: rgba(255, 20, 147, 0.8);
  font-size: 20px;
  font-family: 'Comic Sans MS', cursive;
  font-weight: bold;
  z-index: 2;
  animation: blink 2s infinite;
  text-shadow: 
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white,
    1px 1px 0 white;

  @keyframes blink {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
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

function LandingPage() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleTransition = () => {
    setFade(true);
    setTimeout(() => {
      navigate('/main');
    }, 500);
  };

  const handleClick = () => {
    handleTransition();
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        handleTransition();
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [navigate]);

  return (
    <Container onClick={handleClick}>
      <BackgroundImage src={process.env.PUBLIC_URL + '/images/首页.png'} alt="Lead Me Landing Page" />
      <ScrollWheel />
      <HintText>Scroll down to start</HintText>
      <FadeOverlay visible={fade} />
    </Container>
  );
}

export default LandingPage; 