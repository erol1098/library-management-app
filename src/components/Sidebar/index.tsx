'use client';
import { useRef } from 'react';

import SidebarHeader from './SidebarHeader';
import useOutsideClick from '@/hooks/useOutsideClick';
import SidebarMenu from './SidebarMenu';
interface SidebarProps {
  needClose?: boolean;
  closeSidebar?: () => void;
}
const Sidebar = (props: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useOutsideClick(sidebarRef, () => {
    props.closeSidebar && props.closeSidebar();
  });

  return (
    <aside
      ref={sidebarRef}
      className='bg-violet-900 dark:bg-slate-800 h-lvh w-64 py-4'
    >
      <SidebarHeader {...props} />
      <SidebarMenu />
    </aside>
  );
};

export default Sidebar;
