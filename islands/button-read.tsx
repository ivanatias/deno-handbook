import { IS_BROWSER } from '$fresh/runtime.ts'
import { useEffect, useRef, useState } from 'preact/hooks'

interface Props {
  title: string
}

const ReadButton = ({ title }: Props) => {
  const [readList, setReadList] = useState<string[]>([])

  const isFirstRender = useRef(true)
  const didRead = readList.includes(title)
  const buttonText = didRead ? 'Marcar no leído' : 'Marcar leído'

  useEffect(() => {
    if (readList.length === 0 && isFirstRender.current) return

    window.localStorage.setItem('read', JSON.stringify(readList))
  }, [readList])

  useEffect(() => {
    const rawList = window.localStorage.getItem('read')

    const parsedReadList = rawList !== null
      ? JSON.parse(rawList) as string[]
      : []

    setReadList(parsedReadList)

    isFirstRender.current = false
  }, [])

  const handleRead = () => {
    setReadList((prevList) => prevList.concat(title))
  }

  const handleUnread = () => {
    setReadList((prevList) =>
      prevList.filter((articleTitle) => articleTitle !== title)
    )
  }

  const handleClick = () => {
    didRead ? handleUnread() : handleRead()
  }

  return (
    <button
      onClick={handleClick}
      class={`text(xs lg:sm gray-700 dark:gray-50) py-2 px-4 rounded-full ${
        didRead
          ? 'bg-green-600 text-gray-50 border(& green-400 dark:green-500)'
          : 'bg-transparent border(& green-300 dark:green-100)'
      } ${
        isFirstRender.current ? 'opacity-0 pointer-events-none' : ''
      } transition duration-150 ease-in tracking-tighter hover:scale-105`}
      disabled={!IS_BROWSER || isFirstRender.current}
    >
      {buttonText}
    </button>
  )
}

export default ReadButton
