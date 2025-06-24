import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

//components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import StairTransition from '@/components/StairTransition'
import { json_ld } from '@/lib/json-ld'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
  ],
  variable: '--font-jetbrainsMono',
  preload: true,
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Anh Portfolio',
  description: 'Anh Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster
          toastOptions={{
            style: {
              textAlign: 'center',
            },
          }}
        />
        <Script
          id='organization-ld-json'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(json_ld),
          }}
          strategy='lazyOnload'
        />
      </body>
    </html>
  )
}
