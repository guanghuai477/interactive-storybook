import React from 'react';
import styled from 'styled-components';

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

function LandingPage() {
  return (
    <Container>
      <BackgroundImage src={process.env.PUBLIC_URL + '/images/首页.png'} alt="Lead Me Landing Page" />
      <ScrollWheel />
      <HintText>Scroll down to start</HintText>
    </Container>
  );
}

export default LandingPage; 