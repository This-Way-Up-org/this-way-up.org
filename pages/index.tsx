import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getAllPages } from '../lib/wiki'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

export default function Home({ content, pages }) {
  return (
    <Layout pages={pages}>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getAllPages()
  const readmePath = path.join(process.cwd(), 'README.md')
  const fileContents = fs.readFileSync(readmePath, 'utf8')
  const { content } = matter(fileContents)
  const htmlContent = marked(content)

  return {
    props: {
      content: htmlContent,
      pages
    }
  }
}
