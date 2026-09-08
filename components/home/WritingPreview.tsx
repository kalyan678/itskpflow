import type { Blog } from 'contentlayer/generated'
import type { CoreContent } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

interface WritingPreviewProps {
  posts: CoreContent<Blog>[]
}

export default function WritingPreview({ posts }: WritingPreviewProps) {
  return (
    <section
      aria-labelledby="latest-writing-heading"
      className="border-t border-gray-200 pt-16 sm:pt-20 dark:border-gray-800"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="latest-writing-heading"
          className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
        >
          Latest Writing
        </h2>
        <Link href="/blog" className="text-link inline-flex min-h-11 items-center py-2">
          View all writing <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
        {posts.map((post) => (
          <article key={post.path} className="surface-card flex flex-col p-5 sm:p-6">
            <time
              dateTime={post.date}
              className="text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              {formatDate(post.date, siteMetadata.locale)}
            </time>
            <h3 className="mt-4 text-2xl leading-8 font-semibold tracking-tight text-gray-950 dark:text-white">
              <Link
                href={`/${post.path}`}
                className="hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                {post.title}
              </Link>
            </h3>
            {post.summary && (
              <p className="mt-3 line-clamp-3 leading-7 text-gray-600 dark:text-gray-300">
                {post.summary}
              </p>
            )}
            <Link
              href={`/${post.path}`}
              className="text-link mt-4 inline-flex min-h-11 items-center self-start py-2"
              aria-label={`Read ${post.title}`}
            >
              Read article <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
