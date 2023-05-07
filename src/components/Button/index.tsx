import styled, {css} from 'styled-components';
import {ButtonHTMLAttributes} from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSecondary?: boolean;
}
const Button: React.FC<IProps> = ({isSecondary, children, ...restProps}) => {
  return (
    <StyledButton isSecondary={isSecondary} type="button" {...restProps}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{isSecondary?: boolean}>`
  font-size: var(--text-base);
  line-height: var(--spacing-sm);
  padding: var(--spacing-base) var(--spacing-lg);
  letter-spacing: -0.17px;
  border: 0;
  border-radius: 5px;
  background-color: var(--primary-color);
  color: var(--white);
  cursor: pointer;

  ${({isSecondary}) =>
    isSecondary &&
    css`
      background-color: white;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
    `}
`;

Button.defaultProps = {
  isSecondary: false,
};

export default Button;
