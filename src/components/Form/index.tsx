"use client"
import { useFormState, useFormStatus } from 'react-dom'
import { TextField } from './FormFields'

interface ITextField {
  label: string
  name: string
  placeholder: string
  required: boolean
  type: string
}

interface IFormProps {
  fields: ITextField[]
  action: any
}

function SubmitButton({
  label = 'Submit',
}: {
  label?: string
}) {
  const { pending } = useFormStatus()

  return (
    <button type="submit"
      className="flex-1 px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-blue-600"
      disabled={pending}
    >
      {label}
    </button>
  )
}


const Form = ({ fields, action }: IFormProps) => {

  const [state, formAction] = useFormState(action, {
    message: undefined,
    error: undefined
  })

  return (
    <form className='flex flex-col gap-2 w-full max-w-lg p-4 mx-auto my-4 bg-white rounded-xl shadow-md dark:bg-slate-800'
      action={formAction}
    >
      {
        fields.map((field: ITextField) => (
          <TextField
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            type={field.type}
            error={state.error?.[field.name] ? state.error?.[field.name]["_errors"][0] : undefined}
          />

        ))
      }
      <div className='flex items-center justify-between mt-4'>
        <SubmitButton />
      </div>

    </form>
  )
}

export default Form