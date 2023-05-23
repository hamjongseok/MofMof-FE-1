import Link from 'next/link';
import styled from 'styled-components';
import BaseLayout from '@/components/Layout';
// import Slider from '@/components/Slider';

const StyledLink = styled.a`
  color: #ff5500;
  text-decoration: none;
  font-weight: bold;
  font-size: 24px;
`;

export default function Home() {
  return (
    <BaseLayout>
      {/* <Slider /> */}
      <h1 style={{color: '#FF5500'}}>Welcome to MofMof Website!</h1>
      <Link href="/FattailGecko" legacyBehavior>
        <StyledLink>펫테일</StyledLink>
      </Link>
    </BaseLayout>
  );
}
