'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)

  if (!siteMetadata.comments?.provider) {
    return null
  }
  return (
    <section aria-labelledby="discussion-heading" className="mx-auto max-w-2xl text-left">
      <h2
        id="discussion-heading"
        className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white"
      >
        Discussion
      </h2>
      <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
        Join the conversation through GitHub Discussions.
      </p>
      {loadComments ? (
        <div className="mt-6">
          <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setLoadComments(true)}
          className="text-link mt-3 inline-flex min-h-11 items-center py-2"
        >
          Load discussion
        </button>
      )}
    </section>
  )
}
