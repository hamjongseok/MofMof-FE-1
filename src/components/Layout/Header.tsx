import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  border-bottom: 2px solid #ff5500;
`;

const Logo = styled.div`
  background-image: url('/mofmof2.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 130px;
  height: 30px;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin-left: 20px;
  cursor: pointer;
  position: relative;
  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: white;
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <NavWrapper>
        <NavItem>모프계산기</NavItem>
        <NavItem>모프소</NavItem>
        <NavItem>로그인</NavItem>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
