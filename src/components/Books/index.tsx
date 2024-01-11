import { getBooks, addBook } from '@/libs/Books';
import { CustomTable } from '../';

import { Book, BookTable } from '@/types/BookTypes';
import BooksTableActions from './BooksTableActions';
import Form from '../Form';
import { ADD_BOOK_FORM_FIELDS } from '@/libs/Books/FormFields/addFormFields';

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
      <Form
        fields={
          ADD_BOOK_FORM_FIELDS
        }
        action={addBook}
      />
    </div>
  );
};

export default Books;
