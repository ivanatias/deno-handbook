const SubHeader = () => (
  <div class='flex(& col lg:row) gap-3 lg:justify-between items-center'>
    <div class='flex(& col) gap-2 text(black dark:gray-300)'>
      <h1 class='text(3xl center lg:left lg:5xl green-400) font-bold mb-3'>
        ¡Aprende acerca de Deno!
      </h1>
      <h2 class='text(base center lg:left lg:xl) font-semibold'>
        Deno handbook en español
      </h2>
      <p class='text(sm center lg:left lg:lg)'>
        Hecho por <span class='underline'>developers</span>, para{' '}
        <span class='underline'>developers</span>
      </p>
    </div>
    <img
      src='/lemon-squash.svg'
      width={260}
      height={300}
      alt='Deno tomando limonada'
      class='animate-pulse'
    />
  </div>
)

export default SubHeader
