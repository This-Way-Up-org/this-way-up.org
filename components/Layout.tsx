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
    <div className="min-h-screen flex flex-col bg-[#f6f6f6]">
      <header className="h-[144px] bg-[#ffffff] border-b border-[#a7d7f9]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <img 
            src="/logo.png" 
            alt="Wiki Logo" 
            className="w-[144px] h-[144px] object-contain"
            width={450}
            height={450}
          />
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl font-bold text-[#0070f3]">
              This Way Up
            </Link>
            <span className="text-[#54595d] text-lg">
               
            </span>
          </div>
        </div>
      </header>
      <div className="flex-1 flex">
        <div className="max-w-7xl w-full mx-auto flex">
          <Sidebar pages={pages} />
          <div className="flex-1 bg-white flex flex-col">
            <TopNav githubUrl={githubUrl} currentPath={currentPath} />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}