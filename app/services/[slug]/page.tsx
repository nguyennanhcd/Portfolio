// app/services/[slug]/page.tsx
import { services } from '@/constants/services'
import { notFound } from 'next/navigation'
import { JSX } from 'react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => {
    const slug = service.href.split('/').pop()
    return { slug }
  })
}

export default async function ServiceDetailPage({
  params,
}: Props): Promise<JSX.Element> {
  const { slug } = await params

  const service = services.find((s) =>
    s.href.endsWith(slug),
  )

  if (!service) return notFound()

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>
        {service.title}
      </h1>
      <p className='text-lg'>{service.description}</p>
    </div>
  )
}
