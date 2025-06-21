import WorkClient from '@/components/WorkClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Work',
  description:
    'Discover my portfolio of projects, showcasing innovative web development and creative solutions.',
  keywords: [
    'projects',
    'portfolio',
    'web development',
    'freelance',
  ],
  ogImage:
    'https://github.com/nguyennanhcd/image_container/blob/main/portfolio-image/service.png?raw=true',
})

const Work = () => {
  return <WorkClient />
}

export default Work
