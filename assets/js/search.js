document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let searchIndex = [];

  // Load the search index
  fetch('/search-index.json')
    .then(response => response.json())
    .then(data => {
      searchIndex = data.pages;
    })
    .catch(error => console.error('Error loading search index:', error));

  // Handle search input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    
    if (!query.trim()) {
      searchResults.classList.add('hidden');
      return;
    }

    const results = searchIndex.filter(page => 
      page.title.toLowerCase().includes(query) ||
      page.content.toLowerCase().includes(query)
    );

    displayResults(results);
  });

  function displayResults(results) {
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="p-2 text-sm text-gray-500">No results found</div>';
    } else {
      searchResults.innerHTML = results
        .map(result => `
          <a href="${result.url}" class="block p-2 hover:bg-gray-50 border-b last:border-b-0">
            <div class="text-sm text-blue-600 hover:underline font-medium">
              ${result.title}
            </div>
            <div class="text-xs text-gray-600 mt-1">
              ${result.content}
            </div>
          </a>
        `)
        .join('');
    }
    
    searchResults.classList.remove('hidden');
  }
});