interface ITextFieldProps {
  label: string
  name: string
  placeholder: string
  required: boolean
  type: string
  error?: string
}


const TextField = ({
  label,
  name,
  placeholder,
  required,
  type,
  error
}: ITextFieldProps
) => {


  const borderClass = error ? 'border-red-600 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'


  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='text-md font-semibold text-slate-800 dark:text-slate-100'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        className={`px-4 py-2 mt-2 border rounded-md outline-none focus:ring-2 focus:border-transparent ${borderClass}`}
      />
      <span className='text-sm mt-2 text-red-600'>{
        error
      }</span>
    </div>

  )

}

export default TextField