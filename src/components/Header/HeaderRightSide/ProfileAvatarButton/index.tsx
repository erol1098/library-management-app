'use client';
import { useState } from 'react';

import Image from 'next/image';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const ProfileAvatarButton = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  return (
    <div
      className='flex items-center justify-center gap-1
     w-[40px] h-[40px] rounded-full  overflow-hidden
      '
    >
      <Image
        src='https://placekitten.com/200/200'
        alt='Profile'
        width={40}
        height={40}
        className='rounded-full cursor-pointer
        hover:scale-110 transition-all duration-200 ease-in-out
        '
        onClick={() => setOpenProfileMenu((prevState) => !prevState)}
      />
      {openProfileMenu ? (
        <ChevronDownIcon className='w-4 h-4 text-slate-800 dark:text-slate-100' />
      ) : (
        <ChevronUpIcon className='w-4 h-4 text-slate-800 dark:text-slate-100' />
      )}
    </div>
  );
};

export default ProfileAvatarButton;
