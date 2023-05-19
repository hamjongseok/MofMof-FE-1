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
  return (
    <>
      <M.SubToggleIcon
        onMouseEnter={() => setHover({...hover, calculator: true})}
        onMouseLeave={() => setHover({...hover, calculator: false})}
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
        onMouseEnter={() => setHover({...hover, introduction: true})}
        onMouseLeave={() => setHover({...hover, introduction: false})}
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
        onMouseEnter={() => setHover({...hover, board: true})}
        onMouseLeave={() => setHover({...hover, board: false})}
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
