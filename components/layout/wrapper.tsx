import Header from 'components/layout/header.tsx'
import Footer from 'components/layout/footer.tsx'
import type { ComponentChildren } from 'preact'

interface Props {
  children: ComponentChildren
}

const Wrapper = ({ children }: Props) => (
  <>
    <Header />
    <main class='p-5 max-w-prose mx-auto'>
      {children}
    </main>
    <Footer />
  </>
)

export default Wrapper
