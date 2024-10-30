---
title: How to Fork gitWiki
category: Guide
---

# How to Fork gitWiki

This guide will help you create your own version of gitWiki. Follow these steps to get started with your own documentation site.

## Step 1: Fork the Repository

1. Go to the gitWiki repository on GitHub
2. Click the "Fork" button in the top-right corner
3. Select your account as the destination for the fork

## Step 2: Configure Your Wiki

### Update Repository Settings

1. Go to your forked repository's settings
2. Rename the repository if desired

### Customize Configuration

1. Edit `lib/config.ts`:
```typescript
export const GITHUB_REPO = {
  owner: 'your-username',    // Replace with your GitHub username
  name: 'your-repo-name',    // Replace with your repository name
  branch: 'main',           // Your default branch
  contentPath: 'content'    // Leave as is unless you change the content structure
}
```

2. Update `package.json`:
```json
{
  "name": "your-wiki-name",
  "version": "0.1.0",
  "private": true
}
```

## Step 3: Customize Content

1. Edit `README.md` to create your homepage
2. Add your documentation files in the `content` directory
3. Organize content using folders for different sections

### Content Structure Example

```
content/
├── getting-started/
│   ├── installation.md
│   └── configuration.md
├── guides/
│   └── advanced-usage.md
└── reference/
    └── api.md
```

## Step 4: Deploy

You have several options for deploying your wiki:

### Option 1: Deploy to Vercel (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click "Import Project"
4. Select your forked repository
5. Keep the default settings (Vercel will auto-detect Next.js)
6. Click "Deploy"

Your wiki will be live at `https://your-project-name.vercel.app`

#### Advantages of Vercel:
- Automatic deployments on every push
- Built-in SSL
- Global CDN
- Zero configuration needed

### Option 2: Deploy to Netlify

1. Go to [Netlify](https://netlify.com)
2. Sign up or log in with your GitHub account
3. Click "New site from Git"
4. Select your forked repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy site"

Your wiki will be live at `https://your-site-name.netlify.app`

#### Environment Variables for Netlify:
```env
NEXT_PUBLIC_BASE_PATH=
```

### Option 3: Deploy to GitHub Pages

1. In your repository settings, enable GitHub Pages
2. Add the following to your `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || ''
}
```

3. Add this GitHub Action workflow (create `.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /${{ github.event.repository.name }}
          
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: out
```

Your wiki will be live at `https://your-username.github.io/your-repo-name`

## Step 5: Maintain Your Wiki

### Adding New Content

1. Create `.md` files in the `content` directory
2. Add YAML front matter at the top:
```yaml
---
title: Your Page Title
category: Your Category
---
```
3. Write your content using Markdown

### Updating Content

1. Edit the relevant `.md` files
2. Commit and push your changes
3. The site will automatically rebuild and deploy

## Customization Options

### Styling

- Edit `styles/globals.css` for site-wide styles
- Modify `tailwind.config.js` for theme customization

### Layout

- Customize components in the `components` directory
- Modify `components/Layout.tsx` for layout changes

## Need Help?

- Check the [documentation](https://github.com/your-username/your-repo-name/wiki)
- Open an issue on GitHub
- Contribute improvements via pull requests

## Deployment Tips

### Common Issues

1. **Images not loading**: Make sure to use relative paths and the `next/image` component
2. **404 on routes**: Ensure `trailingSlash: true` is set in `next.config.js`
3. **Base path issues**: Set the correct `NEXT_PUBLIC_BASE_PATH` for GitHub Pages

### Performance Optimization

1. Optimize images before uploading
2. Use static generation for all pages
3. Minimize JavaScript bundles
4. Enable caching headers in your deployment platform

### Security

1. Keep dependencies updated
2. Use environment variables for sensitive data
3. Enable security headers in your deployment platform
