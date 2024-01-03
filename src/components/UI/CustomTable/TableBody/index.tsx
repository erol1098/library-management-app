interface TableBodyProps {
  body: any[];
}

const TableBody = ({ body }: TableBodyProps) => {
  return (
    <tbody>
      {body.map((item: any) => (
        <tr
          key={item.id}
          className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
        >
          {Object.keys(item).map((it: any) => (
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              {it}
            </td>
          ))}
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
