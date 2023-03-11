import { Head } from '$fresh/runtime.ts'
import type { ErrorPageProps } from '$fresh/server.ts'

const ErrorPage = (_props: ErrorPageProps) => (
  <>
    <Head>
      <title>500 - Error del servidor</title>
    </Head>
    <div class='p-4 grid h-screen gap-3 text(black dark:white) place-content-center'>
      <h1 class='text(center 4xl 2xl:5xl) font-bold'>
        ¡Ups! Ha ocurrido un error
      </h1>
      <a
        href='/'
        class='font-bold hover:underline transition duration-150 text-center'
      >
        Intentar de nuevo
      </a>
    </div>
  </>
)

export default ErrorPage
