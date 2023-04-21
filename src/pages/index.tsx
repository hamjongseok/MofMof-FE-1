import Header from '@/components/Layout/Header';
import styled from 'styled-components';
import Link from 'next/link';

const StyledDiv = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  color: #ff5500;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
`;

export default function Home() {
  return (
    <>
      <Header />
      <StyledDiv>
        <h1 style={{color: '#FF5500'}}>Welcome to MofMof Website!</h1>
        <Link href="/FattailGecko" legacyBehavior>
          <StyledLink>펫테일</StyledLink>
        </Link>
      </StyledDiv>
    </>
  );
}
