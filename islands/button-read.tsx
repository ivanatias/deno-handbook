import { IS_BROWSER } from '$fresh/runtime.ts'
import { useEffect, useRef, useState } from 'preact/hooks'

interface Props {
  title: string
}

const ReadButton = ({ title }: Props) => {
  const [readList, setReadList] = useState<string[]>([])
  const [didRead, setDidRead] = useState(false)
  const [mounted, setMounted] = useState(false)

  const isFirstRender = useRef(true)
  const buttonText = didRead ? 'Marcar no leído' : 'Marcar leído'

  useEffect(() => {
    if (readList.length === 0 && isFirstRender.current) return

    window.localStorage.setItem('read', JSON.stringify(readList))
  }, [readList])

  useEffect(() => {
    const rawList = window.localStorage.getItem('read')

    if (rawList !== null) {
      const parsedReadList = JSON.parse(rawList) as string[]
      if (parsedReadList.length > 0) setReadList(parsedReadList)
      setDidRead(parsedReadList.includes(title))
    }

    setMounted(true)
    isFirstRender.current = false
  }, [])

  const handleRead = (title: string) => {
    setReadList((prevList) => prevList.concat(title))
    setDidRead(true)
  }

  const handleUnread = (title: string) => {
    setReadList((prevList) =>
      prevList.filter((articleTitle) => articleTitle !== title)
    )
    setDidRead(false)
  }

  const handleClick = (title: string) => {
    didRead ? handleUnread(title) : handleRead(title)
  }

  return (
    <button
      onClick={() => handleClick(title)}
      class={`text(xs lg:sm gray-700 dark:gray-50) py-2 px-4 rounded-full ${
        didRead
          ? 'bg-green-600 text-gray-50 border(& green-400 dark:green-500)'
          : 'bg-transparent border(& green-300 dark:green-100)'
      } ${
        !mounted ? 'opacity-0 pointer-events-none' : ''
      } transition duration-150 ease-in focus:outline-none tracking-tighter hover:scale-105`}
      disabled={!IS_BROWSER || !mounted}
    >
      {buttonText}
    </button>
  )
}

export default ReadButton
