import { useCallback, useState } from 'preact/hooks'
import Input from 'components/input.tsx'
import { debounce } from '$std/async/debounce.ts'
import type { InputChangeEvent, SearchResult } from 'types'

const SearchBox = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  const debounceSearch = useCallback(
    debounce(async (searchTerm: string) => {
      const res = await fetch(`/api/search?q=${searchTerm}`)
      const results: SearchResult[] = await res.json()
      setSearchResults(results)
      console.log(results)
    }, 300),
    [],
  )

  const handleChange = useCallback((event: InputChangeEvent) => {
    const { value } = event.currentTarget
    debounceSearch(value)
  }, [])

  return (
    <form
      role='search'
      onSubmit={(event) => event.preventDefault()}
      class='relative'
    >
      <Input
        type='search'
        placeholder='Busca un artículo...'
        title='search-article'
        id='search-article'
        hasIcon
        onInput={handleChange}
        autocomplete='off'
      />

      {searchResults.length > 0 && (
        <ul class='absolute top-full border(& green-300) rounded-b-3xl z-50 bg(white dark:[#0d1117]) w-full'>
          {searchResults.map((result) => {
            const { item, matches } = result
            const { title, slug } = item
            const [{ indices }] = matches

            const [bestMatch] = indices.sort((a, b) =>
              (b[1] - b[0]) - (a[1] - a[0])
            )

            const html = title.slice(0, bestMatch[0]) +
              '<mark>' +
              title.slice(bestMatch[0], bestMatch[1] + 1) + '</mark>' +
              title.slice(bestMatch[1] + 1)

            return (
              <li
                key={slug}
                class='hover:last-child:rounded-b-3xl dark:hover:bg-[#25282E] hover:bg-gray-100'
              >
                <a
                  href={`/${slug}`}
                  class='text(sm lg:base black dark:white) font-bold block px-4 py-5'
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </li>
            )
          })}
        </ul>
      )}
    </form>
  )
}

export default SearchBox
