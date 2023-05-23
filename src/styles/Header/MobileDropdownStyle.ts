import styled, {keyframes, css} from 'styled-components';

// interface mobileDropdown {
//   mobileDropdown: string | null;
// }

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

const slideUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-30%);
    opacity: 0;
  }
`;

export const DropdownCon = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
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

export const DropdownA = styled.a`
  border-style: none;
`;
