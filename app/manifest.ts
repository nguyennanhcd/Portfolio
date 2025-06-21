import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
  'name': "Nguyen's Portfolio",
  'short_name': 'Nguyen Portfolio',
  'description': 'Portfolio of Nguyen, a full-stack web developer and educator offering web development, tutoring, and SEO services.',
  'start_url': '/home',
  'display': 'standalone',
  'background_color': '#1A202C',
  'theme_color': '#FF5733',
  'lang': 'en-US',
  'scope': '/'
}
}