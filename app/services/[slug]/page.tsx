import { services } from '@/constants/services'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return services.map(({ href }) => ({
    slug: href.split('/').pop(),
  }))
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  console.log(slug)
  const service = services.find((s) =>
    s.href.endsWith(slug),
  )

  if (!service) return notFound()

  return (
    <section className='container mx-auto py-12'>
      {/* Hero */}
      <header className='mb-10 text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold sm:text-5xl'>
          {service.title}
        </h1>
        {service.tagline && (
          <p className='mt-2 text-xl text-muted-foreground'>
            {service.tagline}
          </p>
        )}
        <p className='mt-6 text-lg leading-relaxed'>
          {service.description}
        </p>
      </header>

      {/* Packages */}
      {service.packages?.length > 0 && (
        <section className='my-16'>
          <h2 className='text-2xl font-semibold text-center mb-8'>
            Packages
          </h2>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {service.packages.map((pkg) => (
              <article
                key={pkg.name}
                className='border rounded-2xl p-6 shadow-sm flex flex-col'
              >
                <h3 className='text-xl font-semibold mb-2'>
                  {pkg.name}
                </h3>
                <p className='text-2xl font-bold mb-4'>
                  {pkg.price}
                </p>
                <ul className='list-disc pl-5 space-y-1 text-sm flex-grow'>
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Steps */}
      {service.steps?.length > 0 && (
        <section className='my-16 max-w-3xl mx-auto'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>
            How It Works
          </h2>
          <ol className='list-decimal pl-6 space-y-3 text-base'>
            {service.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      {/* Testimonials */}
      {service.testimonials?.length > 0 && (
        <section className='my-16 max-w-3xl mx-auto'>
          <h2 className='text-2xl font-semibold mb-6 text-center'>
            Testimonials
          </h2>
          <div className='space-y-8'>
            {service.testimonials.map((t) => (
              <blockquote
                key={t.name}
                className='border-l-4 border-primary pl-4 italic'
              >
                “{t.comment}”
                <footer className='mt-2 not-italic font-medium text-sm'>
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
