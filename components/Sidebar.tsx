import { useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { WikiPage } from '../lib/wiki';

interface SidebarProps {
  pages: WikiPage[];
}

interface CategoryGroup {
  [key: string]: WikiPage[];
}

export default function Sidebar({ pages }: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Group pages by category
  const categoryGroups = pages.reduce((groups: CategoryGroup, page) => {
    const category = page.category || 'Uncategorized';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(page);
    return groups;
  }, {});

  // Sort pages within each category
  Object.keys(categoryGroups).forEach(category => {
    categoryGroups[category].sort((a, b) => a.title.localeCompare(b.title));
  });

  const filteredPages = searchQuery
    ? pages.filter(page => page.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  // Get all unique categories and sort them alphabetically
  const categoryOrder = Object.keys(categoryGroups).sort((a, b) => a.localeCompare(b));

  return (
    <div className="w-[176px] bg-[#f6f6f6] shrink-0">
      <div className="p-4">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search wiki..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearching(!!e.target.value);
              }}
              className="w-full p-2 pl-8 pr-8 border border-[#a7d7f9] rounded bg-white text-sm"
              aria-label="Search wiki pages"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" aria-hidden="true" />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearching(false);
                }}
                className="absolute right-2 top-2.5"
                aria-label="Clear search"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600" aria-hidden="true" />
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
          {categoryOrder.map(category => {
            if (!categoryGroups[category]) return null;
            return (
              <div key={category} className="mb-4">
                <h3 className="font-bold text-[#54595d] mb-1">{category}</h3>
                <ul className="space-y-1">
                  {categoryGroups[category].map((page, index) => (
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
            );
          })}
        </nav>
      </div>
    </div>
  );
}