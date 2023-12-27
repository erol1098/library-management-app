interface TableCaptionProps {
  caption: string;
  description: string;
}
const TableCaption = ({ caption, description }: TableCaptionProps) => {
  return (
    <caption className='p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
      {caption}
      <p className='mt-1 text-sm font-normal text-gray-500 dark:text-gray-400'>
        {description}
      </p>
    </caption>
  );
};

export default TableCaption;
