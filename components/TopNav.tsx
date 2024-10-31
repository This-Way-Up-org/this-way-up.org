import Link from 'next/link'
import { getGithubBlameUrl } from '../lib/config'

interface TopNavProps {
  githubUrl?: string
  currentPath?: string
}

export default function TopNav({ githubUrl, currentPath }: TopNavProps) {
  const historyUrl = currentPath ? getGithubBlameUrl(currentPath) : undefined

  return (
    <div className="border-b border-[#a7d7f9] bg-[#ffffff]">
      <div className="flex border-b border-[#a7d7f9]">
        <div className="flex">
          <Link 
            href="#" 
            className="px-4 py-2 text-sm hover:bg-[#e6f3ff] border-r border-[#a7d7f9]"
          >
            Article
          </Link>
          <Link 
            href="#" 
            className="px-4 py-2 text-sm hover:bg-[#e6f3ff] border-r border-[#a7d7f9]"
          >
            Talk
          </Link>
        </div>
        <div className="flex ml-auto">
          <Link 
            href="#" 
            className="px-4 py-2 text-sm hover:bg-[#e6f3ff] border-l border-[#a7d7f9]"
          >
            Read
          </Link>
          {githubUrl && (
            <Link
              href={githubUrl}
              className="px-4 py-2 text-sm hover:bg-[#e6f3ff] border-l border-[#a7d7f9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit
            </Link>
          )}
          {historyUrl && (
            <Link
              href={historyUrl}
              className="px-4 py-2 text-sm hover:bg-[#e6f3ff] border-l border-[#a7d7f9]"
              target="_blank"
              rel="noopener noreferrer"
            >
              View history
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
