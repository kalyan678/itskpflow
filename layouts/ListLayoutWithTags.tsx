'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import PageHeader from '@/components/PageHeader'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  description?: string
  showTagNavigation?: boolean
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+$/, '') // Remove any trailing /page
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  description,
  showTagNavigation = true,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div className="page-shell">
        {description ? (
          <PageHeader title={title} description={description} />
        ) : (
          <div className="page-header sm:hidden">
            <h1 className="display-title">{title}</h1>
          </div>
        )}
        <div
          className={`flex gap-10 pt-10 sm:pt-14 lg:gap-16 ${showTagNavigation ? '' : 'max-w-4xl'}`}
        >
          {showTagNavigation && (
            <aside className="surface-card hidden h-fit w-56 shrink-0 sm:block">
              <div className="px-6 py-4">
                {pathname.startsWith('/blog') ? (
                  <h3 className="text-primary-500 font-bold uppercase">All Posts</h3>
                ) : (
                  <Link
                    href={`/blog`}
                    className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
                  >
                    All Posts
                  </Link>
                )}
                <ul>
                  {sortedTags.map((t) => {
                    return (
                      <li key={t} className="my-3">
                        {decodeURI(pathname.split('/tags/')[1]) === slug(t) ? (
                          <h3 className="text-primary-500 inline px-3 py-2 text-sm font-bold uppercase">
                            {`${t} (${tagCounts[t]})`}
                          </h3>
                        ) : (
                          <Link
                            href={`/tags/${slug(t)}`}
                            className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-300"
                            aria-label={`View posts tagged ${t}`}
                          >
                            {`${t} (${tagCounts[t]})`}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </aside>
          )}
          <div className="min-w-0 flex-1">
            <ul className="divide-y divide-gray-200 dark:divide-gray-800">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, readingTime } = post
                return (
                  <li key={path} className="py-10 first:pt-0">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="flex flex-wrap items-center gap-x-2 text-sm leading-6 font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date} suppressHydrationWarning>
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                          {readingTime?.text && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span>{readingTime.text}</span>
                            </>
                          )}
                        </dd>
                      </dl>
                      <div className="space-y-4">
                        <h2 className="text-2xl leading-8 font-semibold tracking-tight sm:text-3xl">
                          <Link
                            href={`/${path}`}
                            className="hover:text-primary-700 focus-visible:outline-primary-700 dark:hover:text-primary-300 dark:focus-visible:outline-primary-300 text-gray-950 transition-colors focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-white"
                          >
                            {title}
                          </Link>
                        </h2>
                        <div className="max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
                          {summary}
                        </div>
                        <div className="[&>a:hover]:text-primary-700 dark:[&>a:hover]:text-primary-300 flex flex-wrap gap-y-2 [&>a]:text-xs [&>a]:font-medium [&>a]:text-gray-500 dark:[&>a]:text-gray-400">
                          {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
