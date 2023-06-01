import * as M from '@/styles/Header/SubHeaderStyle';

export const SubHeader = () => {
  return (
    <>
      <M.SubHeaderWrapper>
        <M.SubHeaderTitle>펫테일게코</M.SubHeaderTitle>

        <M.SubHeaderContentCon>
          <M.SubHeaderContents>홈</M.SubHeaderContents>
          <M.SubHeaderContents>모프소개</M.SubHeaderContents>
          <M.SubHeaderContents>모프계산기</M.SubHeaderContents>
          <M.SubHeaderContents>게시판</M.SubHeaderContents>
        </M.SubHeaderContentCon>
      </M.SubHeaderWrapper>
    </>
  );
};
