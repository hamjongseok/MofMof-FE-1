import {HTMLAttributes} from 'react';
import StyledContainer from './style';

interface IProps extends HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const Container: React.FC<IProps> = ({
  as: Component = 'div',
  className = '',
  children,
  ...restProps
}) => {
  return (
    <StyledContainer className={className} {...restProps}>
      {children}
    </StyledContainer>
  );
};

export default Container;
