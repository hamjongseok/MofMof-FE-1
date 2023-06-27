import styled from 'styled-components';

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
  width: 150px;
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
