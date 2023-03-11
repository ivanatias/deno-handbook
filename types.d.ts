import type { JSX } from 'preact'

interface Article {
  title: string
  date: Date
  excerpt: string
  author?: string
  authorUrl?: string
  slug: string
  body: string
}

type SearchArticle = Pick<Article, 'title' | 'slug' | 'author'>

type SearchMatch = {
  indices: [number, number][]
  key: string
  value: string
}

interface SearchResult {
  item: SearchArticle
  matches: SearchMatch[]
  refIndex: number
  score: number
}

type Input = JSX.HTMLAttributes<HTMLInputElement>

type InputChangeEvent = JSX.TargetedEvent<HTMLInputElement, Event>

export { Article, Input, InputChangeEvent, SearchResult }
