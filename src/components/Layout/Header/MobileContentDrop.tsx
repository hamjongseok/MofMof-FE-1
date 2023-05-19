import * as M from '@/styles/Header/HeaderStyle';
import Image from 'next/image';
import {useState} from 'react';

type HoverState = {
  calculator: boolean;
  introduction: boolean;
  board: boolean;
};

export const MobileContentDrop = () => {
  const [hover, setHover] = useState<HoverState>({
    calculator: false,
    introduction: false,
    board: false,
  });
  console.log(hover.calculator);
  return (
    <>
      <M.SubToggleIcon
        onClick={() =>
          setHover((prevHover) => ({
            ...prevHover,
            calculator: !prevHover.calculator,
          }))
        }
      >
        모프 계산기
        <Image
          src={hover.calculator ? '/세모.svg' : '/그레이세모2.svg'}
          alt="메뉴 아이콘"
          width={14}
          height={14}
        />
      </M.SubToggleIcon>
      <M.SubToggleIcon
        onClick={() =>
          setHover((prevHover) => ({
            ...prevHover,
            introduction: !prevHover.introduction,
          }))
        }
      >
        모프 소개
        <Image
          src={hover.introduction ? '/세모.svg' : '/그레이세모2.svg'}
          alt="메뉴 아이콘"
          width={14}
          height={14}
        />
      </M.SubToggleIcon>
      <M.SubToggleIcon
        onClick={() =>
          setHover((prevHover) => ({
            ...prevHover,
            board: !prevHover.board,
          }))
        }
      >
        게시판
        <Image
          src={hover.board ? '/세모.svg' : '/그레이세모2.svg'}
          alt="메뉴 아이콘"
          width={14}
          height={14}
        />
      </M.SubToggleIcon>
    </>
  );
};
