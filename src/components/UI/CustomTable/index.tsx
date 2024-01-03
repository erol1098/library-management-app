import TableBody from './TableBody';
import TableCaption from './TableCaption';
import TableHead from './TableHead';

interface CustomTableProps {
  caption: {
    caption: string;
    description: string;
  };
  header: string[];
  body: {
    id?: string;
    title: string;
    author: string;
    genre: string;
  }[];
}

const CustomTable = ({ caption, header, body }: CustomTableProps) => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <TableCaption
          caption={caption.caption}
          description={caption.description}
        />
        <TableHead headers={header} />
        <TableBody body={body} />
      </table>
    </div>
  );
};

export default CustomTable;
