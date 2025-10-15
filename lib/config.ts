export const GITHUB_REPO = {
  owner: 'This-Way-Up-org',  // replace this with your Github Username
  name: 'this-way-up.org', // replace this with your repo's name
  branch: 'main',
  contentPath: 'content'
}

// Configure your discussion/talk URL here
export const TALK_URL = 'https://github.com/This-Way-Up-org/this-way-up.org/discussions' // replace this with whatever site you want

export const getGithubEditUrl = (path: string): string => {
  return `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.name}/edit/${GITHUB_REPO.branch}/${GITHUB_REPO.contentPath}/${path}`
}

export const getGithubBlameUrl = (path: string): string => {
  return `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.name}/blame/${GITHUB_REPO.branch}/${GITHUB_REPO.contentPath}/${path}`
}
