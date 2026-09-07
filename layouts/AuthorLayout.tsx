import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import PageHeader from '@/components/PageHeader'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <div className="page-shell">
      <PageHeader title="About" />
      <div className="grid items-start gap-10 pt-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16 lg:pt-14">
        <aside className="surface-card flex flex-col items-center p-6 text-center sm:p-8 lg:sticky lg:top-8">
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
          )}
          <h2 className="pt-5 pb-2 text-2xl leading-8 font-semibold tracking-tight text-gray-950 dark:text-white">
            {name}
          </h2>
          <div className="text-gray-600 dark:text-gray-300">{occupation}</div>
          {company && <div className="text-gray-500 dark:text-gray-400">{company}</div>}
          <div className="flex gap-3 pt-6">
            {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
            <SocialIcon kind="github" href={github} />
            <SocialIcon kind="linkedin" href={linkedin} />
            <SocialIcon kind="x" href={twitter} />
            <SocialIcon kind="bluesky" href={bluesky} />
          </div>
        </aside>
        <div className="prose dark:prose-invert max-w-3xl text-lg leading-8">{children}</div>
      </div>
    </div>
  )
}
