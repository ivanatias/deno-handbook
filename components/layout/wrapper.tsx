import type { ComponentChildren } from 'preact'
import Header from 'components/layout/header.tsx'
import Footer from 'components/layout/footer.tsx'
import SubHeader from 'components/layout/sub-header.tsx'
import SearchBox from 'islands/search-box.tsx'
import { AiOutlineSearch } from 'react-icons/ai/mod.ts'

interface Props {
  children: ComponentChildren
}

const Wrapper = ({ children }: Props) => (
  <>
    <Header />
    <main class='p-5 max-w-4xl mx-auto'>
      <SubHeader />
      <div class='relative mt-5'>
        <AiOutlineSearch
          size={24}
          class='z-10 text(gray-500 dark:gray-400) font-semibold absolute top-1/2 left-3 -translate-y-1/2'
          aria-hidden={true}
        />
        <SearchBox />
      </div>
      {children}
    </main>
    <Footer />
  </>
)

export default Wrapper
