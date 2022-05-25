import { forwardRef, Ref } from 'react'

export interface CheckBoxProps {
   id: string
   checked?: boolean
   disabled?: boolean
   label?: string
   className?: string
}

function CheckBox(
   { id, checked, disabled, label, className }: CheckBoxProps,
   ref: Ref<HTMLInputElement>
) {
   return (
      <div className='w-full flex flex-row space-x-2 justify-start items-center'>
         <input
            ref={ref}
            id={id}
            className='appearance-none border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer'
            type='checkbox'
            checked={checked}
            disabled={disabled}
         />
         <label htmlFor={id} className={className}>
            {label}
         </label>
      </div>
   )
}

const ForwardRefToCheckBox = forwardRef(CheckBox)

export default ForwardRefToCheckBox
