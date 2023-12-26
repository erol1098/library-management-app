import { Bars3Icon } from '@heroicons/react/24/outline';

const SidebarButton = () => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <button
        type='button'
        className='flex items-center justify-center w-12 h-12 rounded-lg bg-gray-200 dark:bg-slate-600 text-slate-500 dark:text-slate-100 cursor-pointer transition-colors'
      >
        <span className='sr-only'>Open sidebar</span>
        <Bars3Icon className='w-6 h-6 text-slate-800 dark:text-slate-100' />
      </button>
    </div>
  );
};

export default SidebarButton;
