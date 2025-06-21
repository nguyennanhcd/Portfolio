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
    'https://github.com/nguyennanhcd/image_container/blob/main/portfolio-image/contact.png?raw=true',
})

const Contact = () => {
  return <ContactClient />
}

export default Contact
