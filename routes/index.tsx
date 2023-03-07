import { Head } from '$fresh/runtime.ts'
import Wrapper from 'components/layout/wrapper.tsx'
import ArticleCard from 'components/article-card.tsx'
import Grid from 'components/grid.tsx'

const Home = () => (
  <>
    <Head>
      <title>Deno handbook en español</title>
    </Head>

    <Wrapper>
      <section>
        <Grid additionalStyles='mt-10'>
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
          <ArticleCard
            title='Que es Deno'
            desc='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            href='https://google.com'
          />
        </Grid>
      </section>
    </Wrapper>
  </>
)

export default Home
