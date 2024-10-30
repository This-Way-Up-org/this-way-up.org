import { ReactNode } from 'react'
import Sidebar from './Sidebar'
import TopNav from './TopNav'

interface LayoutProps {
  children: ReactNode
  pages: any[]
}

export default function Layout({ children, pages }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#f6f6f6]">
      <header className="h-[144px] bg-[#ffffff] border-b border-[#a7d7f9]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="w-[144px] h-[144px] flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Wiki Logo" 
              className="w-[144px] h-[144px] object-contain"
              width={450}
              height={450}
            />
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto bg-white flex">
        <Sidebar pages={pages} />
        <div className="flex-1 border-l border-[#a7d7f9]">
          <TopNav />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}