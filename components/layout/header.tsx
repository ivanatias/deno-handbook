import { AiFillGithub } from 'react-icons/ai/mod.ts'

const Header = () => (
  <header class='p-5 max-w-4xl mx-auto'>
    <div class='w-full flex gap-2 items-center justify-end'>
      <a
        href='https://github.com/ivanatias/deno-handbook'
        target='_blank'
        rel='noreferrer noopener'
        aria-label='Project repository link opens a new window'
        class='hover:scale-105 transition-transform duration-150 ease-in'
      >
        <AiFillGithub size={20} />
      </a>
      {/* Abstract to an island as this data will come from localStorage */}
      <span class='text(xs 2xl:sm) underline'>
        Has leído 1/100 artículos
      </span>
    </div>
  </header>
)

export default Header
