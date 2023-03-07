import Input from 'components/input.tsx'

// TODO: Add interactive article search with api route

const SearchBox = () => {
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
      />
      {/* Search results shown here */}
    </form>
  )
}

export default SearchBox
