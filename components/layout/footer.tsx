import { AiFillGithub } from 'react-icons/ai/mod.ts'

const Footer = () => (
  <footer class='my-5 text(base center xl:lg) p-5 max-w-4xl mx-auto flex(& col) items-center font-semibold gap-4 justify-center text(black dark:white)'>
    <a
      href='https://github.com/ivanatias/deno-handbook/blob/main/CONTRIBUTING.md'
      target='_blank'
      rel='noreferrer noopener'
      class='flex items-center gap-2 hover:underline'
    >
      <AiFillGithub size={24} />
      ¡Contribuye al proyecto!
      <span class='sr-only'>opens a new tab</span>
    </a>
    <a
      href='https://github.com/ivanatias/deno-handbook/issues'
      target='_blank'
      rel='noreferrer noopener'
      class='hover:underline text-base'
    >
      ¿Tienes alguna sugerencia, has encontrado un error o te gustaría ver
      alguna feature nueva? ¡Infórmanos!
      <span class='sr-only'>opens a new tab</span>
    </a>
  </footer>
)

export default Footer
