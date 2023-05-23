import * as M from '@/styles/Header/MobileDropdownStyle';
import Link from 'next/link';

interface DropdownComponents {
  items: {title: string; linkURL: string}[];
}

export const MobileDropdown: React.FC<DropdownComponents> = ({items}) => {
  return (
    <>
      <M.DropdownCon>
        <M.DropdownUl>
          {items.map((item, index) => (
            <M.DropdownLi key={index}>
              <Link href={item.linkURL} legacyBehavior>
                <M.DropdownA>{item.title}</M.DropdownA>
              </Link>
            </M.DropdownLi>
          ))}
        </M.DropdownUl>
      </M.DropdownCon>
    </>
  );
};
