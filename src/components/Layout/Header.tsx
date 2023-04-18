import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
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
      <Logo>Logo</Logo>
      <NavWrapper>
        <NavItem>모프계산기</NavItem>
        <NavItem>모프소개</NavItem>
        <NavItem>굿즈</NavItem>

        <NavItem>로그인</NavItem>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Header;
