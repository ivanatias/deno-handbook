import type { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
  className?: string
  additionalStyles?: string
}

const defaultStyles = 'grid(& cols-1 sm:cols-2 md:cols-3) gap-4'

const Grid = (
  { children, className = defaultStyles, additionalStyles }: Props,
) => {
  return (
    <div
      class={`${className} ${
        additionalStyles !== undefined && additionalStyles
      }`}
    >
      {children}
    </div>
  )
}

export default Grid
