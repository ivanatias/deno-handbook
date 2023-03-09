import { AppProps } from '$fresh/server.ts'

const App = ({ Component }: AppProps) => (
  <body class='bg(white dark:[#0d1117])'>
    <Component />
  </body>
)

export default App
