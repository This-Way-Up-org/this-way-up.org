import { GetStaticPaths, GetStaticProps } from 'next'
import { getPageContent, getAllPages } from '../lib/wiki'
import Layout from '../components/Layout'

export default function WikiPage({ content, pages }) {
  return (
    <Layout pages={pages}>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = await getAllPages()
  const paths = pages.map(page => ({
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

  return {
    props: {
      content,
      pages
    }
  }
}