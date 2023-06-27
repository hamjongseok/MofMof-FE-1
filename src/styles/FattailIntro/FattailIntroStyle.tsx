import styled from 'styled-components';

export const IntroCardWrapper = styled.div`
  background-color: #fff;
  display: grid;
  padding: 40px;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem; // 각 card 사이의 간격 조정
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FilterButton = styled.button`
  padding: 7px;
  border: none;
  background-color: #fff; // 배경색을 조정하세요.
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  border: 1px solid #ff5500;

  &:hover {
    background-color: #ddd; // 호버 상태의 배경색을 조정하세요.
  }

  &:active {
    background-color: #ccc; // 클릭 상태의 배경색을 조정하세요.
  }
`;

// FattailFilter 컴포넌트
export const FattailFilter = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  gap: 30px;
  border-radius: 10px;
  background-color: #f5f5f5; // 배경색을 조정하세요.
`;

export const FattailCard = styled.button`
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

export const MorphCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // 박스의 너비를 고정합니다.
`;

export const CardImg = styled.image`
  width: 100px; // adjust as needed
  height: 100px;
  margin-top: 100px;
`;

export const MorphCombo = styled.span`
  border: 1px solid #000;
  padding: 3px 5px;
  margin: 0;
  border-radius: 8px;
  background-color: #ff5500;
  color: #fff;
`;

export const MorphName = styled.h3`
  padding: 3px 15px;
  border: 1px solid #000;
`;
