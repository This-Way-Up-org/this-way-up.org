import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function WikiLayoutPreview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Simulated search function - in real implementation, this would search through your content
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearching(!!query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    // Simulated results - in real implementation, this would be your actual content
    const mockResults = [
      { title: 'Example Page', url: '#', excerpt: 'This is an example page that matches your search...' },
      { title: 'Another Page', url: '#', excerpt: 'Another page with matching content...' },
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(mockResults);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-blue-200 fixed w-full top-0 h-40">
        <div className="max-w-7xl mx-auto px-4">
          {/* Iframe Container */}
          <div className="w-40 h-40 p-2">
            <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center bg-gray-50">
              <iframe 
                src="https://drive.google.com/file/d/1lUgEXqiM_evSWMGTCSnmBbiEDfjYBwHt/preview" 
                className="w-full h-full"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex max-w-7xl mx-auto mt-40 bg-white">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 border-r min-h-screen p-4">
          {/* Search Section */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search wiki..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full p-2 pl-8 pr-8 border rounded bg-white"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              {searchQuery && (
                <button 
                  onClick={() => handleSearch('')}
                  className="absolute right-2 top-2.5"
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>

            {/* Search Results */}
            {isSearching && (
              <div className="mt-2 bg-white border rounded shadow-sm">
                {searchResults.length > 0 ? (
                  <div className="max-h-64 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <a
                        key={index}
                        href={result.url}
                        className="block p-2 hover:bg-gray-50 border-b last:border-b-0"
                      >
                        <div className="text-sm text-blue-600 hover:underline font-medium">
                          {result.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {result.excerpt}
                        </div>
                      </a>
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

          {/* Navigation Section */}
          <div className="mb-8">
            <h3 className="font-bold text-gray-700 mb-2 pb-1 border-b">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Example Page</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Another Page</a></li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="font-bold text-gray-700 mb-2 pb-1 border-b">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Documentation</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Tutorials</a></li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-600 mb-4">
            <a href="#" className="text-blue-600 hover:underline">Home</a> / 
            <a href="#" className="text-blue-600 hover:underline ml-1">Current Page</a>
          </div>

          {/* Article Header */}
          <div className="border-b border-gray-300 mb-6">
            <h1 className="text-3xl font-serif mb-4">Page Title</h1>
          </div>

          {/* Table of Contents (if enabled) */}
          <div className="bg-gray-50 border rounded p-4 mb-6 w-64">
            <div className="font-bold mb-2">Contents</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="text-blue-600 hover:underline">Section 1</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Section 2</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose max-w-none">
            <p className="text-gray-600">Article content would appear here...</p>
          </div>

          {/* Categories (if present) */}
          <div className="mt-8 pt-4 border-t text-sm text-gray-600">
            Categories: 
            <a href="#" className="text-blue-600 hover:underline ml-1">Category1</a>,
            <a href="#" className="text-blue-600 hover:underline ml-1">Category2</a>
          </div>
        </div>
      </div>
    </div>
  );
}
