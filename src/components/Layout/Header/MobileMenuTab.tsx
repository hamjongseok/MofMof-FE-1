import * as M from '@/styles/Header/MobileMenuTabStyle';
import {useEffect, useRef} from 'react';

type MobileMenuTabProps = {
  setshowMobileMenu: (value: boolean) => void;
};

export const MobileMenuTab: React.FC<MobileMenuTabProps> = ({
  setshowMobileMenu,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setshowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <M.MobileMenuWrapper ref={menuRef}>
        <M.MobileMenuHeader>
          <M.MobileMenuHeaderBtn>
            <span></span>
            {/* <Image
            src={'/X.svg'}
            alt="메뉴 아이콘"
            width={24}
            height={24}
          ></Image> */}
          </M.MobileMenuHeaderBtn>
        </M.MobileMenuHeader>
        <M.MobileMenuUserDiv>
          <M.LoginBtn>Login</M.LoginBtn>
          <M.SignUpBtn>Sign up</M.SignUpBtn>
        </M.MobileMenuUserDiv>
        <M.MobileMenuDropdownDiv></M.MobileMenuDropdownDiv>
        <M.MobileMenuFooterDiv></M.MobileMenuFooterDiv>
      </M.MobileMenuWrapper>
    </>
  );
};
