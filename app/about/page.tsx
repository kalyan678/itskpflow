import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

const principles = [
  {
    title: 'Build with purpose',
    description: 'Start with the problem and outcome, not the technology.',
  },
  {
    title: 'Think in systems',
    description:
      'Models are only one part of a working AI system. Data, applications, tools and human workflows matter too.',
  },
  {
    title: 'Experiment, then engineer',
    description: 'Prototype to learn. Engineer for reliability, evaluation and scale.',
  },
  {
    title: 'Keep humans in the loop',
    description: 'AI should support good judgment, not create an illusion of certainty.',
  },
]

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl pt-10 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
      <section aria-labelledby="about-heading" className="pb-12 sm:pb-14">
        <h1
          id="about-heading"
          className="max-w-2xl text-3xl leading-[1.1] font-semibold tracking-[-0.04em] text-gray-950 sm:text-4xl dark:text-white"
        >
          I didn't start in technology.
        </h1>
        <div className="mt-7 max-w-2xl space-y-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
          <p>
            My career began in a very different place, from delivering newspapers to studying
            commerce and finance, then moving through operations and analytics.
          </p>
          <p>
            Working with data changed the direction of my career. Curiosity led me from Python into
            data science and machine learning, and eventually into AI engineering, consulting and
            leadership.
          </p>
          <p>
            What has stayed constant is my curiosity: understanding how things work, learning by
            building, and continuing to work hands-on with technology as my responsibilities grow.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="thinking-heading"
        className="border-t border-gray-200 py-12 sm:py-14 dark:border-gray-800"
      >
        <h2
          id="thinking-heading"
          className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white"
        >
          How I Think
        </h2>
        <ol className="mt-8 grid border-t border-gray-200 md:grid-cols-2 dark:border-gray-800">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="border-b border-gray-200 py-6 md:odd:pr-8 md:even:border-l md:even:pl-8 dark:border-gray-800"
            >
              <span
                className="text-primary-700 dark:text-primary-300 text-sm font-semibold tabular-nums"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
                {principle.title}
              </h3>
              <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="beyond-work-heading"
        className="border-t border-gray-200 pt-12 sm:pt-14 dark:border-gray-800"
      >
        <h2
          id="beyond-work-heading"
          className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white"
        >
          Beyond Work
        </h2>
        <p className="mt-6 text-lg font-medium tracking-tight text-gray-950 sm:text-xl dark:text-white">
          Lifting <span aria-hidden="true">·</span> Riding <span aria-hidden="true">·</span> Travel{' '}
          <span aria-hidden="true">·</span> Movies
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Outside technology, these are some of the things that help me reset, whether that's
          pushing through a workout, getting out on a ride, experiencing a new place or switching
          off with a good movie.
        </p>
      </section>
    </article>
  )
}
