import Header from '@/components/Layout/Header';
import {color} from 'react-native-reanimated';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Header />

      <StyledDiv>
        <h1 style={{color: '#FF5500'}}>Welcome to MofMof Website!</h1>
        <button>Fattail-Gecko</button>
      </StyledDiv>
    </>
  );
}
