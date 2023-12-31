interface TableBodyProps {
  body: {
    id: string;
    title: string;
    author: string;
    type: string;
  }[];
}

const TableBody = ({ body }: TableBodyProps) => {
  return (
    <tbody>
      {body.map(({ title, author, type }) => (
        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
          <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
          >
            {title}
          </th>
          <td className='px-6 py-4'>{author}</td>
          <td className='px-6 py-4'>{type}</td>
          <td className='px-6 py-4 text-right'>
            <a
              href='#'
              className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
            >
              Edit
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
