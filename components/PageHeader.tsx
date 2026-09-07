interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
}

export default function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1 className="display-title">{title}</h1>
      {description && <p className="body-lead">{description}</p>}
    </header>
  )
}
