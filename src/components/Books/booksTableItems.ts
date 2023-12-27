interface BookTable {
  caption: {
    caption: string;
    description: string;
  };
  header: string[];
  body: {
    id: string;
    title: string;
    author: string;
    type: string;
  }[];
}

export const BOOKS_TABLE_ITEMS: BookTable = {
  caption: {
    caption: 'Kitaplar',
    description: 'Kitaplar hakkında bilgiler',
  },
  header: ['Kitap Adı', 'Yazar', 'Tür', ''],
  body: [
    {
      id: '1',
      title: 'Kitap 1',
      author: 'Yazar 1',
      type: 'Tür 1',
    },
    {
      id: '2',
      title: 'Kitap 2',
      author: 'Yazar 2',
      type: 'Tür 2',
    },
  ],
};
