// @deno-types="https://deno.land/x/fuse@v6.4.1/dist/fuse.d.ts"
import Fuse from 'fuse'
import type { Handlers } from '$fresh/server.ts'
import { getAllArticles } from 'utils/articles.ts'

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url)
    const query = url.searchParams.get('q') ?? ''

    const articles = await getAllArticles()

    const list = articles.map(({ title, slug, author }) => ({
      title,
      slug,
      author,
    }))

    const fuse = new Fuse(list, {
      keys: ['title'],
      minMatchCharLength: 2,
      includeMatches: true,
      includeScore: true,
    })

    const searchResults = fuse.search(query).slice(0, 5)

    return new Response(JSON.stringify(searchResults), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    })
  },
}
