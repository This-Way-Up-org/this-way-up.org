import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { getAllPages, getPageContent } from '../lib/wiki'

export default function Home({ content, pages }) {
  return (
    <Layout pages={pages}>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await getAllPages()
  const { content } = await getPageContent('index.md')

  return {
    props: {
      content,
      pages
    }
  }
}