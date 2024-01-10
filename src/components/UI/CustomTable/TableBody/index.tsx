interface TableBodyProps {
  body: Object[];
  actions?: JSX.Element;
}

const TableBody = ({ body, actions: Actions }: TableBodyProps) => {
  return (
    <tbody>
      {body.map((item: Object, index: number) => (
        <tr
          key={index}
          className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
        >
          {Object.values(item).map((it: string) => (
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              {it}
            </td>
          ))}
          {Actions?.type && <Actions.type item={item} />}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
