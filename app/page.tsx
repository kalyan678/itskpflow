import PageHeader from '@/components/PageHeader'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Home' })

export default function HomePage() {
  return (
    <div className="page-shell">
      <PageHeader
        eyebrow="itskpflow"
        title="Kalyan Prasad"
        description="AI & Data Science Practice Leader"
      />
    </div>
  )
}
