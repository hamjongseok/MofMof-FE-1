import Link from 'next/link';
import Image from 'next/image';
import * as M from '@/styles/Header/HeaderMainDropStyle';
import {useState, useEffect, useRef} from 'react';

interface DropdownProps {
  title: string;
  items: {LinkURL: string; ContentName: string}[];
}

export const HeaderDropdown: React.FC<
  DropdownProps & {
    setIsActiveDrop: React.Dispatch<React.SetStateAction<string | null>>;
  }
> = ({title, items, setIsActiveDrop}) => {
  const dropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(event.target as Node)) {
        setIsActiveDrop(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.addEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <M.MainDropdownWrapper ref={dropRef}>
        <M.ContentTitle>{title}</M.ContentTitle>
        <M.ContentWrapper>
          {items.map((item, index) => (
            <Link key={index} href={item.LinkURL} legacyBehavior>
              <M.ContentLi>
                <M.Content>{item.ContentName}</M.Content>
                <M.IconWrapper>
                  <Image
                    src={'/icon.svg'}
                    alt="페이지 이동화살표"
                    width={15}
                    height={13}
                  ></Image>
                </M.IconWrapper>
              </M.ContentLi>
            </Link>
          ))}
        </M.ContentWrapper>
      </M.MainDropdownWrapper>
    </>
  );
};
