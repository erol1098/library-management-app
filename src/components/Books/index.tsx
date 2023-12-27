import { CustomTable } from '..';

interface BooksProps {
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

const Books = (props: BooksProps) => {
  return <CustomTable {...props} />;
};

export default Books;
