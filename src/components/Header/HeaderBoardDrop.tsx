import {useEffect, useRef, useState} from 'react';
import * as M from '@/styles/Header/HeaderMainDropStyle';
import Image from 'next/image';
import {HeaderSubDrop} from './HeaderSubDrop';

const SubDropdownComponents = [
  [
    {LinkURL: '/', ContentName: '자유 게시판'},
    {LinkURL: '/', ContentName: '질문답변 게시판'},
    {LinkURL: '/', ContentName: '사진첩'},
  ],
  [
    {LinkURL: '/', ContentName: '자유 게시판'},
    {LinkURL: '/', ContentName: '질문답변 게시판'},
    {LinkURL: '/', ContentName: '사진첩'},
  ],
  [
    {LinkURL: '/', ContentName: '자유 게시판'},
    {LinkURL: '/', ContentName: '질문답변 게시판'},
    {LinkURL: '/', ContentName: '사진첩'},
  ],
];

interface DropdownProps {
  title: string;
  items: {LinkURL: string; ContentName: string}[];
}

export const HeaderBoardDrop: React.FC<
  DropdownProps & {
    setIsActiveDrop: React.Dispatch<React.SetStateAction<string | null>>;
  }
> = ({title, items, setIsActiveDrop}) => {
  const dropRef = useRef<HTMLDivElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
            <M.ContentLi
              key={index}
              onMouseMove={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <M.Content>{item.ContentName}</M.Content>
              <M.IconWrapper>
                <Image
                  src={'/icon.svg'}
                  alt="페이지 이동화살표"
                  width={15}
                  height={13}
                ></Image>
              </M.IconWrapper>
              {hoverIndex === index ? (
                <HeaderSubDrop
                  SubDropdownComponents={SubDropdownComponents[index]}
                ></HeaderSubDrop>
              ) : null}
            </M.ContentLi>
          ))}
        </M.ContentWrapper>
      </M.MainDropdownWrapper>
    </>
  );
};
