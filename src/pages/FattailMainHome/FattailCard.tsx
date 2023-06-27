import * as M from '@/styles/FattailIntro/FattailCardStyle';
import Image from 'next/image';

export const FattailCard = () => {
  return (
    <M.FattailCard>
      <Image src={'/고스트4.png'} alt="도마뱀" width={200} height={200}></Image>
      <M.MorphCon>
        <M.MorphCombo>단일</M.MorphCombo>
        <M.MorphName>오레오</M.MorphName>
      </M.MorphCon>
    </M.FattailCard>
  );
};
