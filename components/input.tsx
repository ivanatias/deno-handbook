interface Props {
  type?: string
  placeholder: string
  onChange?: () => void
  className?: string
  id: string
  title: string
}

const defaultStyle =
  'outline-none border(& green-100) w-full p-5 rounded-full text(sm lg:base black) placeholder(gray-500) placeholder-shown:font-semibold'

const Input = (
  { type = 'text', className = defaultStyle, ...restOfProps }: Props,
) => (
  <input
    type={type}
    class={className}
    {...restOfProps}
  />
)

export default Input
