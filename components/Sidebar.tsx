import { useState } from 'react'
import Link from 'next/link'
import { Search, X } from 'lucide-react'

interface Page {
  slug: string
  title: string
  category: string
}

interface SidebarProps {
  pages: Page[]
}

export default function Sidebar({ pages }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  const filteredPages = searchQuery
    ? pages.filter(page => 
        page.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  return (
    <div className="w-[176px] bg-[#f6f6f6] p-4 shrink-0">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search wiki..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setIsSearching(!!e.target.value)
            }}
            className="w-full p-2 pl-8 pr-8 border border-[#a7d7f9] rounded bg-white text-sm"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          {searchQuery && (
            <button 
              onClick={() => {
                setSearchQuery('')
                setIsSearching(false)
              }}
              className="absolute right-2 top-2.5"
            >
              <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {isSearching && (
          <div className="mt-2 bg-white border border-[#a7d7f9] rounded">
            {filteredPages.length > 0 ? (
              <div className="max-h-64 overflow-y-auto">
                {filteredPages.map((page, index) => (
                  <Link
                    key={index}
                    href={`/${page.slug}`}
                    className="block p-2 hover:bg-[#e6f3ff] border-b border-[#a7d7f9] last:border-b-0 text-sm"
                  >
                    <div className="text-[#0645ad] hover:underline">
                      {page.title}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-2 text-sm text-gray-500">
                No results found
              </div>
            )}
          </div>
        )}
      </div>

      <nav className="text-sm">
        <div className="mb-4">
          <h3 className="font-bold text-[#54595d] mb-1">Navigation</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="text-[#0645ad] hover:underline">Main page</Link></li>
            <li><Link href="/contents" className="text-[#0645ad] hover:underline">Contents</Link></li>
            <li><Link href="/categories" className="text-[#0645ad] hover:underline">Categories</Link></li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-[#54595d] mb-1">Pages</h3>
          <ul className="space-y-1">
            {pages.map((page, index) => (
              <li key={index}>
                <Link 
                  href={`/${page.slug}`}
                  className="text-[#0645ad] hover:underline"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}