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
  gap: ${(props) => props.theme.text.sm};
`;

export const DoubleDropLi = styled.li`
  list-style-type: none;
  margin-right: ${(props) => props.theme.spacing.base};
  padding: 3px 20px;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray};
    cursor: pointer;
  }
`;
