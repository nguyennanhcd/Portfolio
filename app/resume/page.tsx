import ResumeClient from '@/components/ResumeClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Resume',
  description:
    'Learn about my educational background and professional experience as a web developer and educator.',
  keywords: [
    'resume',
    'education',
    'experience',
    'web developer',
  ],
  ogImage:
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20073248.png?ref_type=heads',
})

const Resume = () => {
  return <ResumeClient />
}

export default Resume
