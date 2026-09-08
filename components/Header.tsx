'use client'

import { usePathname } from 'next/navigation'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import NavLink from './NavLink'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const isHome = usePathname() === '/'
  let headerClass =
    'site-header relative flex w-full items-center border-b border-gray-200/80 bg-white/95 py-5 dark:border-gray-800 dark:bg-gray-950/95'
  headerClass += isHome ? ' justify-end' : ' justify-between'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      {!isHome && (
        <Link
          href="/"
          aria-label={`${siteMetadata.author} home`}
          className="group flex shrink-0 items-center gap-3 rounded-sm text-gray-950 dark:text-white"
        >
          <span className="bg-primary-600 dark:bg-primary-400 h-2.5 w-2.5 rounded-full" />
          <span className="text-base font-semibold tracking-[-0.02em]">
            {siteMetadata.headerTitle}
          </span>
        </Link>
      )}
      <div className="flex items-center gap-2 leading-5 sm:gap-3">
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {headerNavLinks.map((link) => (
            <NavLink key={link.title} href={link.href} title={link.title} primary={link.primary} />
          ))}
        </nav>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
