'use client'

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { Fragment, useState, useEffect, useRef } from 'react'
import NavLink from './NavLink'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button
        aria-label="Open navigation"
        onClick={onToggleNav}
        className="hover:border-primary-500 hover:text-primary-700 dark:hover:border-primary-400 dark:hover:text-primary-300 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-colors xl:hidden dark:border-gray-700 dark:text-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-gray-950/40 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-95"
            leaveTo="translate-x-full"
            unmount={false}
          >
            <DialogPanel className="fixed top-0 right-0 z-70 h-full w-full max-w-sm border-l border-gray-200 bg-white px-6 shadow-2xl duration-300 dark:border-gray-800 dark:bg-gray-950">
              <DialogTitle className="pt-7 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Navigation
              </DialogTitle>
              <nav
                ref={navRef}
                className="mt-10 flex flex-col items-stretch gap-2 overflow-y-auto text-left"
                aria-label="Mobile navigation"
              >
                {headerNavLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    href={link.href}
                    title={link.title}
                    primary={link.primary}
                    mobile
                    onClick={onToggleNav}
                  />
                ))}
              </nav>

              <button
                className="hover:border-primary-500 hover:text-primary-700 dark:hover:border-primary-400 dark:hover:text-primary-300 absolute top-5 right-5 z-80 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-800 transition-colors dark:border-gray-700 dark:text-gray-100"
                aria-label="Close navigation"
                onClick={onToggleNav}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
