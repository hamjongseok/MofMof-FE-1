import Link from 'next/link';
import styled from 'styled-components';
import Button from '@/components/Button';

const StyledDiv = styled.div`
  background-color: #fff;
  height: 100vh;
  max-width: 1200px;
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
      <StyledDiv>
        <h1 style={{color: '#FF5500'}}>Welcome to MofMof Website!</h1>
        <Link href="/FattailGecko" legacyBehavior>
          <StyledLink>펫테일</StyledLink>
        </Link>
      </StyledDiv>
      <Button>primary</Button>
      <Button isSecondary={true}>secondary</Button>
    </>
  );
}
