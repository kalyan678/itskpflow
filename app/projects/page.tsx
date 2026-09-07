import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import PageHeader from '@/components/PageHeader'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Work' })

export default function Projects() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Work"
        description="Selected projects and case studies are being documented."
      />
      {projectsData.length > 0 && (
        <div className="pt-10 sm:pt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {projectsData.map((d) => (
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
