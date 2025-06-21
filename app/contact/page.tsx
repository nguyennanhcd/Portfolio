import ContactClient from '@/components/ContactClient'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Get in touch with me for collaboration, inquiries, or project discussions.',
  keywords: [
    'contact',
    'web developer',
    'collaboration',
    'freelance',
  ],
  ogImage:
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20073336.png?ref_type=heads',
})

const Contact = () => {
  return <ContactClient />
}

export default Contact
