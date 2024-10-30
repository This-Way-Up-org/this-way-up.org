import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchContent } from '../utils/search';

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetch('/content/pages.json')
      .then(res => res.json())
      .then(data => setPages(data));
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchContent(query, pages);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-64 bg-gray-50 border-r min-h-screen p-4">
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search wiki..."
            className="w-full p-2 pl-8 pr-8 border rounded bg-white"
          />
          <svg className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchQuery && (
          <div className="mt-2 bg-white border rounded shadow-sm">
            {searchResults.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                className="block p-2 hover:bg-gray-50 border-b last:border-b-0"
              >
                <div className="text-sm text-blue-600 hover:underline font-medium">
                  {result.title}
                </div>
                <div className="text-xs text-gray-600 mt-1">
                  {result.excerpt}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-gray-700 mb-2 pb-1 border-b">Navigation</h3>
        <ul className="space-y-2">
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.path} className="text-blue-600 hover:underline">
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;