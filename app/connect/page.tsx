import Link from '@/components/Link'
import PageHeader from '@/components/PageHeader'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Connect' })

const profiles = [
  { label: 'LinkedIn', href: siteMetadata.linkedin },
  { label: 'GitHub', href: siteMetadata.github },
  { label: 'X', href: siteMetadata.x },
  { label: 'Medium', href: siteMetadata.medium },
]

export default function ConnectPage() {
  return (
    <div className="page-shell">
      <PageHeader title="Connect" />
      <div className="surface-card mt-10 max-w-3xl p-6 sm:p-8">
        <ul className="grid gap-3 sm:grid-cols-2">
          {profiles.map((profile) => (
            <li key={profile.label}>
              <Link
                href={profile.href}
                className="hover:border-primary-500 hover:text-primary-700 dark:hover:border-primary-400 dark:hover:text-primary-300 flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-800 transition-colors dark:border-gray-700 dark:text-gray-100"
              >
                {profile.label}
                <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
