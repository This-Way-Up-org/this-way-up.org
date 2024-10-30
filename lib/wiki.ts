import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getAllPages() {
  if (!fs.existsSync(contentDirectory)) {
    fs.mkdirSync(contentDirectory, { recursive: true })
  }

  const pages = []
  
  function traverseDirectory(dir: string, baseSlug = '') {
    const entries = fs.readdirSync(dir)
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        traverseDirectory(fullPath, path.join(baseSlug, entry))
      } else if (entry.endsWith('.md')) {
        const slug = path.join(baseSlug, entry.replace(/\.md$/, ''))
        const { data } = matter(fs.readFileSync(fullPath, 'utf8'))
        pages.push({
          slug,
          title: data.title || slug,
          category: data.category || 'Uncategorized'
        })
      }
    }
  }

  if (fs.readdirSync(contentDirectory).length === 0) {
    // Create default index.md if content directory is empty
    const defaultContent = `---
title: Welcome to Our Wiki
---

# Welcome to Our Wiki

A modern, static documentation site with fast search and easy navigation.`
    fs.writeFileSync(path.join(contentDirectory, 'index.md'), defaultContent)
  }

  traverseDirectory(contentDirectory)
  return pages
}

export async function getPageContent(filename: string) {
  const fullPath = path.join(contentDirectory, filename)
  
  if (!fs.existsSync(fullPath)) {
    return {
      content: '<h1>Page not found</h1>',
      pages: await getAllPages()
    }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const pages = await getAllPages()
  
  return {
    content: marked(content),
    pages,
    ...data
  }
}