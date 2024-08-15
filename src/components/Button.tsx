import { ComponentProps } from 'react'

interface ButttonProps extends ComponentProps<'button'> {
  size: 'small' | 'medium'
  buttonType: 'primary' | 'secondary'
  title: string
}

export default function Button({ title, buttonType = 'primary', size = 'medium', ...props }: ButttonProps) {
  return (
    <button {...props} className={`
      p-4 rounded-xl flex justify-center items-center shadow-md transition-all active:scale-95 h-12
      ${size === 'small' && 'max-w-40 w-full'}
      ${size === 'medium' && 'max-w-64 w-full'}
      ${buttonType === 'primary' && 'bg-orange-800 text-white hover:bg-orange-950'}
      ${buttonType === 'secondary' && 'bg-orange-100 text-orange-900 hover:bg-orange-200'}
      `}>{title}</button>
  )
}
