import { AiFillGithub } from 'react-icons/ai/mod.ts'

const Footer = () => (
  <footer class='p-5 max-w-prose mx-auto flex justify-center'>
    <a
      href='https://github.com/ivanatias/deno-handbook/blob/main/CONTRIBUTING.md'
      target='_blank'
      rel='noreferrer noopener'
      class='flex items-center gap-2 text(base xl:lg) hover:underline font-semibold'
    >
      <AiFillGithub size={24} />
      ¡Contribuye al proyecto!
    </a>
  </footer>
)

export default Footer
