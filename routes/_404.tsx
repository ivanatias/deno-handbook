import { Head } from '$fresh/runtime.ts'
import type { UnknownPageProps } from '$fresh/server.ts'

const NotFoundPage = (_props: UnknownPageProps) => (
  <>
    <Head>
      <title>404 - Página no encontrada</title>
    </Head>
    <div class='p-4 grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(center 4xl 2xl:5xl) font-bold'>
        La página no ha sido encontrada
      </h1>
      <a
        href='/'
        class='font-bold hover:underline transition duration-150 text-center'
      >
        Volver al inicio
      </a>
    </div>
  </>
)

export default NotFoundPage
