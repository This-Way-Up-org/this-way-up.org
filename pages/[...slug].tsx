import { GetStaticPaths, GetStaticProps } from 'next'
import { getPageContent, getAllPages } from '../lib/wiki'
import Layout from '../components/Layout'
import { getGithubEditUrl } from '../lib/config'

interface WikiPageProps {
  content: string
  pages: any[]
  githubUrl: string
}

export default function WikiPage({ content, pages, githubUrl }: WikiPageProps) {
  return (
    <Layout pages={pages} githubUrl={githubUrl}>
      <article className="wiki-article">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages()
  const paths = pages
    .filter(page => page.slug !== '')
    .map(page => ({
      params: { slug: page.slug.split('/') }
    }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string[]).join('/')
  const { content, pages } = await getPageContent(`${slug}.md`)
  const githubUrl = getGithubEditUrl(`${slug}.md`)

  return {
    props: {
      content,
      pages,
      githubUrl
    }
  }
}
