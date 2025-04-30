import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  position: relative;
`;

const BookContent = styled.div`
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const NavigationButtons = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 20px;
`;

const NavButton = styled.button`
  padding: 10px 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1976D2;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

function BookPage() {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // 假设每本书有10页

  const handleBack = () => {
    navigate('/select-book');
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <Container>
      <BackButton onClick={handleBack}>返回</BackButton>
      <BookContent>
        <h1>绘本 {bookId}</h1>
        <h2>第 {currentPage} 页</h2>
        {/* 这里添加具体的绘本内容 */}
      </BookContent>
      <NavigationButtons>
        <NavButton 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          上一页
        </NavButton>
        <NavButton 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          下一页
        </NavButton>
      </NavigationButtons>
    </Container>
  );
}

export default BookPage; 