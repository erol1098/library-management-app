'use client';

import { getBook, deleteBook } from '@/libs/Books';
import { TableActionsItem } from '@/types/TableTypes';
import ActionButtons from '@/components/UI/CustomTable/TableActionButtons';

interface BooksTableActionsProps {
  item?: TableActionsItem;
}

const BooksTableActions = ({ item }: BooksTableActionsProps) => {
  const id = item?.id as number;

  return (
    <ActionButtons>
      <ActionButtons.Edit
        onClick={() => {
          console.log('edit');
        }}
      />
      <ActionButtons.Delete
        onClick={async () => {
          await deleteBook(id);
        }}
      />
      <ActionButtons.More
        onClick={async () => {
          const book = await getBook(id);
        }}
      />
    </ActionButtons>
  );
};

export default BooksTableActions;
