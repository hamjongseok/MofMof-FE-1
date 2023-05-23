import Link from 'next/link';
import React, {useEffect} from 'react';
import Image from 'next/image';
import * as M from '@/styles/Header/HeaderStyle';
import {HeaderMainDropdown} from '@/components/Header/HeaderMainDropdown';
import {HeaderCalcDropdown} from '@/components/Header/HeaderCalcDropdown';
import {HeaderIntroDropdown} from '@/components/Header/HeaderIntroDropdown';
import {HeaderBoardDropdown} from '@/components/Header/HeaderBoardDropdown';
import {MobileMenuTab} from './MobileMenuTab';

import {useState} from 'react';
import Button from '@/components/UI/Button';

type HoverState = {
  calculator: boolean;
  introduction: boolean;
  board: boolean;
};

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [hover, setHover] = useState<HoverState>({
    calculator: true,
    introduction: true,
    board: true,
  });
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu]);

  return (
    <M.HeaderWrapper>
      {/* <M.HeaderLogoNavCon> */}
      <M.LogoBox>
        <Link href={'/'}>
          <Image
            src={'/mofmof2.svg'}
            alt="헤더 로고"
            width={120}
            height={24}
          ></Image>
        </Link>
      </M.LogoBox>
      <M.HeaderNavCon>
        {activeMenuItem === 'main' && (
          <HeaderMainDropdown
            onMouseEnter={() => setActiveMenuItem('main')}
            onMouseLeave={() => setActiveMenuItem(null)}
          />
        )}
        {activeMenuItem === 'calculator' && (
          <HeaderCalcDropdown
            onMouseEnter={() => {
              setActiveMenuItem('calculator'),
                setHover({...hover, calculator: false});
            }}
            onMouseLeave={() => {
              setActiveMenuItem(null), setHover({...hover, calculator: true});
            }}
          />
        )}
        {activeMenuItem === 'introduction' && (
          <HeaderIntroDropdown
            onMouseEnter={() => {
              setActiveMenuItem('introduction'),
                setHover({...hover, introduction: false});
            }}
            onMouseLeave={() => {
              setActiveMenuItem(null), setHover({...hover, introduction: true});
            }}
          />
        )}
        {activeMenuItem === 'board' && (
          <HeaderBoardDropdown
            onMouseEnter={() => {
              setActiveMenuItem('board'), setHover({...hover, board: false});
            }}
            onMouseLeave={() => {
              setActiveMenuItem(null), setHover({...hover, board: true});
            }}
          />
        )}
        <M.HeaderReptileIcon
          onMouseEnter={() => setActiveMenuItem('main')}
          onMouseLeave={() => setActiveMenuItem(null)}
        ></M.HeaderReptileIcon>

        <M.SubNavCon>
          <M.SubNavList
            onMouseEnter={() => {
              setActiveMenuItem('calculator');
              setHover({...hover, calculator: false});
            }}
            onMouseLeave={() => {
              // setActiveMenuItem(null);
              setHover({...hover, calculator: true});
            }}
          >
            모프 계산기
            <Image
              src={hover.calculator ? '/그레이세모2.svg' : '/세모.svg'}
              alt="메뉴 아이콘"
              width={14}
              height={14}
            />
          </M.SubNavList>
          <M.SubNavList
            onMouseEnter={() => {
              setActiveMenuItem('introduction');
              setHover({...hover, introduction: false});
            }}
            onMouseLeave={() => setHover({...hover, introduction: true})}
          >
            모프 소개
            <Image
              src={hover.introduction ? '/그레이세모2.svg' : '/세모.svg'}
              alt="메뉴 아이콘"
              width={14}
              height={14}
            />
          </M.SubNavList>
          <M.SubNavList
            onMouseEnter={() => {
              setActiveMenuItem('board');
              setHover({...hover, board: false});
            }}
            onMouseLeave={() => setHover({...hover, board: true})}
          >
            게시판
            <Image
              src={hover.board ? '/그레이세모2.svg' : '/세모.svg'}
              alt="메뉴 아이콘"
              width={14}
              height={14}
            />
          </M.SubNavList>
        </M.SubNavCon>
      </M.HeaderNavCon>
      {/* </M.HeaderLogoNavCon> */}
      <M.UserBoxWrapper>
        <M.UserBox>
          <M.LoginBox>
            <Link href={'/'}>
              <Button isSecondary={true}> 로그인 </Button>
            </Link>
          </M.LoginBox>
          <Button>회원가입</Button>
        </M.UserBox>
        <M.HeaderMobileMenuCon onClick={() => setShowMobileMenu(true)}>
          <Image
            src="/icon-메뉴.svg"
            alt="메뉴 아이콘"
            width={24}
            height={24}
          />
        </M.HeaderMobileMenuCon>
        {showMobileMenu && (
          <MobileMenuTab setshowMobileMenu={setShowMobileMenu} />
        )}
      </M.UserBoxWrapper>
    </M.HeaderWrapper>
  );
};

export default Header;
