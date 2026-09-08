import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 py-8 dark:border-gray-800">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {`© ${new Date().getFullYear()} ${siteMetadata.author}`}{' '}
          <span aria-hidden="true">·</span> itskpflow
        </p>
        <div className="flex items-center gap-3">
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          <SocialIcon kind="medium" href={siteMetadata.medium} size={6} />
        </div>
      </div>
    </footer>
  )
}
