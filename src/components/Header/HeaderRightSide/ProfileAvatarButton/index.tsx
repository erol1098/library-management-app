'use client';
import { useState } from 'react';

import Image from 'next/image';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const ProfileAvatarButton = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  return (
    <div className='flex items-center justify-center gap-1'>
      <Image
        src='https://placekitten.com/200/200'
        alt='Profile'
        width={40}
        height={40}
        className='rounded-full cursor-pointer'
        onClick={() => setOpenProfileMenu((prevState) => !prevState)}
      />
      {openProfileMenu ? (
        <ChevronDownIcon className='w-4 h-4 ' />
      ) : (
        <ChevronUpIcon className='w-4 h-4 ' />
      )}
    </div>
  );
};

export default ProfileAvatarButton;
