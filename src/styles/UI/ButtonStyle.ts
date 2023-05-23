import styled from 'styled-components';

export const StyledButton = styled.button<{isSecondary?: boolean}>`
  font-size: ${(props) => props.theme.text.base};
  line-height: ${(props) => props.theme.spacing.sm};
  padding: 1rem 1.5rem;
  letter-spacing: -0.17px;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  white-space: nowrap;

  ${(props) =>
    props.isSecondary &&
    `
		background-color: ${props.theme.colors.white};
		color:  ${props.theme.colors.primaryColor};
    border: 1px solid  ${props.theme.colors.primaryColor};
    `}
`;
