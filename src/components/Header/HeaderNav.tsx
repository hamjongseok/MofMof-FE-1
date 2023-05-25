import Image from 'next/image';
import {HeaderDropdown} from './HeaderDropdown';
import * as M from '@/styles/Header/HeaderNavStyle';

const DropdownComponents = {
  main: {
    title: 'Reptile',
    items: [
      {LinkURL: '/fattail', ContentName: '펫테일 게코'},
      {LinkURL: '/', ContentName: '크레스티드 게코'},
      {LinkURL: '/', ContentName: '레오파드 게코'},
    ],
  },
  모프계산기: {
    title: 'Calculator',
    items: [
      {LinkURL: '/', ContentName: '펫테일 게코'},
      {LinkURL: '/', ContentName: '크레스티드 게코'},
      {LinkURL: '/', ContentName: '레오파드 게코'},
    ],
  },
  모프소개: {
    title: 'Intro',
    items: [
      {LinkURL: '/', ContentName: '펫테일 게코'},
      {LinkURL: '/', ContentName: '크레스티드 게코'},
      {LinkURL: '/', ContentName: '레오파드 게코'},
    ],
  },
  게시판: {
    title: 'Board',
    items: [
      {LinkURL: '/', ContentName: '펫테일 게코'},
      {LinkURL: '/', ContentName: '크레스티드 게코'},
      {LinkURL: '/', ContentName: '레오파드 게코'},
    ],
  },
};

interface NavProps {
  variant: 'main' | '모프계산기' | '모프소개' | '게시판';
  isActiveDrop: string | null;
  setIsActiveDrop: React.Dispatch<React.SetStateAction<string | null>>;
}

export const HeaderNav: React.FC<NavProps> = ({
  variant,
  isActiveDrop,
  setIsActiveDrop,
}) => {
  const HandleClickNav = () => {
    setIsActiveDrop(() => (isActiveDrop === variant ? null : variant));
  };

  return (
    <>
      <M.HeaderNavCon onClick={HandleClickNav}>
        {variant === 'main' ? (
          <>
            {/* <M.HeaderReptileIcon></M.HeaderReptileIcon> */}
            <Image
              src={
                isActiveDrop === variant
                  ? '/마우스호버 주황-04.svg'
                  : '/마우스호버-03.svg'
              }
              width={60}
              height={60}
              alt="메인 로고 아이콘"
            ></Image>
          </>
        ) : (
          <>
            <M.HeaderNav>{variant}</M.HeaderNav>
            <Image
              src={
                isActiveDrop === variant
                  ? 'Polygon 27 (1).svg'
                  : 'Polygon 27.svg'
              }
              alt="메뉴 아이콘"
              width={12}
              height={12}
            />
          </>
        )}
      </M.HeaderNavCon>
      {variant === isActiveDrop && (
        <HeaderDropdown
          {...DropdownComponents[variant]}
          setIsActiveDrop={setIsActiveDrop}
        />
      )}
    </>
  );
};
