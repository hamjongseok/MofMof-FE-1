import Button from '@/components/UI/Button';
import * as M from '@/styles/Header/MobileMenuTabStyle';
import {useEffect, useRef, useState} from 'react';
import {MobileContentDrop} from './MobileContentDrop';

type MobileMenuTabProps = {
  setshowMobileMenu: (value: boolean) => void;
};

export const MobileMenuTab: React.FC<MobileMenuTabProps> = ({
  setshowMobileMenu,
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setTimeout(() => {
          setshowMobileMenu(false);
        }, 300);
        setIsFadeOut(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <M.MobileOverlay>
        <M.MobileMenuWrapper ref={menuRef} fadeOut={isFadeOut}>
          <M.MobileMenuHeader>
            <M.MobileMenuHeaderBtn
              onClick={() => {
                setIsFadeOut(true);
                setTimeout(() => {
                  setshowMobileMenu(false);
                }, 300);
              }}
            ></M.MobileMenuHeaderBtn>
          </M.MobileMenuHeader>
          <M.MobileMenuUserDiv>
            <M.LoginBtn>Login</M.LoginBtn>
            <M.SignUpBtn>Sign up</M.SignUpBtn>
          </M.MobileMenuUserDiv>
          <M.MobileMenuDropdownDiv>
            <MobileContentDrop></MobileContentDrop>
          </M.MobileMenuDropdownDiv>
          <M.MobileMenuFooterDiv></M.MobileMenuFooterDiv>
        </M.MobileMenuWrapper>
      </M.MobileOverlay>
    </>
  );
};
