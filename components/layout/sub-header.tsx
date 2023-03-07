const SubHeader = () => (
  <div class='flex(& col lg:row) gap-3 lg:justify-between items-center'>
    <div class='flex(& col) gap-2'>
      <h1 class='text(3xl lg:5xl green-400) font-bold mb-3'>
        ¡Aprende acerca de Deno!
      </h1>
      <h2 class='text(base center lg:left lg:xl) font-semibold'>
        Deno handbook en español
      </h2>
      <p class='text(sm center lg:left lg:lg) underline'>
        Hecho por developers, para developers
      </p>
    </div>
    <img
      src='/lemon-squash.svg'
      width={260}
      height={300}
      alt='Deno drinking a lemon squash'
      class='animate-pulse'
    />
  </div>
)

export default SubHeader
