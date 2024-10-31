import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import Footer from './Footer'
import Link from 'next/link'
import type { WikiPage } from '../lib/wiki'

interface LayoutProps {
  children: ReactNode
  pages: WikiPage[]
  githubUrl?: string
  currentPath?: string
}

export default function Layout({ children, pages, githubUrl, currentPath }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#ffffff] border-b border-[#a7d7f9]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-6">
            <div className="w-[144px] h-[144px] flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Wiki Logo" 
                className="w-full h-full object-contain"
                width={144}
                height={144}
              />
            </div>
            <div className="flex flex-col">
              <Link href="/" className="text-3xl font-serif text-[#202122] hover:text-[#404244]">
                gitWiki
              </Link>
              <span className="text-[#54595d] text-lg">
                The Developer's Documentation Platform
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 bg-[#f6f6f6]">
        <div className="max-w-7xl mx-auto bg-white flex">
          <Sidebar pages={pages} />
          <div className="flex-1 border-l border-[#a7d7f9] flex flex-col">
            <TopNav githubUrl={githubUrl} currentPath={currentPath} />
            <main className="flex-1 p-6">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
