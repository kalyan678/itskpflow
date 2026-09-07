import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="w-full">
    <div
      className={`${
        imgSrc && 'h-full'
      } surface-card overflow-hidden transition-shadow hover:shadow-md`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6 sm:p-7">
        <h2 className="mb-3 text-2xl leading-8 font-semibold tracking-tight text-gray-950 dark:text-white">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-4 max-w-none leading-7 text-gray-600 dark:text-gray-300">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-link text-base leading-6"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
