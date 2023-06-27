import styled from 'styled-components';

export const SubHeaderWrapper = styled.div`
  display: flex;
  width: auto;
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
  align-items: center;
`;

export const SubHeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const SubHeaderContentCon = styled.div`
  display: flex;
  gap: 50px;
  margin-left: 30px;
  padding: 0;
`;

export const SubHeaderContents = styled.button`
  border-style: none;
  background-color: #fff;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.primaryColor};
  }
`;
