interface TableHeadProps {
  headers: string[];
}

const TableHead = ({ headers }: TableHeadProps) => {
  return (
    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope='col'
            className='px-6 py-3 font-semibold tracking-wider'
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
