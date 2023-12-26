import { ThemeSwitchButton } from '@/components/UI';
import ProfileAvatarButton from './ProfileAvatarButton';
import NotificationsButton from './NotificationsButton';

const HeaderRightSide = () => {
  return (
    <div className='flex items-center justify-center gap-3'>
      <ThemeSwitchButton />
      <NotificationsButton />
      <ProfileAvatarButton />
    </div>
  );
};

export default HeaderRightSide;
