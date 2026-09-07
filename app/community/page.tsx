import PageHeader from '@/components/PageHeader'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Community' })

export default function CommunityPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Community"
        description="Community work will be presented here in a future stage."
      />
    </div>
  )
}
