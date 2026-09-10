import Link from '@/components/Link'
import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Community' })

type EvidenceLink = { label: string; href: string }

type Contribution = {
  organization?: string
  preserveOrganizationCase?: boolean
  title?: string
  role?: string
  paragraphs: string[]
  links?: EvidenceLink[]
}

const leadership: Contribution[] = [
  {
    organization: 'HydPy',
    role: 'Lead Organizer',
    paragraphs: [
      'My community journey began with HydPy in 2019 as a room monitor. I later became a core member, helping organize community activities, before taking on the Lead Organizer role.',
      'Today, I mentor new organizers, support decision-making and help sustain regular meetups while keeping the community grounded in open-source principles.',
    ],
    links: [{ label: 'Visit HydPy', href: 'https://www.hydpy.org/' }],
  },
  {
    organization: 'PyConf Hyderabad',
    role: 'Co-Chair · 2022 · Chair · 2025–2026',
    paragraphs: [
      'Help lead PyConf Hyderabad through conference planning, volunteer coordination and community engagement, with an emphasis on inclusive participation and diverse speaker representation.',
    ],
    links: [{ label: 'Visit official conference site', href: 'https://2026.pyconfhyd.org/' }],
  },
  {
    organization: 'PyCon India',
    role: 'Co-Conference Chair · 2023',
    paragraphs: [
      'Served as Co-Conference Chair for PyCon India 2023, contributing to conference leadership, community coordination and efforts to create an inclusive, community-driven event.',
    ],
    links: [{ label: 'Visit official conference site', href: 'https://in.pycon.org/2023/' }],
  },
]

const ecosystem: Contribution[] = [
  {
    organization: 'Python Software Foundation',
    role: 'Diversity & Inclusion Advocate',
    paragraphs: [
      'Support diversity and inclusion across the Python community, including contributing to PyLadies activities and helping encourage broader participation in community programs and events.',
    ],
    links: [
      {
        label: 'Read about the D&I work',
        href: 'https://pyfound.blogspot.com/2026/02/python-is-for-everyone-inside-psfs-d.html',
      },
    ],
  },
  {
    organization: 'Python Software Foundation',
    role: '2026 Board of Directors Candidate',
    paragraphs: [
      'Nominated as a candidate for the 2026 Python Software Foundation Board of Directors election, with participation in the candidate interview and community AMA as part of the election process.',
    ],
    links: [
      {
        label: 'View candidate profile',
        href: 'https://pyfound.blogspot.com/2026/08/kalyan-prasad-2026-psf-board-election.html',
      },
    ],
  },
  {
    organization: 'NumFOCUS',
    role: 'Code of Conduct Working Group',
    paragraphs: [
      'Contribute to Code of Conduct work supporting respectful, inclusive and healthy participation across open-source and scientific computing communities.',
    ],
    links: [
      {
        label: 'View Code of Conduct program',
        href: 'https://numfocus.org/code-of-conduct',
      },
    ],
  },
  {
    organization: 'NumFOCUS',
    role: 'Small Development Grants Committee',
    paragraphs: [
      'Support the review of funding proposals that help strengthen open-source scientific computing projects and their communities.',
    ],
    links: [
      {
        label: 'View Small Development Grants program',
        href: 'https://numfocus.org/programs/small-development-grants',
      },
    ],
  },
]

const mentoring: Contribution[] = [
  {
    organization: 'KaggleX BIPOC Mentorship Program',
    preserveOrganizationCase: true,
    role: 'Mentor · Top 10 Worldwide',
    paragraphs: [
      'Mentored participants through the KaggleX BIPOC Mentorship Program and was recognized as one of the program’s Top 10 Mentors worldwide for my mentorship contributions.',
    ],
    links: [
      {
        label: 'View recognition',
        href: 'https://www.linkedin.com/posts/itskpflow_kagglex-bipoc-raisingequity-ugcPost-7129809116973170688-B2eu/',
      },
    ],
  },
  {
    organization: 'SciPy',
    role: 'Program Reviewer · 2023 · 2024',
    paragraphs: [
      'Contributed to the SciPy community as a program reviewer, supporting the review of technical submissions within the scientific Python ecosystem.',
    ],
    links: [
      {
        label: '2023 conference overview',
        href: 'https://www.scipy2023.scipy.org/conference-overview/',
      },
      {
        label: '2024 organization',
        href: 'https://proceedings.scipy.org/articles/proceedings-2024/organization',
      },
    ],
  },
]

function ContributionEntry({ contribution }: { contribution: Contribution }) {
  return (
    <article className="border-t border-gray-200 pt-6 dark:border-gray-800">
      {contribution.organization && (
        <p
          className={`text-primary-700 dark:text-primary-300 text-sm font-semibold tracking-[0.12em] ${contribution.preserveOrganizationCase ? 'normal-case' : 'uppercase'}`}
        >
          {contribution.organization}
        </p>
      )}
      <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
        {contribution.title ?? contribution.role}
      </h3>
      <div className="mt-4 space-y-3 leading-7 text-gray-600 dark:text-gray-300">
        {contribution.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {contribution.links && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
          {contribution.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-link inline-flex min-h-11 items-center py-2 text-sm"
            >
              {link.label} <span aria-hidden="true">↗︎</span>
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}

export default function CommunityPage() {
  return (
    <article className="page-shell mx-auto max-w-6xl">
      <header className="max-w-4xl pb-14 sm:pb-16">
        <h1 className="display-title max-w-4xl">
          Building communities around Python, open source and shared learning.
        </h1>
        <p className="body-lead max-w-3xl">
          Community has become an important part of how I contribute beyond my professional work,
          through organizing, mentoring, reviewing and supporting initiatives across Python,
          scientific computing, AI and open source.
        </p>
      </header>

      <section
        aria-labelledby="leadership-heading"
        className="border-t border-gray-200 py-14 sm:py-16 dark:border-gray-800"
      >
        <h2
          id="leadership-heading"
          className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
        >
          Community leadership
        </h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-10">
          {leadership.map((contribution) => (
            <ContributionEntry key={contribution.organization} contribution={contribution} />
          ))}
        </div>
        <figure className="mt-10">
          <Image
            src="/static/images/community/pyconf-hyderabad-2026-organizing-team.jpeg"
            alt="PyConf Hyderabad 2026 organizing team on stage after the conference"
            width={1280}
            height={720}
            sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            className="h-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
            PyConf Hyderabad 2026 · Organizing team
          </figcaption>
        </figure>
        <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.65fr)_minmax(14rem,0.55fr)] md:items-start">
          <figure>
            <Image
              src="/static/images/community/hydpy-community-meetup.jpg"
              alt="HydPy community members gathered at a meetup"
              width={4000}
              height={1800}
              sizes="(min-width: 1280px) 820px, (min-width: 768px) 68vw, calc(100vw - 40px)"
              className="h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              HydPy community meetup
            </figcaption>
          </figure>
          <figure className="max-w-xs md:max-w-none">
            <Image
              src="/static/images/community/hydpy-10-year-celebration.png"
              alt="HydPy 10-year community celebration cake"
              width={1280}
              height={1593}
              sizes="(min-width: 1280px) 260px, (min-width: 768px) 24vw, 320px"
              className="h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Celebrating 10 years of the HydPy community · 2026
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        aria-labelledby="ecosystem-heading"
        className="border-t border-gray-200 py-14 sm:py-16 dark:border-gray-800"
      >
        <h2
          id="ecosystem-heading"
          className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
        >
          Serving the wider ecosystem
        </h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {ecosystem.map((contribution) => (
            <ContributionEntry
              key={`${contribution.organization ?? 'PSF'}-${contribution.role ?? contribution.title}`}
              contribution={contribution}
            />
          ))}
        </div>
        <figure className="mt-10">
          <Image
            src="/static/images/community/pycon-apac-2025-diversity-inclusion-panel.jpg"
            alt="Panelists discussing diversity and inclusion at PyCon APAC 2025"
            width={2688}
            height={1512}
            sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
            className="h-auto w-full rounded-2xl"
          />
          <figcaption className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
            PyCon APAC 2025 · Diversity &amp; Inclusion panel
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="mentoring-heading"
        className="border-t border-gray-200 py-14 sm:py-16 dark:border-gray-800"
      >
        <div className="max-w-3xl">
          <h2
            id="mentoring-heading"
            className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
          >
            Mentoring &amp; reviewing
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Beyond organizing communities, I contribute as a mentor and reviewer across Python,
            scientific computing and AI communities, supporting people as they learn, contribute and
            share their work.
          </p>
        </div>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {mentoring.map((contribution) => (
            <ContributionEntry key={contribution.organization} contribution={contribution} />
          ))}
        </div>
      </section>

      <section
        aria-labelledby="recognition-heading"
        className="border-y border-gray-200 py-10 sm:py-12 dark:border-gray-800"
      >
        <div className="grid gap-5 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] md:gap-12">
          <h2
            id="recognition-heading"
            className="text-3xl font-semibold tracking-tight text-gray-950 dark:text-white"
          >
            Recognition
          </h2>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-gray-950 dark:text-white">
              Python Software Foundation Community Service Award · 2026
            </h3>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
              Recognition for sustained contributions to the Python community.
            </p>
            <Link
              href="https://www.python.org/community/awards/psf-awards/#april-2026"
              className="text-link mt-3 inline-flex min-h-11 items-center py-2 text-sm"
            >
              View official recognition <span aria-hidden="true">↗︎</span>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-heading" className="py-14 sm:py-16">
        <div className="max-w-3xl">
          <h2
            id="why-heading"
            className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
          >
            Why community matters to me
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            <p>
              Communities gave me opportunities to learn, contribute, speak, lead and meet people
              from around the world. I continue contributing because I believe strong communities
              grow when people are given opportunities to participate, take responsibility and
              eventually help someone else do the same.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="community-connect-heading"
        className="rounded-3xl border border-gray-200 bg-gray-50 px-6 py-9 sm:px-10 sm:py-10 dark:border-gray-800 dark:bg-gray-900/60"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <h2
              id="community-connect-heading"
              className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white"
            >
              Building something for the community?
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
              I’m always interested in conversations around Python, AI, open source, community
              building and technical education.
            </p>
          </div>
          <Link
            href="/connect"
            className="bg-primary-700 hover:bg-primary-800 focus-visible:outline-primary-700 dark:bg-primary-400 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-300 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors dark:text-gray-950"
          >
            Connect <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </article>
  )
}
