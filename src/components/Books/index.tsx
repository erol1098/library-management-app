import { getBooks } from '@/libs/Books';
import { CustomTable } from '../';

import { Book, BookTable } from '@/types/BookTypes';
import BooksTableActions from './BooksTableActions';

const Books = async () => {
  const books: Book[] = await getBooks();
  const bookTable: BookTable = {
    caption: {
      caption: 'Okul Kütüphanesi Kitapları',
      description: 'Okul kütüphanesinde bulunan kitapların listesi.',
    },
    header: ['Kitap No', 'Başlık', 'Yazar', 'Tür', ""],
    body: books,
    actions: <BooksTableActions />,
  };

  return (
    <div className='flex flex-col'>
      <CustomTable {...bookTable} />
    </div>
  );
};

export default Books;
