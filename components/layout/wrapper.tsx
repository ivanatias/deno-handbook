import Header from 'components/layout/header.tsx'
import Footer from 'components/layout/footer.tsx'
import SubHeader from 'components/layout/sub-header.tsx'
import type { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
}

const Wrapper = ({ children }: Props) => (
  <>
    <Header />
    <main class='p-5 max-w-4xl mx-auto'>
      <SubHeader />
      {children}
    </main>
    <Footer />
  </>
)

export default Wrapper
