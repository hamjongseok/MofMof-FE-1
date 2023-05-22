import styled, {keyframes, css} from 'styled-components';

interface MobileMenuWrapperProps {
  fadeOut: boolean;
}

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
		transform: translateX(0); 
		 }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const MobileMenuWrapper = styled.div<MobileMenuWrapperProps>`
  width: 300px;
  background-color: #fff;
  padding: 0 20px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: fixed;
  height: 100vh;
  border: 0.3px solid #000;
  right: 0;
  top: 0;
  animation: ${(props) =>
    props.fadeOut
      ? css`
          ${slideOut} 0.5s
        `
      : css`
          ${slideIn} 0.5s
        `};
`;

export const MobileOverlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  z-index: 998;
  padding: 0;
  margin: 0;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileMenuHeader = styled.header`
  /* background-color: orange; */
  height: 52px;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MobileMenuHeaderBtn = styled.button`
  background-image: url('/X.svg');

  /* background-color: red; */
  background-size: 30px 20px;
  background-repeat: no-repeat;
  background-position: right;

  margin-top: 10px;

  background-color: #fff;
  width: 30px;
  height: 30px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const MobileMenuContentDiv = styled.div`
  width: 100%;
  height: 20px;
`;

export const SubToggleIcon = styled.div`
  /* width: 100px; */
  height: 10px;
  padding: 20px 0;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10;

  & > img {
    margin-left: 10px; // 아이콘의 왼쪽 여백을 조절합니다.
  }
`;

export const MobileMenuUserDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const MobileMenuDropdownDiv = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryColor};
`;

export const MobileMenuFooterDiv = styled.div`
  width: 100%;
  height: 20px;
  background-color: #000;
  margin-top: 20px;
`;

export const LoginBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.text.base};
  line-height: ${(props) => props.theme.spacing.sm};
  padding: 1.3rem 0.5rem;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primaryColor};
  border: 1px solid ${(props) => props.theme.colors.primaryColor};
  cursor: pointer;
  width: 100%;
  height: 10px;
`;

export const SignUpBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.text.base};
  line-height: ${(props) => props.theme.spacing.sm};
  padding: 1.3rem 0.5rem;
  border: 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  width: 100%;
  height: 10px;

  &:hover {
    cursor: pointer;
  }
`;
