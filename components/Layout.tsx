import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'
import Footer from './Footer'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
  pages: any[]
  githubUrl?: string
  currentPath?: string
}

export default function Layout({ children, pages, githubUrl, currentPath }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col">
      <header className="h-[144px] bg-[#ffffff] border-b border-[#a7d7f9]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="flex items-center gap-6">
            <div className="w-[144px] h-[144px] flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Wiki Logo" 
                className="w-[144px] h-[144px] object-contain"
                width={450}
                height={450}
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
      <div className="max-w-7xl mx-auto bg-white flex flex-1">
        <Sidebar pages={pages} />
        <div className="flex-1 border-l border-[#a7d7f9] flex flex-col">
          <TopNav githubUrl={githubUrl} currentPath={currentPath} />
          <main className="p-6 flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
