import { Books } from '@/components';
import { BOOKS_TABLE_ITEMS } from '@/components/Books/booksTableItems';

const BooksPage = () => {
  return (
    <section className='w-full p-8 bg-slate-100 dark:bg-slate-600'>
      <Books {...BOOKS_TABLE_ITEMS} />
    </section>
  );
};

export default BooksPage;
