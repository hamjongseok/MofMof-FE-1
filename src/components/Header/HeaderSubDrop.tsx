import * as M from '@/styles/Header/HeaderSubDropStyle';
import Image from 'next/image';
import Link from 'next/link';

interface SubDropProps {
  SubDropdownComponents: {LinkURL: string; ContentName: string}[];
}

export const HeaderSubDrop: React.FC<SubDropProps> = ({
  SubDropdownComponents,
}) => {
  return (
    <>
      <M.DoubleSubDropdownWrapper>
        <M.DoubleContentWrapper>
          {SubDropdownComponents.map((item, index) => (
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
        </M.DoubleContentWrapper>
      </M.DoubleSubDropdownWrapper>
    </>
  );
};
