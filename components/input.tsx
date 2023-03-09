interface Props {
  type?: string
  placeholder: string
  onChange?: () => void
  className?: string
  id: string
  title: string
  hasIcon?: boolean
}

const Input = (
  { type = 'text', className, hasIcon = false, ...restOfProps }: Props,
) => {
  const defaultStyle =
    `bg-transparent focus:border-green-300 outline-none border(& green-100) w-full ${
      hasIcon ? 'pl-10' : ''
    } p-5 rounded-full text(sm lg:base black dark:white) placeholder(gray-500 dark:gray-400) placeholder-shown:font-semibold`

  return (
    <input
      type={type}
      class={className ?? defaultStyle}
      {...restOfProps}
    />
  )
}

export default Input
