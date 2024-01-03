import {
  PencilSquareIcon,
  TrashIcon,
  EllipsisHorizontalCircleIcon,
  PlusCircleIcon,
} from '@heroicons/react/16/solid';

export const Actions = ({ children }: any) => (
  <td className='px-6 py-4 flex items-center justify-center gap-2'>
    {children}
  </td>
);

const Add = () => (
  <button type='button' className='text-green-600 hover:text-green-900'>
    <PlusCircleIcon className='w-5 h-5' />
  </button>
);

const Edit = () => (
  <button type='button' className='text-yellow-600 hover:text-yellow-900'>
    <PencilSquareIcon className='w-5 h-5' />
  </button>
);

const Delete = () => (
  <button type='button' className='text-red-600 hover:text-red-900'>
    <TrashIcon className='w-5 h-5' />
  </button>
);

const More = () => (
  <button type='button' className='text-blue-600 hover:text-blue-900'>
    <EllipsisHorizontalCircleIcon className='w-5 h-5' />
  </button>
);

Actions.Add = Add;
Actions.Edit = Edit;
Actions.Delete = Delete;
Actions.More = More;
