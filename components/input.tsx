import type { Input } from 'types'

interface Props extends Input {
  hasIcon?: boolean
}

const Input = (
  { type = 'text', className, hasIcon = false, ...restOfProps }: Props,
) => {
  const defaultStyle =
    `bg-transparent focus:(& border-green-300) outline-none border(& green-100) w-full ${
      hasIcon ? 'pl-10' : ''
    } p-5 rounded-t-3xl rounded-b-none text(sm lg:base black dark:white) placeholder(gray-500 dark:gray-400) placeholder-shown:font-semibold`

  return (
    <input
      type={type}
      class={className ?? defaultStyle}
      {...restOfProps}
    />
  )
}

export default Input
