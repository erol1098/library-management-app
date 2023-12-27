import Link from 'next/link';

import {
  HomeIcon,
  DocumentPlusIcon,
  DocumentCheckIcon,
  BookOpenIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';

interface SidebarMenuItemProps {
  title: string;
  icon?: React.ReactNode;
  href: string;
}

const SidebarMenuItem = ({ title, icon, href }: SidebarMenuItemProps) => {
  const setIcon = () => {
    const classes = 'w-8 h-8 text-slate-100 dark:text-slate-200';
    switch (icon) {
      case 'HomeIcon':
        return <HomeIcon className={classes} />;
      case 'DocumentPlusIcon':
        return <DocumentPlusIcon className={classes} />;
      case 'DocumentCheckIcon':
        return <DocumentCheckIcon className={classes} />;
      case 'BookOpenIcon':
        return <BookOpenIcon className={classes} />;
      case 'UserCircleIcon':
        return <UserCircleIcon className={classes} />;
      case 'Cog6ToothIcon':
        return <Cog6ToothIcon className={classes} />;
      default:
        return null;
    }
  };

  return (
    <Link
      href={href}
      className='w-full flex items-center gap-3 px-4 py-2 rounded-md hover:bg-violet-800 dark:hover:bg-slate-700'
    >
      {setIcon()}
      <p className='text-md font-semibold text-slate-100 dark:text-slate-200'>
        {title}
      </p>
    </Link>
  );
};

export default SidebarMenuItem;
