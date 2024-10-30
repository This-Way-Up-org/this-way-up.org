import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getAllPages } from '../lib/wiki'
import { getGithubEditUrl } from '../lib/config'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

interface HomeProps {
  content: string
  pages: any[]
  githubUrl: string
}

export default function Home({ content, pages, githubUrl }: HomeProps) {
  return (
    <Layout pages={pages} githubUrl={githubUrl}>
      <article className="wiki-article">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getAllPages()
  const readmePath = path.join(process.cwd(), 'README.md')
  const fileContents = fs.readFileSync(readmePath, 'utf8')
  const { content } = matter(fileContents)
  const htmlContent = marked(content)
  const githubUrl = getGithubEditUrl('README.md')

  return {
    props: {
      content: htmlContent,
      pages,
      githubUrl
    }
  }
}
