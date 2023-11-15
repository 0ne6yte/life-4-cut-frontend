import { ReactComponent as Picture } from '@/assets/picture.svg';
import { ReactComponent as User } from '@/assets/user.svg';

import { FloatingButton } from '.';

export function BottomTab() {
  return (
    <nav role="tab" className="px-[27px] py-[7px]">
      <ul className="flex items-center justify-around fill-grey-placeholder">
        <li>
          <Picture />
        </li>
        <li>
          <FloatingButton />
        </li>
        <li>
          <User width={20} height={20} />
        </li>
      </ul>
    </nav>
  );
}
