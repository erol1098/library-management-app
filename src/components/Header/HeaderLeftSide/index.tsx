import BrandLogo from './BrandLogo';
import SidebarButton from './SidebarButton';

const HeaderLeftSide = () => {
  return (
    <div className=' flex items-center justify-center gap-3 lg:hidden'>
      <SidebarButton />
      <BrandLogo logoUrl='https://brandmark.io/logo-rank/random/beats.png' />
    </div>
  );
};

export default HeaderLeftSide;
