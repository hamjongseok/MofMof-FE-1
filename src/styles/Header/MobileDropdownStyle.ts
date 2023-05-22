import styled, {keyframes} from 'styled-components';

const slideDown = keyframes`
	0% {
		transform: translateY(-30%);
		opacity: 0;
	}
	100%{
		transform: translateY(0);
		opacity: 1;
	}
`;

export const DropdownCon = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  animation: ${slideDown} 0.3s linear;
  position: relative;
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
