export function searchContent(query, pages) {
  const lowercaseQuery = query.toLowerCase();
  return pages.filter(page => 
    page.title.toLowerCase().includes(lowercaseQuery) ||
    page.content.toLowerCase().includes(lowercaseQuery)
  ).map(page => ({
    ...page,
    excerpt: extractExcerpt(page.content, lowercaseQuery)
  }));
}

function extractExcerpt(content, query) {
  const index = content.toLowerCase().indexOf(query);
  const start = Math.max(0, index - 50);
  const end = Math.min(content.length, index + 100);
  return content.slice(start, end) + '...';
}