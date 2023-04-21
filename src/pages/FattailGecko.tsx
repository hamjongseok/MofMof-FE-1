import Header from '@/components/Layout/Header';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import Link from 'next/link';
import {RootState} from '@/store/rootReducer';
import {increment, decrement} from '@/store/slices/counterSlice';

const StyledDiv = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  color: blue;
`;

export default function FattailGecko() {
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <StyledDiv>
        <h1 style={{color: '#FF5500'}}>
          This is Fattail-Gecko page!
          <button onClick={() => dispatch(increment(2))}>증가</button>
          {count}
          <button onClick={() => dispatch(decrement(5))}>감소</button>
        </h1>

        <Link href={'/'} legacyBehavior>
          <StyledLink>다시 홈으로</StyledLink>
        </Link>
      </StyledDiv>
    </>
  );
}
