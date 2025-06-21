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
    'https://github.com/nguyennanhcd/image_container/blob/main/portfolio-image/resume.png?raw=true',
})

const Resume = () => {
  return <ResumeClient />
}

export default Resume
