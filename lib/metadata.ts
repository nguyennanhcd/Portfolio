import { Metadata } from 'next';

interface MetadataParams {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export const createMetadata = ({ title, description, keywords, ogImage }: MetadataParams): Metadata => ({
  title: `${title} | Anh's Portfolio`,
  description: description || "Nguyen's Portfolio - Web Development, Tutoring, and More",
  keywords: keywords || ['portfolio', 'web development', 'freelance', 'tutoring'],
  openGraph: {
    title: title || "Nguyen's Portfolio",
    description: description || "Nguyen's Portfolio - Web Development, Tutoring, and More",
    url: `https://nguyen-portfolio.com${title === 'Home' ? '' : `/${  title.toLowerCase()}`}`,
    type: 'website',
    images: ogImage || 'https://nguyen-portfolio.com/og-default.jpg',
  },
  twitter: {
    card: 'summary_large_image',
    title: title || "Nguyen's Portfolio",
    description: description || "Nguyen's Portfolio - Web Development, Tutoring, and More",
    images: ogImage || 'https://nguyen-portfolio.com/og-default.jpg',
  },
});