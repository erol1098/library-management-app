'use client';
import { BellAlertIcon } from '@heroicons/react/24/outline';

const NotificationsButton = () => {
  return (
    <BellAlertIcon
      onClick={() => console.log('notifications')}
      className='w-10 h-10 p-2 bg-gray-200 rounded-full dark:bg-slate-600 text-slate-500 dark:text-slate-100 cursor-pointer'
    />
  );
};

export default NotificationsButton;
