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
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col">
      <header className="h-[144px] bg-[#ffffff] border-b border-[#a7d7f9]">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="flex items-center gap-6">
@@ -30,19 +30,48 @@ export default function Layout({ children, pages, githubUrl, currentPath }: Layo
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
          <footer className="bg-[#f6f6f6] border-t border-[#a7d7f9]">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="text-sm text-[#54595d]">
                <p>
                  Text is available under the{' '}
                  <a 
                    href="https://creativecommons.org/licenses/by-sa/4.0/" 
                    className="text-[#0645ad] hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Creative Commons Attribution-ShareAlike License
                  </a>; 
                  additional terms may apply.
                </p>
                <div className="mt-2 flex gap-4">
                  <Link href="/terms" className="text-[#0645ad] hover:underline">
                    Terms & Conditions
                  </Link>
                  <Link href="/privacy-policy" className="text-[#0645ad] hover:underline">
                    Privacy Policy
                  </Link>
                  <Link href="/code-of-conduct" className="text-[#0645ad] hover:underline">
                    Code of Conduct
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
