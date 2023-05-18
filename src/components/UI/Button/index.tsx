import {ButtonHTMLAttributes} from 'react';
import {StyledButton} from '@/styles/UI/ButtonStyle';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSecondary?: boolean;
}

const Button: React.FC<IProps> = ({
  isSecondary = false,
  children,
  ...restProps
}) => {
  return (
    <StyledButton isSecondary={isSecondary} type="button" {...restProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
