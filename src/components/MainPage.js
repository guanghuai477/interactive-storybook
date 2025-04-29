import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
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

const CharacterImage = styled.img`
  position: absolute;
  top: 138px;
  left: 296px;
  width: 235px;
  height: auto;
  z-index: 2;
  transform: rotate(5deg);
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center center;
  
  &:hover {
    filter: drop-shadow(0 0 10px rgba(255, 192, 203, 0.6));
  }
`;

const NameLabel = styled.img`
  position: absolute;
  top: 28px;
  left: 365px;
  width: 255px;
  height: auto;
  z-index: 3;
  transition: all 0.3s ease;
`;

const ThemeGrid = styled.div`
  position: absolute;
  right: 250px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: repeat(2, 180px);
  grid-template-rows: repeat(2, 180px);
  gap: 20px;
  z-index: 2;
`;

const ThemeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
  }

  &:active {
    transform: scale(0.967);
    opacity: 0.7;
  }
`;

const Theme1 = styled(ThemeImage)`
  transform: translateX(16px) rotate(-6deg);
  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
    transform: translateX(16px) rotate(-6deg) scale(1.1);
  }
  &:active {
    transform: translateX(16px) rotate(-6deg) scale(0.967);
  }
`;

const Theme2 = styled(ThemeImage)`
  transform: translate(8px, -20px) rotate(-6deg) scale(0.9) scaleX(1.1);
  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
    transform: translate(8px, -20px) rotate(-6deg) scale(0.99) scaleX(1.1);
  }
  &:active {
    transform: translate(8px, -20px) rotate(-6deg) scale(0.87) scaleX(1.1);
  }
`;

const Theme3 = styled(ThemeImage)`
  transform: translateY(-6px) rotate(-8deg) scale(1.1);
  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
    transform: translateY(-6px) rotate(-8deg) scale(1.21);
  }
  &:active {
    transform: translateY(-6px) rotate(-8deg) scale(1.064);
  }
`;

const Theme4 = styled(ThemeImage)`
  transform: translate(-4px, -25px);
  &:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
    transform: translate(-4px, -25px) scale(1.1);
  }
  &:active {
    transform: translate(-4px, -25px) scale(0.967);
  }
`;

const FunctionButton = styled.img`
  position: absolute;
  bottom: 210px;
  width: 120px;
  height: auto;
  z-index: 2;
  transform: rotate(5deg);
  cursor: pointer;
  transition: all 0.3s ease;
  transform-origin: center center;

  @keyframes rainbowBorder {
    0% {
      border-image: linear-gradient(0deg, #ff0000, #ff8800, #ffff00, #00ff00, #0000ff) 1;
    }
    20% {
      border-image: linear-gradient(72deg, #ff0000, #ff8800, #ffff00, #00ff00, #0000ff) 1;
    }
    40% {
      border-image: linear-gradient(144deg, #ff0000, #ff8800, #ffff00, #00ff00, #0000ff) 1;
    }
    60% {
      border-image: linear-gradient(216deg, #ff0000, #ff8800, #ffff00, #00ff00, #0000ff) 1;
    }
    80% {
      border-image: linear-gradient(288deg, #ff0000, #ff8800, #ffff00, #00ff00, #0000ff) 1;
    }
    100% {
      border-image: linear-gradient(360deg, #ff0000, #ff8800, #ffff00, #00ff00, #0000ff) 1;
    }
  }

  &:hover {
    transform: rotate(5deg) scale(1.1);
    border: 4px solid;
    border-radius: 10px;
    animation: rainbowBorder 3s linear infinite;
  }

  &:active {
    transform: rotate(5deg) scale(0.967);
    border: none;
    animation: none;
    filter: none;
    opacity: 0.7;
  }
`;

const Function1 = styled(FunctionButton)`
  left: 186px;
  bottom: 214px;
`;

const Function2 = styled(FunctionButton)`
  left: 330px;
  bottom: 205px;
`;

const Function3 = styled(FunctionButton)`
  left: 470px;
  bottom: 192px;
`;

function MainPage() {
  return (
    <Container>
      <BackgroundImage src={process.env.PUBLIC_URL + '/images/功能主页.png'} alt="Main Page Background" />
      <NameLabel 
        src={process.env.PUBLIC_URL + '/images/功能主页-姓名.png'} 
        alt="Name Label" 
      />
      <CharacterImage 
        src={process.env.PUBLIC_URL + '/images/功能主页-人物.png'} 
        alt="Character" 
      />
      <Function1
        src={process.env.PUBLIC_URL + '/images/功能主页-功能1.png'}
        alt="Function 1"
      />
      <Function2
        src={process.env.PUBLIC_URL + '/images/功能主页-功能2.png'}
        alt="Function 2"
      />
      <Function3
        src={process.env.PUBLIC_URL + '/images/功能主页-功能3.png'}
        alt="Function 3"
      />
      <ThemeGrid>
        <Theme1 
          src={process.env.PUBLIC_URL + '/images/功能主页-主题1.png'} 
          alt="Theme 1" 
        />
        <Theme2 
          src={process.env.PUBLIC_URL + '/images/功能主页-主题2.png'} 
          alt="Theme 2" 
        />
        <Theme3 
          src={process.env.PUBLIC_URL + '/images/功能主页-主题3.png'} 
          alt="Theme 3" 
        />
        <Theme4 
          src={process.env.PUBLIC_URL + '/images/功能主页-主题4.png'} 
          alt="Theme 4" 
        />
      </ThemeGrid>
    </Container>
  );
}

export default MainPage; 