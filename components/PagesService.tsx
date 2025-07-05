'use client'

import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

interface ServicePackage {
  name: string
  price: string
  features: readonly string[]
}

interface Testimonial {
  name: string
  comment: string
}

interface Service {
  num: string
  title: string
  description: string
  href: string
  packages?: readonly ServicePackage[]
  steps?: readonly string[]
  testimonials?: readonly Testimonial[]
}

interface ServicePagesProps {
  service: Service
}

const ServicePages: React.FC<ServicePagesProps> = ({
  service,
}) => {
  const shouldReduceMotion = useReducedMotion()

  const motionVariants = shouldReduceMotion
    ? { initial: {}, animate: {}, transition: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      }

  return (
    <section className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <motion.header
        {...motionVariants}
        className='mb-12 text-center max-w-4xl mx-auto'
      >
        <div className='flex justify-center items-center mb-6'>
          <span className='text-4xl sm:text-5xl font-bold text-primary mr-4'>
            {service.num}
          </span>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            {service.title}
          </h1>
        </div>
        <p className='mt-6 text-lg leading-8 text-muted-foreground'>
          {service.description}
        </p>
        <Button className='mt-8' size='lg' asChild>
          <Link href='#packages'>Explore Packages</Link>
        </Button>
      </motion.header>

      {service.packages && service.packages.length > 0 && (
        <section id='packages' className='my-20'>
          <h2 className='text-3xl font-semibold text-center mb-10'>
            Our Packages
          </h2>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {service.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 0.5, delay: index * 0.1 }
                }
              >
                <Card className='h-full flex flex-col hover:shadow-lg transition-shadow duration-300'>
                  <CardHeader>
                    <CardTitle className='text-xl'>
                      {pkg.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='flex flex-col flex-grow'>
                    <p className='text-2xl font-bold text-primary mb-4'>
                      {pkg.price}
                    </p>
                    <ul className='list-disc pl-5 space-y-2 text-sm flex-grow'>
                      {pkg.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <Button
                      className='mt-6 w-full'
                      variant='default'
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {service.steps && service.steps.length > 0 && (
        <section className='my-20 max-w-4xl mx-auto'>
          <h2 className='text-3xl font-semibold mb-8 text-center'>
            How It Works
          </h2>
          <ol className='space-y-6'>
            {service.steps.map((step, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={
                  shouldReduceMotion
                    ? {}
                    : { duration: 0.5, delay: idx * 0.1 }
                }
                className='flex items-start gap-4'
              >
                <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-semibold'>
                  {idx + 1}
                </span>
                <p className='text-base leading-7'>
                  {step}
                </p>
              </motion.li>
            ))}
          </ol>
        </section>
      )}

      {service.testimonials &&
        service.testimonials.length > 0 && (
          <section className='my-20 max-w-4xl mx-auto'>
            <h2 className='text-3xl font-semibold mb-8 text-center'>
              What Our Clients Say
            </h2>
            <ScrollArea className='max-h-[400px] rounded-lg border p-6'>
              <div className='space-y-6'>
                {service.testimonials.map((t, index) => (
                  <motion.blockquote
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      shouldReduceMotion
                        ? {}
                        : {
                            duration: 0.5,
                            delay: index * 0.1,
                          }
                    }
                    className='border-l-4 border-primary pl-4 italic'
                  >
                    <p className='text-lg'>“{t.comment}”</p>
                    <footer className='mt-2 not-italic font-medium text-sm text-muted-foreground'>
                      — {t.name}
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </ScrollArea>
          </section>
        )}
    </section>
  )
}

export default ServicePages
