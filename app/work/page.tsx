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
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20073315.png?ref_type=heads',
})

const Work = () => {
  return <WorkClient />
}

export default Work
