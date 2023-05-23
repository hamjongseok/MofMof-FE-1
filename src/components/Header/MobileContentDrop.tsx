import * as M from '@/styles/Header/MobileMenuTabStyle';
import Image from 'next/image';
import {useState} from 'react';
import {MobileDropdown} from './MobileDropdown';

const DropdownComponents = {
  calculator: [
    {
      title: '펫테일 게코',
      linkURL: '/',
    },
    {
      title: '크레스티드 게코',
      linkURL: '/',
    },
    {
      title: '레오파드 게코',
      linkURL: '/',
    },
  ],
  introduction: [
    {
      title: '펫테일 게코',
      linkURL: '/',
    },
    {
      title: '크레스티드 게코',
      linkURL: '/',
    },
    {
      title: '레오파드 게코',
      linkURL: '/',
    },
  ],
  board: [
    {
      title: '펫테일 게코',
      linkURL: '/',
    },
    {
      title: '크레스티드 게코',
      linkURL: '/',
    },
    {
      title: '레오파드 게코',
      linkURL: '/',
    },
  ],
};

export const MobileContentDrop = () => {
  const [hover, setHover] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  //state값이 동일하게 들어있는경우라면 닫게 해주기위함
  const handelDropdown = (string: string) => {
    setMobileDropdown((mobileDropdown) =>
      mobileDropdown === string ? null : string,
    );
    console.log('처음', mobileDropdown);
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
        <MobileDropdown items={DropdownComponents[mobileDropdown]} />
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
        <MobileDropdown
          items={DropdownComponents[mobileDropdown]}
        ></MobileDropdown>
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
        <MobileDropdown
          items={DropdownComponents[mobileDropdown]}
        ></MobileDropdown>
      )}
    </>
  );
};
