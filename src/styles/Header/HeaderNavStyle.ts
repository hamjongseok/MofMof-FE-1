import styled from 'styled-components';

export const HeaderNavCon = styled.div`
  cursor: pointer;
`;

export const HeaderReptileIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  top: 5px;
  width: 60px;
  height: 50px;
  background-image: url('/마우스호버-03.svg');
  background-size: cover;

  &:hover {
    background-image: url('/마우스호버 주황-04.svg');
  }
`;

export const HeaderNav = styled.span`
  margin-right: 7px;
  font-size: 18px;
  line-height: 28.8px;
  font-weight: 400;
`;
