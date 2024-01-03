import { getBooks } from '@/libs/Books';
import { CustomTable } from '../';

interface Book {
  id?: string;
  title: string;
  author: string;
  genre: string;
}

interface Caption {
  caption: string;
  description: string;
}
interface BookTable {
  caption: Caption;
  header: string[];
  body: Book[];
}

const Books = async () => {
  const books: Book[] = await getBooks();

  const bookTable: BookTable = {
    caption: {
      caption: 'Kitaplar',
      description: 'Kitapların listesi',
    },
    header: ['Başlık', 'Yazar', 'Tür'],
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
