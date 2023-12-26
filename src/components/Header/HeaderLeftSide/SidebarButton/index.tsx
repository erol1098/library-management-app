'use client';
import { useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { Sidebar } from '@/components';

type HandleToggleSidebar = () => void;

const SidebarButton = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar: HandleToggleSidebar = () => {
    setOpenSidebar(true);
  };

  const handleCloseSidebar: HandleToggleSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <div className='flex items-center justify-center gap-3'>
      <button
        type='button'
        className='flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 dark:bg-slate-600 text-slate-500 dark:text-slate-100 cursor-pointer transition-colors'
        onClick={handleOpenSidebar}
      >
        <Bars3Icon className='w-6 h-6 text-slate-800 dark:text-slate-100' />
      </button>
      {openSidebar && (
        <div className='fixed w-64 inset-0 z-50 transition-all duration-700 ease-in-out lg:hidden'>
          <Sidebar needClose={true} closeSidebar={handleCloseSidebar} />
        </div>
      )}
    </div>
  );
};

export default SidebarButton;
