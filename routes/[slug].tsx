import { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import ReadButton from 'islands/button-read.tsx'
import { getArticle } from 'utils/articles.ts'
import { CSS } from 'gfm'
import type { Article } from 'types'

export const handler: Handlers<Article> = {
  async GET(_req, ctx) {
    const { slug } = ctx.params
    const article = await getArticle(slug)

    return article !== null ? ctx.render(article) : ctx.renderNotFound()
  },
}

const Home = ({ data: article, url }: PageProps<Article>) => {
  const { title, excerpt, date, author, authorUrl, body } = article

  const hasAuthor = author !== undefined
  const hasAuthorUrl = authorUrl !== undefined

  return (
    <>
      <Head>
        <title>Deno handbook en Español - {title}</title>
        <meta name='description' content={excerpt} />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>

      <Wrapper url={url}>
        <section class='mt-10 text(black dark:gray-300)'>
          <article>
            <header class='flex(& col) gap-3'>
              <div class='flex items-center gap-4'>
                <h2 class='text(2xl lg:3xl) font-bold'>
                  {title}
                </h2>
                <ReadButton title={title} />
              </div>
              {hasAuthor && (
                <div class='flex items-center gap-1'>
                  <span class='font-semibold'>
                    Autor:
                  </span>
                  {hasAuthorUrl
                    ? (
                      <a
                        href={authorUrl}
                        target='_blank'
                        rel='noreferrer noopener'
                        class='hover:underline transition duration-150'
                      >
                        {author}
                      </a>
                    )
                    : (
                      <span>
                        {author}
                      </span>
                    )}
                </div>
              )}
              <div class='flex items-center gap-1'>
                <span class='font-semibold'>
                  Fecha de publicación:
                </span>
                <time>
                  {Intl.DateTimeFormat('es').format(date)}
                </time>
              </div>
            </header>
            <div
              data-color-mode='auto'
              data-light-theme='light'
              data-dark-theme='dark'
              class='markdown-body mt-5'
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </article>
          <div class='mt-10 text-center'>
            <a
              href='/'
              class='font-bold hover:underline transition duration-150'
            >
              ← Volver al inicio
            </a>
          </div>
        </section>
      </Wrapper>
    </>
  )
}

export default Home
