import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {}


export default function Input({...props}: InputProps) {
  return (
    <input type="text" {...props} className="flex-1 bg-orange-100 text-orange-950 placeholder-orange-600 px-4 outline-none rounded-xl h-12 w-full" />
  )
}
