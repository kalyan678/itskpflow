import Image from '@/components/Image'
import Link from '@/components/Link'

export default function HomeHero() {
  return (
    <section aria-labelledby="home-heading" className="py-12 sm:py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(18rem,0.78fr)] lg:gap-14 xl:gap-20">
        <div>
          <p className="text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-[0.14em] uppercase">
            Kalyan Prasad
          </p>
          <h1
            id="home-heading"
            className="mt-6 max-w-4xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-6xl xl:text-[4rem] dark:text-white"
          >
            Building AI systems, practices &amp; communities.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl dark:text-gray-300">
            I work across enterprise AI, agentic systems, AI transformation, and the Python
            ecosystem, combining technology, leadership, and community building.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="bg-primary-700 hover:bg-primary-800 focus-visible:outline-primary-700 dark:bg-primary-400 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-300 inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors dark:text-gray-950"
            >
              Explore my work
            </Link>
            <Link
              href="/connect"
              className="hover:border-primary-600 hover:text-primary-800 focus-visible:outline-primary-700 dark:hover:border-primary-400 dark:hover:text-primary-200 dark:focus-visible:outline-primary-300 inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-colors dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
            >
              Connect
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="border-primary-100 dark:border-primary-950 absolute -inset-4 -z-10 rounded-[2rem] border"
            aria-hidden="true"
          />
          <div className="overflow-hidden rounded-3xl bg-gray-100 shadow-xl shadow-gray-950/10 dark:bg-gray-900 dark:shadow-black/30">
            <Image
              src="/static/images/home/kalyan-prasad-portrait.jpg"
              alt="Kalyan Prasad in a professional portrait."
              width={960}
              height={1200}
              priority
              sizes="(min-width: 1280px) 420px, (min-width: 1024px) 36vw, (min-width: 640px) 448px, calc(100vw - 40px)"
              className="aspect-[4/5] h-auto w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
