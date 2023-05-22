import * as M from '@/styles/Header/MobileMenuTabStyle';
import Image from 'next/image';
import {useState} from 'react';
import {MobileCalcDropdown} from './MobileCalcDropdown';
import {MobileIntroDropdown} from './MobileIntroDropdown';
import {MobileBoardDropdown} from './MobileBoardDropdown';

// type HoverState = {
//   calculator: boolean;
//   introduction: boolean;
//   board: boolean;
// };

export const MobileContentDrop = () => {
  const [hover, setHover] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  //state값이 동일하게 들어있는경우라면 닫게 해주기위함
  const handelDropdown = (string: string) => {
    setMobileDropdown((mobileDropdown) =>
      mobileDropdown === string ? null : string,
    );
    setHover((hover) => (hover === string ? null : string));
  };

  return (
    <>
      <M.SubToggleIcon
        onClick={() => {
          handelDropdown('calculator');
        }}
      >
        모프 계산기
        <Image
          src={hover === 'calculator' ? '/세모.svg' : '/그레이세모2.svg'}
          alt="메뉴 아이콘"
          width={14}
          height={14}
        />
      </M.SubToggleIcon>
      {mobileDropdown === 'calculator' && (
        <MobileCalcDropdown></MobileCalcDropdown>
      )}

      <M.SubToggleIcon
        onClick={() => {
          handelDropdown('introduction');
        }}
      >
        모프 소개
        <Image
          src={hover === 'introduction' ? '/세모.svg' : '/그레이세모2.svg'}
          alt="메뉴 아이콘"
          width={14}
          height={14}
        />
      </M.SubToggleIcon>
      {mobileDropdown === 'introduction' && (
        <MobileIntroDropdown></MobileIntroDropdown>
      )}
      <M.SubToggleIcon
        onClick={() => {
          handelDropdown('board');
        }}
      >
        게시판
        <Image
          src={hover === 'board' ? '/세모.svg' : '/그레이세모2.svg'}
          alt="메뉴 아이콘"
          width={14}
          height={14}
        />
      </M.SubToggleIcon>
      {mobileDropdown === 'board' && (
        <MobileBoardDropdown></MobileBoardDropdown>
      )}
    </>
  );
};
