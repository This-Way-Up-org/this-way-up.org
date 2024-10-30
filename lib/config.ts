export const GITHUB_REPO = {
  owner: 'Offren',
  name: 'gitWiki',
  branch: 'main',
  contentPath: 'content'
}

export const getGithubEditUrl = (path: string): string => {
  return `https://github.com/${GITHUB_REPO.owner}/${GITHUB_REPO.name}/tree/${GITHUB_REPO.branch}/${GITHUB_REPO.contentPath}/${path}`
}
