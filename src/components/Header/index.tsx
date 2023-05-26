import Link from 'next/link';
import React, {useEffect} from 'react';
import Image from 'next/image';
import * as M from '@/styles/Header/HeaderStyle';
import {MobileMenuTab} from './MobileMenuTab';

import {useState} from 'react';
import Button from '@/components/UI/Button';
import {HeaderNav} from './HeaderNav';

const Header = () => {
  const [isActiveDrop, setIsActiveDrop] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  //반응형 시 스크롤 방지
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMobileMenu]);

  return (
    <M.HeaderWrapper>
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
        <HeaderNav
          variant={'main'}
          isActiveDrop={isActiveDrop}
          setIsActiveDrop={setIsActiveDrop}
        />
        <M.SubNavCon>
          <M.SubNavLi>
            <M.SubNavButton>
              <HeaderNav
                variant={'모프계산기'}
                isActiveDrop={isActiveDrop}
                setIsActiveDrop={setIsActiveDrop}
              />
            </M.SubNavButton>
          </M.SubNavLi>
          <M.SubNavLi>
            <M.SubNavButton>
              <HeaderNav
                variant={'모프소개'}
                isActiveDrop={isActiveDrop}
                setIsActiveDrop={setIsActiveDrop}
              />
            </M.SubNavButton>
          </M.SubNavLi>
          <M.SubNavLi>
            <M.SubNavButton>
              <HeaderNav
                variant={'게시판'}
                isActiveDrop={isActiveDrop}
                setIsActiveDrop={setIsActiveDrop}
              />
            </M.SubNavButton>
          </M.SubNavLi>
        </M.SubNavCon>
      </M.HeaderNavCon>
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
