'use client';

import { closeSubmenu } from '../redux/features/subMenuLinks';
import { closeOrderDropdown } from '../redux/features/orderDropdown';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

interface AppWrapperProps {
  children: React.ReactNode;
}
const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isSubmenuOpen } = useAppSelector((state) => state.submenu);
  const { isOrderDropdownOpen } = useAppSelector((state) => state.orderBy);

  const toggleDropdown = () => {
    if (isSubmenuOpen) dispatch(closeSubmenu());
    if (isOrderDropdownOpen) dispatch(closeOrderDropdown());
  };

  return (
    <div
      className='
        flex
        flex-col
        justify-between
        h-full
      '
      onClick={toggleDropdown}
    >
      {children}
    </div>
  );
};

export default AppWrapper;
