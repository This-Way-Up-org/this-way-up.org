export const GITHUB_REPO = {
  owner: 'Offren',  // replace this with your Github Username
  name: 'gitWiki', // replace this with your repo's name
  branch: 'main',
  contentPath: 'content'
}

// Configure your discussion/talk URL here
export const TALK_URL = 'https://github.com/Offren/gitWiki/discussions' // replace this with whatever site you want

export const getGithubEditUrl = (path: string): string => {
  return `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.name}/edit/${GITHUB_REPO.branch}/${GITHUB_REPO.contentPath}/${path}`
}

export const getGithubBlameUrl = (path: string): string => {
  return `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.name}/blame/${GITHUB_REPO.branch}/${GITHUB_REPO.contentPath}/${path}`
}
