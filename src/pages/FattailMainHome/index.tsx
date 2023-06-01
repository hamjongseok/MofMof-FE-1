import BaseLayout from '@/components/Layout';
import {SubHeader} from '@/components/Layout/SubHeader/SubHeader';
import Link from 'next/link';

const FattailMain = () => {
  return (
    <>
      <SubHeader></SubHeader>
      <Link href={'/FattailMainHome/FattailMorphIntro'} legacyBehavior>
        <a>모프 소개</a>
      </Link>
    </>
  );
};

export default FattailMain;
