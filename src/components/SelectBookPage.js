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

const BooksContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const BookImage = styled.img`
  width: 280px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center center;
  
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  }
  
  &:active {
    transform: scale(1);
    opacity: 0.8;
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

function SelectBookPage() {
  const navigate = useNavigate();
  const [fade, setFade] = useState(false);

  const handleTransition = (to) => {
    setFade(true);
    setTimeout(() => {
      navigate(to);
    }, 500);
  };

  const handleBookClick = (bookNumber) => {
    handleTransition(`/story/${bookNumber}/1`);
  };

  const handleBackClick = () => {
    handleTransition('/main');
  };

  return (
    <Container>
      <BackgroundImage 
        src={process.env.PUBLIC_URL + '/images/选择绘本.png'} 
        alt="Select Book Background" 
      />
      <BooksContainer>
        <BookImage
          src={process.env.PUBLIC_URL + '/images/选择绘本-故事1.png'}
          alt="Bear's new friend"
          onClick={() => handleBookClick(1)}
        />
        <BookImage
          src={process.env.PUBLIC_URL + '/images/选择绘本-故事2.png'}
          alt="A lost hat"
          onClick={() => handleBookClick(2)}
        />
        <BookImage
          src={process.env.PUBLIC_URL + '/images/选择绘本-故事3.png'}
          alt="Just a little short"
          onClick={() => handleBookClick(3)}
        />
      </BooksContainer>
      <BackButton
        src={process.env.PUBLIC_URL + '/images/全局-返回.png'}
        alt="Back to Main Page"
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

export default SelectBookPage; 