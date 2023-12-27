'use client';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface SidebarHeaderProps {
  needClose?: boolean;
  closeSidebar?: () => void;
}

const SidebarHeader = ({ needClose, closeSidebar }: SidebarHeaderProps) => {
  return (
    <div className='flex items-center justify-start gap-3 ps-4'>
      <Image
        src='https://brandmark.io/logo-rank/random/beats.png'
        alt='logo'
        width={50}
        height={50}
        className='rounded-full cursor-pointer'
      />
      <h1 className='text-xl font-bold text-slate-200'>Kütüphaneci</h1>
      {needClose && (
        <ArrowLeftIcon
          className='w-6 h-6 text-slate-100 dark:text-slate-200 cursor-pointer transition-colors ms-3'
          onClick={closeSidebar}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
