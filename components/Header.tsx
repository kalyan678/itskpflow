import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import NavLink from './NavLink'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  let headerClass =
    'site-header relative flex w-full items-center justify-center border-b border-gray-200/80 bg-white/95 py-5 dark:border-gray-800 dark:bg-gray-950/95'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
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
