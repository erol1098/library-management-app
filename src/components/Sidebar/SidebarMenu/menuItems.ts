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
    href: '/lend-book',
  },
  {
    title: 'Ödünç Verilenler',
    icon: 'DocumentCheckIcon',
    href: '/lent-books',
  },
  {
    title: 'Kitap Paneli',
    icon: 'BookOpenIcon',
    href: '/book-panel',
  },
  {
    title: 'Öğrenci Paneli',
    icon: 'UserCircleIcon',
    href: '/student-panel',
  },
  {
    title: 'Yetkili Paneli',
    icon: 'Cog6ToothIcon',
    href: '/user-panel',
  },
];
