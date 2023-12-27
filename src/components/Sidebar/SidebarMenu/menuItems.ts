interface MenuItem {
  title: string;
  icon?: React.ReactNode;
  href: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Anasayfa',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    title: 'Ödünç Ver',
    icon: 'DocumentPlusIcon',
    href: '/odunc-ver',
  },
  {
    title: 'Ödünç Verilenler',
    icon: 'DocumentCheckIcon',
    href: '/odunc-verilen-kitaplar',
  },
  {
    title: 'Kitaplar',
    icon: 'BookOpenIcon',
    href: '/kitaplar',
  },
  {
    title: 'Öğrenciler',
    icon: 'UserCircleIcon',
    href: '/ogrenciler',
  },
  {
    title: 'Yönetici Paneli',
    icon: 'Cog6ToothIcon',
    href: '/yönetici-paneli',
  },
];
