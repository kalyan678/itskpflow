import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import HomeHero from '@/components/home/HomeHero'
import PreviewFeature from '@/components/home/PreviewFeature'
import WritingPreview from '@/components/home/WritingPreview'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Home' })

const credibilitySignals = [
  {
    label: 'Recognition',
    text: 'Python Software Foundation Community Service Award',
    href: 'https://www.python.org/community/awards/psf-awards/#april-2026',
  },
  { label: 'Speaking', text: '50+ Conferences, Meetups & Technical Events' },
  { label: 'Community', text: 'Python & Open-Source Community Leadership' },
]

const capabilities = [
  {
    title: 'AI Practice Leadership',
    description:
      'Building AI capabilities, teams and practices that connect technology with business priorities.',
  },
  {
    title: 'Agentic & Enterprise AI',
    description: 'Designing practical agentic and generative AI systems for enterprise problems.',
  },
  {
    title: 'AI/ML Engineering',
    description: 'Turning AI and machine-learning ideas into usable, scalable solutions.',
  },
  {
    title: 'AI Transformation',
    description: 'Connecting AI strategy, technology, people and business outcomes.',
  },
]

const explorations = [
  'Enterprise Agentic Systems',
  'Full-Stack Agentic Applications',
  'Quantum Computing',
  'Quantitative Finance',
]

export default function HomePage() {
  const latestPosts = allCoreContent(sortPosts(allBlogs)).slice(0, 2)

  return (
    <div className="pb-8">
      <HomeHero />

      <section
        aria-labelledby="credibility-heading"
        className="border-y border-gray-200 dark:border-gray-800"
      >
        <h2 id="credibility-heading" className="sr-only">
          Credibility
        </h2>
        <ul className="grid divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-gray-800">
          {credibilitySignals.map((signal) => (
            <li key={signal.label} className="py-5 md:px-6 md:first:pl-0 md:last:pr-0">
              <p className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase dark:text-gray-400">
                {signal.label}
              </p>
              {signal.href ? (
                <a
                  href={signal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-700 dark:hover:text-primary-300 mt-1.5 inline-block text-base leading-6 font-semibold text-gray-800 transition-colors dark:text-gray-200"
                >
                  {signal.text}
                </a>
              ) : (
                <p className="mt-1.5 text-base leading-6 font-semibold text-gray-800 dark:text-gray-200">
                  {signal.text}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="what-i-do-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p className="eyebrow">Practice</p>
            <h2
              id="what-i-do-heading"
              className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
            >
              What I Do
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              I work across the technical, strategic and leadership dimensions of AI—turning ideas
              into practical systems, capabilities and outcomes.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="surface-card rounded-xl p-5 shadow-none sm:p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
                  {capability.title}
                </h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="exploring-heading"
        className="border-primary-100 bg-primary-50/60 dark:border-primary-950 dark:bg-primary-950/30 rounded-3xl border px-6 py-8 sm:px-8 sm:py-10"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16">
          <div>
            <h2
              id="exploring-heading"
              className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
            >
              Currently Exploring
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Areas I'm actively learning, building and experimenting with.
            </p>
          </div>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {explorations.map((exploration) => (
              <li
                key={exploration}
                className="border-primary-200 dark:border-primary-900 flex items-center gap-3 border-t pt-4 font-medium text-gray-800 dark:text-gray-200"
              >
                <span
                  className="bg-primary-600 dark:bg-primary-400 h-1.5 w-1.5 shrink-0 rounded-full"
                  aria-hidden="true"
                />
                {exploration}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="perspectives-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Beyond the practice</p>
          <h2
            id="perspectives-heading"
            className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
          >
            Ideas shared. Communities built.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <PreviewFeature
            title="Speaking"
            description="Sharing ideas across AI, Python and data through conferences, meetups and technical events."
            href="/talks"
            linkLabel="Explore Speaking"
            imageSrc="/static/images/home/kalyan-prasad-speaking-devfest.jpg"
            imageAlt="Kalyan Prasad speaking on stage at a technical conference."
            imageWidth={1200}
            imageHeight={1800}
            imagePosition="object-[center_35%]"
          />
          <PreviewFeature
            title="Community"
            description="Organizing, mentoring and contributing across Python and open-source communities."
            href="/community"
            linkLabel="Explore Community"
            imageSrc="/static/images/home/kalyan-prasad-community-meetup.jpg"
            imageAlt="Kalyan Prasad with members of a technology community meetup."
            imageWidth={2000}
            imageHeight={1125}
          />
        </div>
      </section>

      <WritingPreview posts={latestPosts} />

      <section
        aria-labelledby="connect-heading"
        className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 px-6 py-9 sm:mt-20 sm:px-10 sm:py-10 dark:border-gray-800 dark:bg-gray-900/60"
      >
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2
              id="connect-heading"
              className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
            >
              Let's connect
            </h2>
            <p className="mt-4 text-lg leading-8 font-medium text-gray-800 dark:text-gray-200">
              Have an interesting AI problem, speaking opportunity, or community conversation in
              mind?
            </p>
            <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
              I'm always open to meaningful conversations and new perspectives.
            </p>
          </div>
          <Link
            href="/connect"
            className="bg-primary-700 hover:bg-primary-800 focus-visible:outline-primary-700 dark:bg-primary-400 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-300 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors dark:text-gray-950"
          >
            Connect with me
          </Link>
        </div>
      </section>
    </div>
  )
}
