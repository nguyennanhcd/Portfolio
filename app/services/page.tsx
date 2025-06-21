import { createMetadata } from '@/lib/metadata'
import ServicesClient from '@/components/ServicesClient'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Explore my professional services: full-stack web development, personalized tutoring, English teaching, and SEO optimization.',
  keywords: [
    'web developer',
    'portfolio',
    'introduction',
    'freelance',
    'english teacher',
    'private tutor',
    'web development',
    'tutoring',
    'seo',
    'code',
    'mathematics',
  ],
  ogImage:
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20073227.png?ref_type=heads',
})

const Services = () => {
  return <ServicesClient />
}

export default Services
