import SidebarMenuItem from '../SidebarMenuItem';
import { MENU_ITEMS } from './menuItems';

const SidebarMenu = () => {
  return (
    <div className=''>
      <ul className='flex flex-col gap-4 my-8 px-4'>
        {MENU_ITEMS.map((item) => (
          <SidebarMenuItem key={item.title} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
