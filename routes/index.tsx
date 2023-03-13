import type { Handlers, PageProps } from '$fresh/server.ts'
import { Head } from '$fresh/runtime.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import ArticleCard from 'components/article-card.tsx'
import Grid from 'components/grid.tsx'
import { getAllArticles } from 'utils/articles.ts'
import type { Article } from 'types'

export const handler: Handlers<Article[]> = {
  async GET(_req, ctx) {
    const articles = await getAllArticles()
    return ctx.render(articles)
  },
}

const Home = ({ data: articles, url }: PageProps<Article[]>) => (
  <>
    <Head>
      <title>Deno handbook en Español</title>
      <meta
        name='description'
        content='Handbook en Español que proporciona información acerca de todo lo que esté relacionado con Deno (información general, frameworks, tips, utilidades y más). Hecho por developers, para developers.'
      />
    </Head>

    <Wrapper currentPath={url.pathname}>
      <section>
        <Grid additionalStyles='mt-10'>
          {articles.map(({ title, excerpt, slug }) => (
            <ArticleCard
              key={slug}
              title={title}
              desc={excerpt}
              href={slug}
            />
          ))}
        </Grid>
      </section>
    </Wrapper>
  </>
)

export default Home
