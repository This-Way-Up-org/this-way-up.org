// Real search implementation
// eslint-disable-next-line no-unused-vars
const handleSearch = async (query, setSearchQuery, setIsSearching, setSearchResults) => {
  setSearchQuery(query);
  setIsSearching(!!query);

  if (!query.trim()) {
    setSearchResults([]);
    return;
  }

  try {
    // Load the search index
    const response = await fetch('/search-index.json');
    const data = await response.json();

    // Perform the search
    const results = data.pages.filter(page =>
      page.title.toLowerCase().includes(query.toLowerCase()) ||
      page.content.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(results);
  } catch (error) {
    console.error('Error performing search:', error);
    setSearchResults([]);
  }
};