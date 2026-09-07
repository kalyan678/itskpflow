import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 py-8 dark:border-gray-800">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold tracking-tight text-gray-950 dark:text-white">
            {siteMetadata.author}
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            AI &amp; Data Science Practice Leader
          </p>
        </div>
        <div className="flex items-center gap-5">
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-sm text-gray-500 dark:border-gray-900 dark:text-gray-400">
        <span>{`© ${new Date().getFullYear()} ${siteMetadata.author}`}</span>
        <span>itskpflow.com</span>
      </div>
    </footer>
  )
}
