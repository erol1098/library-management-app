import { ThemeSwitchButton } from '../UI';

const Header = () => {
  return (
    <header className='flex items-center justify-around bg-white h-16 w-full shadow-md'>
      <ThemeSwitchButton />
    </header>
  );
};

export default Header;
