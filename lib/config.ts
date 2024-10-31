export const GITHUB_REPO = {
    owner: 'Offren',  // replace this with your Github Username
    name: 'gitWiki', // replace this with your repo's name
    branch: 'main',
    contentPath: 'content'
  }
  
  export const getGithubEditUrl = (path: string): string => {
    return `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.name}/edit/${GITHUB_REPO.branch}/${GITHUB_REPO.contentPath}/${path}`
  }
  
