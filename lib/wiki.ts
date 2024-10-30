import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content')

export interface WikiPage {
  slug: string
  title: string
  category: string
  lastModified: string
}

export interface PageContent {
  content: string
  pages: WikiPage[]
  title: string
  category: string
  lastModified: string
}

export async function getAllPages(): Promise<WikiPage[]> {
  const cache = new Map()
  
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
  }

  if (cache.has('pages')) {
    return cache.get('pages')
  }

  const pages: WikiPage[] = []
  
  function traverseDirectory(dir: string, baseSlug = '') {
    const entries = fs.readdirSync(dir)
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        traverseDirectory(fullPath, path.join(baseSlug, entry))
      } else if (entry.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf8')
        const { data } = matter(fileContent)
        const slug = path.join(baseSlug, entry.replace(/\.md$/, ''))
        pages.push({
          slug,
          title: data.title || slug,
          category: data.category || 'Uncategorized',
          lastModified: stat.mtime.toISOString()
        })
      }
    }
  }

  traverseDirectory(contentDirectory)

  const readmePath = path.join(process.cwd(), 'README.md')
  if (fs.existsSync(readmePath)) {
    const stat = fs.statSync(readmePath)
    const { data } = matter(fs.readFileSync(readmePath, 'utf8'))
    pages.unshift({
      slug: '',
      title: data.title || 'Home',
      category: data.category || 'Main',
      lastModified: stat.mtime.toISOString()
    })
  }

  cache.set('pages', pages)
  return pages
}

export async function getPageContent(filename: string): Promise<PageContent> {
  const cache = new Map()
  const cacheKey = `content:${filename}`

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)
  }

  const fullPath = path.join(contentDirectory, filename)
  
  if (!fs.existsSync(fullPath)) {
    return {
      content: '<h1>Page not found</h1>',
      pages: await getAllPages(),
      title: 'Page Not Found',
      category: 'Error',
      lastModified: new Date().toISOString()
    }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const pages = await getAllPages()
  
  const result: PageContent = {
    content: marked(content),
    pages,
    title: data.title || filename,
    category: data.category || 'Uncategorized',
    lastModified: fs.statSync(fullPath).mtime.toISOString()
  }

  cache.set(cacheKey, result)
  return result
}
