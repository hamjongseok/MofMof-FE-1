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
  width: ${(props) => props.theme.sizes.dropdown};
  height: auto;
  padding: 20px 16px 16px; //theme추가 여부 확인
  border-radius: ${(props) => props.theme.borderRadius.md};
  top: 50px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.08), 0 0 12px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
  opacity: 0;
  animation: ${fadeInDown} 0.2s ease-in-out forwards;
`;

export const DropContentsWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: auto;
  height: auto;
  text-align: left;
`;

export const ContentTitle = styled.span`
  font-size: 15px;
  color: ${(props) => props.theme.colors.gray200};
  font-weight: 400;
  margin: 0 0 6px 10px;
`;

export const ContentWrapper = styled.ul`
  width: auto;
  height: auto;
  padding: 0;
`;

export const ContentLi = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: ${(props) => props.theme.sizes.xs};
  height: auto;
  padding: 0;
  align-items: center;
  gap: 15px;
  position: relative;
  &:hover {
    background-color: ${(props) => props.theme.colors.gray100};
  }
  &:hover > div {
    visibility: visible;
  }
`;

export const IconWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  left: 220px;
`;
