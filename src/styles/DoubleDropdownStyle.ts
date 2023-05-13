import styled from 'styled-components';

export const DoubleDropWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DoubleDropUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const DoubleDropLi = styled.li`
  list-style-type: none;
  margin-right: 25px;
  padding: 3px 20px;
  &:hover {
    background-color: #f2f3f5;
    cursor: pointer;
  }
`;
