# _config.yml
title: Your Wiki Name
description: Your wiki description
baseurl: "" # Change this to your repo name if using GitHub Pages

# Add README.md to included files
include:
  - README.md
  - _pages

# Default layouts
defaults:
  - scope:
      path: "README.md"
    values:
      layout: "wiki"
      permalink: /
      title: "Home"  # This will be the title shown in navigation
  - scope:
      path: ""
    values:
      layout: "wiki"

# Collections for wiki pages
collections:
  pages:
    output: true
    permalink: /:path/

# Markdown processing
markdown: kramdown
kramdown:
  toc_levels: 1..3
