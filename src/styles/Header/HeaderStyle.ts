import styled from 'styled-components';
import {media} from '../theme';

export const HeaderWrapper = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 30px;
  height: 85px;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  position: fixed;
  z-index: 999;
  /* border-bottom: 1px solid #000; */
  @media (max-width: 768px) {
    padding: 0 20px 0 20px;
  }
`;

// export const HeaderLogoNavCon = styled.div`
//   display: flex;
//   flex-grow: 1; // 추가된 코드
//   position: relative; //추가된 코드
// `;

//메인 메뉴 박스

export const HeaderNavCon = styled.nav`
  margin-right: 24px;
  display: flex;
  width: 100%;
  flex-direction: row;
  ${media('tablet')} {
    display: none;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  padding-right: 50px;
  height: 50px;
  align-items: center;
  cursor: pointer;
`;

export const LoginBox = styled.div`
  color: ${(props) => props.theme.colors.primary};
  margin-right: 20px;
  /* height: 50px; */
  display: flex;
  align-items: center;
`;

export const SubNavCon = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const SubNavLi = styled.li`
  list-style: none;
`;

export const SubNavButton = styled.button`
  display: flex;
  border-style: none;
  font-weight: 500;
  background-color: transparent;
  font-size: 15px;
  cursor: pointer;

  & > img {
    margin-left: 10px; // 아이콘의 왼쪽 여백을 조절합니다.
  }
`;

export const UserBoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const UserBox = styled.div`
  display: flex;
  ${media('tablet')} {
    display: none;
  }
`;

export const HeaderMobileMenuCon = styled.div`
  width: 24px;
  height: 50px;
  display: none;
  ${media('tablet')} {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    cursor: pointer;
  }
`;

// export const LoginBtn = styled.a`
//   white-space: nowrap;
//   font-size: ${(props) => props.theme.text.base};
//   /* height: 17px; */
//   color: ${(props) => props.theme.colors.primary};
//   /* padding: 18px 20px; */
//   border: 1px solid ${(props) => props.theme.colors.primaryColor};
//   border-radius: 4px;
//   /* line-height: 5px; */

//   &:hover {
//     cursor: pointer;
//   }
// `;

// export const SignUpBtn = styled.div`
//   white-space: nowrap;

//   background-color: ${(props) => props.theme.colors.primaryColor};
//   color: ${(props) => props.theme.colors.white};
//   /* padding: 0 18px; */
//   font-size: ${(props) => props.theme.text.base};
//   /* line-height: 38px; */
//   border-radius: 4px;
//   /* margin-right: 10px; */

//   &:hover {
//     cursor: pointer;
//   }
// `;
