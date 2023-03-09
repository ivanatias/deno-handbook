import { extract } from '$std/encoding/front_matter/any.ts'
import { render } from 'gfm'
import type { Article } from 'types'

const getArticle = async (slug: string): Promise<Article | null> => {
  try {
    const rawArticle = await Deno.readTextFile(`./handbook/${slug}.md`)
    const { attrs, body } = extract(rawArticle)

    const { title, date, excerpt, author, authorUrl } = attrs as Record<
      keyof Omit<Article, 'slug' | 'body'>,
      string
    >

    return {
      title,
      date: new Date(date),
      excerpt,
      author,
      authorUrl,
      slug,
      body: render(body),
    } as Article
  } catch {
    return null
  }
}

const getAllArticles = async (): Promise<Article[]> => {
  const articlePromises = []

  for await (const file of Deno.readDir('./handbook')) {
    const [slug] = file.name.split('.')

    if (slug !== undefined) articlePromises.push(getArticle(slug))
  }

  const articles = await Promise.all(articlePromises) as Article[]

  articles.sort((a, b) => {
    return b.date.getTime() - a.date.getTime()
  })

  return articles
}

export { getAllArticles, getArticle }
