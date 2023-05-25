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
  background-color: ${(props) => props.theme.colors.white};
  position: absolute;
  width: 318.75px;
  height: 272px;
  padding: 32px 30px 16px; //theme추가 여부 확인
  border-radius: ${(props) => props.theme.borderRadius.md};
  top: 77px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08), 0 0 12px rgba(0, 0, 0, 0.04);
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
  font-size: 20px;
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: 700;
  margin: 0;
  display: flex;
`;

export const ContentWrapper = styled.ul`
  margin-top: 30px;
  width: auto;
  height: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContentLi = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: ${(props) => props.theme.sizes.xs};
  height: auto;
  padding: 13.6px 23.8px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 0.3px solid #000;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #e3e3e5;
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
