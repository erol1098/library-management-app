import {
  EllipsisHorizontalCircleIcon,
  TrashIcon,
  PlusCircleIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';

const ActionButtons = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <td className='px-6 py-4 flex items-center justify-center gap-2'>
      {children}
    </td>
  )
}

const AddButton = ({ onClick }: React.PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <button type='button' className='text-green-600 hover:text-green-900'>
      <PlusCircleIcon className='w-5 h-5' onClick={onClick} />
    </button>
  )
}

const EditButton = ({ onClick }: React.PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <button type='button' className='text-blue-600 hover:text-blue-900'>
      <PencilSquareIcon className='w-5 h-5' onClick={onClick} />
    </button>
  )
}

const DeleteButton = ({ onClick }: React.PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <button type='button' className='text-red-600 hover:text-red-900'>
      <TrashIcon className='w-5 h-5' onClick={onClick} />
    </button>
  )
}

const MoreButton = ({ onClick }: React.PropsWithChildren<{ onClick: () => void }>) => {
  return (
    <button type='button' className='text-gray-600 hover:text-gray-900'>
      <EllipsisHorizontalCircleIcon className='w-5 h-5' onClick={onClick} />
    </button>
  )
}

ActionButtons.Add = AddButton
ActionButtons.Edit = EditButton
ActionButtons.Delete = DeleteButton
ActionButtons.More = MoreButton

export default ActionButtons



