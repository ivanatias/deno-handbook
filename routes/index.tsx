import { Handlers, PageProps } from '$fresh/server.ts'
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

const Home = ({ data: articles }: PageProps<Article[]>) => (
  <>
    <Head>
      <title>Deno handbook en español</title>
    </Head>

    <Wrapper>
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
