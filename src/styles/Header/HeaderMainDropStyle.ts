import styled, {keyframes} from 'styled-components';

const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px) scaleX(0.7);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleX(1);
  }
`;

export const MainDropdownWrapper = styled.div`
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  width: 300px;
  height: 272px;
  /* padding: 32px 30px 16px; */
  border-radius: ${(props) => props.theme.borderRadius.md};
  top: 77px;
  /* box-shadow: 0 0 6px rgba(0, 0, 0, 0.08), 0 0 12px rgba(0, 0, 0, 0.04); */
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${fadeInDown} 0.2s ease-in-out forwards;
`;

export const DropContentsWrapper = styled.div`
  width: auto;
  height: auto;
  text-align: left;
`;

export const ContentTitle = styled.h3`
  font-size: 18px;
  border: 2px solid ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: 600;
  margin: 0;
  display: flex;
  width: 300px;
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
`;

export const ContentWrapper = styled.ul`
  margin-top: 10px;
  width: 300px;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 0.5px solid #000000;
  background-color: #fff;
  border-radius: 15px;
`;

export const ContentLi = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 300px;
  height: auto;
  padding: 13.6px 23.8px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  /* border: 0.3px solid #000; */
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #e3e3e5;
    border-radius: 14px;
  }
  &:hover > div {
    visibility: visible;
  }
`;

export const Content = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
`;

export const IconWrapper = styled.div``;

export const HeaderSubDropdownCon = styled.div`
  padding: 30px;
  width: 200px;
  height: 200px;
  background-color: red;
  position: absolute;
  left: 270px;
  top: 50px;
`;
