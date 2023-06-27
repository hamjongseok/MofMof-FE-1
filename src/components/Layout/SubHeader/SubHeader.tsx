import * as M from '@/styles/Header/SubHeaderStyle';
import Link from 'next/link';

export const SubHeader = () => {
  return (
    <>
      <M.SubHeaderWrapper>
        <M.SubHeaderTitle>펫테일게코</M.SubHeaderTitle>

        <M.SubHeaderContentCon>
          <Link href={'/FattailMainHome'}>
            <M.SubHeaderContents>홈</M.SubHeaderContents>
          </Link>
          <Link href={'/FattailMainHome/FattailMorphIntro'}>
            <M.SubHeaderContents>모프소개</M.SubHeaderContents>
          </Link>
          <Link href={'/FattailMainHome/FattailCalc'}>
            <M.SubHeaderContents>모프계산기</M.SubHeaderContents>
          </Link>
          <M.SubHeaderContents>게시판</M.SubHeaderContents>
        </M.SubHeaderContentCon>
      </M.SubHeaderWrapper>
    </>
  );
};
