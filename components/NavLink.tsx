'use client'

import { usePathname } from 'next/navigation'
import Link from './Link'

interface NavLinkProps {
  href: string
  title: string
  primary?: boolean
  mobile?: boolean
  onClick?: () => void
}

export default function NavLink({ href, title, primary, mobile, onClick }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  const standardClassName = mobile
    ? 'hover:bg-gray-100 hover:text-primary-700 dark:hover:text-primary-300 rounded-lg px-4 py-3 text-xl font-semibold tracking-tight text-gray-900 transition-colors dark:text-gray-100 dark:hover:bg-gray-900'
    : 'hover:text-primary-700 dark:hover:text-primary-300 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors dark:text-gray-300'

  const primaryClassName = mobile
    ? 'bg-primary-700 hover:bg-primary-800 mt-4 rounded-full px-5 py-3 text-center text-base font-semibold text-white transition-colors dark:bg-primary-400 dark:text-gray-950 dark:hover:bg-primary-300'
    : 'bg-primary-700 hover:bg-primary-800 focus-visible:outline-primary-700 dark:focus-visible:outline-primary-300 ml-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition-colors dark:bg-primary-400 dark:text-gray-950 dark:hover:bg-primary-300'

  const activeClassName = primary
    ? 'ring-primary-300 dark:ring-primary-700 ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-950'
    : 'bg-primary-50 text-primary-800 dark:bg-primary-950 dark:text-primary-200'

  return (
    <Link
      href={href}
      className={`${primary ? primaryClassName : standardClassName} ${isActive ? activeClassName : ''}`}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {title}
    </Link>
  )
}
