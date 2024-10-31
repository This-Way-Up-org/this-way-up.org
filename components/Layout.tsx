import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
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
    <div className="min-h-screen bg-[#f6f6f6]">
      <header className="h-[144px] bg-[#ffffff] border-b border-[#a7d7f9]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-[#0070f3]">
              gitWiki
            </Link>
            <span className="text-[#54595d] text-lg">
              Stop paying to host your wiki
            </span>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto bg-white flex">
        <Sidebar pages={pages} />
        <div className="flex-1 border-l border-[#a7d7f9]">
          <TopNav githubUrl={githubUrl} currentPath={currentPath} />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}