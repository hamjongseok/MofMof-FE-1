import styled from 'styled-components';

export const DropdownCon = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const DropdownUl = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const DropdownLi = styled.li`
  padding: 10px 10px;
  list-style-type: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray100};
    cursor: pointer;
  }
`;
