import { getBooks } from '@/libs/Books';
import { CustomTable } from '../';

import { Book, BookTable } from '@/types/BookTypes';

const Books = async () => {
  const books: Book[] = await getBooks();

  const bookTable: BookTable = {
    caption: {
      caption: 'Kitaplar',
      description: 'Kitapların listesi',
    },
    header: ['Kitap No', 'Başlık', 'Yazar', 'Tür'],
    body: books,
  };

  return (
    <div className='flex flex-col'>
      <CustomTable
        caption={bookTable.caption}
        header={bookTable.header}
        body={bookTable.body}
      />
    </div>
  );
};

export default Books;
