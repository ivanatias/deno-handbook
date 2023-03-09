interface Props {
  title: string
  desc: string
  href: string
}

const ArticleCard = ({ title, desc, href }: Props) => (
  <a
    class='hover:bg-green-50 dark:hover:bg-green-900 border(& gray-200 dark:gray-500) p-4 rounded-lg transition duration-150 ease-in min-h-[200px]'
    href={href}
  >
    <div class='flex(& col) gap-4 max-w-prose'>
      <h3 class='text(base lg:lg green-400) font-semibold mb-2 underline'>
        {title}
      </h3>
      <p class='text(xs lg:sm black dark:gray-300) font-light'>
        {desc}
      </p>
      <div class='flex justify-end'>
        <span class='text(xs green-400) font-semibold mt-3'>
          Leer más...
        </span>
      </div>
    </div>
  </a>
)

export default ArticleCard
