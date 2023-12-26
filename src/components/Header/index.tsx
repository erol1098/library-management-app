import HeaderRightSide from './HeaderRightSide';

const Header = () => {
  return (
    <header className='flex items-center justify-around bg-white dark:bg-slate-800 h-16 w-full shadow-md'>
      <HeaderRightSide />
    </header>
  );
};

export default Header;
