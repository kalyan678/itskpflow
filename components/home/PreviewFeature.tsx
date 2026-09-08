import Image from '@/components/Image'
import Link from '@/components/Link'

interface PreviewFeatureProps {
  title: string
  description: string
  href: string
  linkLabel: string
  imageSrc: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  imagePosition?: string
}

export default function PreviewFeature({
  title,
  description,
  href,
  linkLabel,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imagePosition = 'object-center',
}: PreviewFeatureProps) {
  return (
    <article className="surface-card overflow-hidden">
      <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="(min-width: 1024px) 50vw, calc(100vw - 40px)"
          className={`h-full w-full object-cover ${imagePosition}`}
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-white">
          {title}
        </h3>
        <p className="mt-3 max-w-xl leading-7 text-gray-600 dark:text-gray-300">{description}</p>
        <Link href={href} className="text-link mt-4 inline-flex min-h-11 items-center py-2">
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
