import { getBooks } from '@/libs/Books';
import { CustomTable } from '../';

import { Book, BookTable, BooksTableAction } from '@/types/BookTypes';

const Books = async () => {
  const books: Book[] = await getBooks();

  const bookTable: BookTable = {
    caption: {
      caption: 'Okul Kütüphanesi Kitapları',
      description: 'Okul kütüphanesinde bulunan kitapların listesi.',
    },
    header: ['Kitap No', 'Başlık', 'Yazar', 'Tür'],
    body: books,
    actions: [
      {
        type: 'READ',
        action: (item: Book) => {
          console.log(item);
        },
      },
      {
        type: 'UPDATE',
        action: (item: Book) => {
          console.log(item);
        },
      },
      {
        type: 'DELETE',
        action: (item: Book) => {
          console.log(item);
        },
      },
    ],
  };

  return (
    <div className='flex flex-col'>
      <CustomTable {...bookTable} />
    </div>
  );
};

export default Books;
