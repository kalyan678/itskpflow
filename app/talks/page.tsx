import talkData from '@/data/talkData'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Speaking' })

export default function Talks() {
  return (
    <div className="page-shell">
      <PageHeader title="Speaking" description="Speaking archive is being consolidated." />
      {talkData.length > 0 && (
        <div className="pt-10 sm:pt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {talkData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
