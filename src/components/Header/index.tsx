import HeaderLeftSide from './HeaderLeftSide';
import HeaderRightSide from './HeaderRightSide';

const Header = () => {
  return (
    <header className=' bg-white dark:bg-slate-800 h-16 w-full shadow-md'>
      <div className='md:container mx-auto flex items-center justify-between px-5 bg-white dark:bg-slate-800 h-full w-full'>
        <HeaderLeftSide />
        <HeaderRightSide />
      </div>
    </header>
  );
};

export default Header;
