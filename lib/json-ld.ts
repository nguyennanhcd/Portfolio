export const json_ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      'name': 'Nguyen Anh',
      'jobTitle': 'Full-Stack Web Developer and Educator',
      'url': 'https://anhportfolio.vercel.app/',
      'sameAs': [
        'https://github.com/nguyennanhcd',
        'https://www.facebook.com/hoang.aanh.225907',
      ],
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Ho Chi Minh City',
        'addressRegion': 'Vietnam',
        'addressCountry': 'VN'
      },
      'description': 'Nguyen Anh is a full-stack web developer and educator based in Vietnam, specializing in Next.js, Tailwind CSS, tutoring, English teaching, and SEO optimization.'
    },
    {
      '@type': 'WebSite',
      'url': 'https://anhportfolio.vercel.app/',
      'name': "Anh's Portfolio",
      'description': 'Portfolio of Nguyen Anh, showcasing web development, tutoring, English teaching, and SEO services.',
      'inLanguage': ['en-US', 'vi-VN']
    },
    {
      '@type': 'LocalBusiness',
      'name': "Nguyen's Web Development and Education Services",
      'url': 'https://anhportfolio.vercel.app',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Ho Chi Minh City',
        'addressRegion': 'Vietnam',
        'addressCountry': 'VN'
      },
      'description': 'Freelance web development, tutoring, English teaching, and SEO optimization services in Vietnam.',
      'contactPoint': {
        '@type': 'ContactPoint',
        'email': 'anh487303@gmail.com',
        'contactType': 'Customer Support'
      }
    }
  ]
};
