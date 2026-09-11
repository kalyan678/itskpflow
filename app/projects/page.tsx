import Image from '@/components/Image'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Work' })

export default function Projects() {
  return (
    <article className="page-shell mx-auto max-w-6xl">
      <header className="max-w-3xl pb-12 sm:pb-14">
        <h1 className="display-title">
          Building AI systems from ideas to working implementations.
        </h1>
        <p className="body-lead">
          Selected projects where I explore models, architecture and engineering through hands-on
          building.
        </p>
      </header>

      <section
        aria-labelledby="telugu-tiny-llm-heading"
        className="border-t border-gray-200 pt-10 sm:pt-12 dark:border-gray-800"
      >
        <figure className="max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
          <Image
            src="/static/images/work/telugu-tiny-llm-tokenizer.png"
            alt="Telugu Tiny LLM live tokenizer showing Telugu text split into character-level model tokens"
            width={780}
            height={800}
            sizes="(min-width: 1024px) 896px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            className="h-auto w-full"
          />
        </figure>

        <div className="mt-8 max-w-3xl">
          <h2
            id="telugu-tiny-llm-heading"
            className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
          >
            Telugu Tiny LLM
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A tiny character-level GPT trained from scratch on classical Telugu poetry. I built it
            as an experiment to understand Telugu tokenization, transformer internals, and the path
            from model training to browser-based inference.
          </p>
          <p className="mt-5 text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400">
            Python <span aria-hidden="true">·</span> PyTorch <span aria-hidden="true">·</span>{' '}
            Transformers <span aria-hidden="true">·</span> JavaScript
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1">
            <Link
              href="https://kalyan678.github.io/telugu-tiny-llm/"
              className="text-link inline-flex min-h-11 items-center py-2"
            >
              Live Demo <span aria-hidden="true">↗︎</span>
            </Link>
            <Link
              href="https://github.com/kalyan678/telugu-tiny-llm"
              className="text-link inline-flex min-h-11 items-center py-2"
            >
              GitHub <span aria-hidden="true">↗︎</span>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
