import { AiFillGithub } from 'react-icons/ai/mod.ts'

const Header = () => (
  <header class='flex justify-end p-5 max-w-4xl mx-auto text(black dark:white)'>
    <a
      href='https://github.com/ivanatias/deno-handbook'
      target='_blank'
      rel='noreferrer noopener'
      aria-label='Project repository link opens a new tab'
      class='hover:scale-105 transition-transform duration-150 ease-in'
    >
      <AiFillGithub size={24} />
    </a>
  </header>
)

export default Header
