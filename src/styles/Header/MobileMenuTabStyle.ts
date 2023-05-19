import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 0 20px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  margin: 0;
  position: fixed;
  height: 100vh;
  border: 1px solid #000;
  right: 0;
  top: 0;
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
  background-size: 20px 30px;
  background-repeat: no-repeat;
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
  background-color: red;
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
  height: 300px;
  background-color: gray;
`;

export const MobileMenuFooterDiv = styled.div`
  width: 100%;
  height: 20px;
  background-color: #000;
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
