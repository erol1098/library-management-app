'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SidebarHeaderProps {
  needClose?: boolean;
  closeSidebar?: () => void;
}

const SidebarHeader = ({ needClose, closeSidebar }: SidebarHeaderProps) => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <Image
        src='https://brandmark.io/logo-rank/random/beats.png'
        alt='logo'
        width={50}
        height={50}
      />
      <h1 className='text-2xl font-bold text-slate-200'>Librarian</h1>
      {needClose && (
        <ArrowLeftIcon
          className='w-6 h-6 text-slate-200 dark:text-slate-300 cursor-pointer transition-colors ms-3'
          onClick={closeSidebar}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
