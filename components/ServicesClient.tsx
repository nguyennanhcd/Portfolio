'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import {
  domAnimation,
  LazyMotion,
  motion,
} from 'framer-motion'
import { services } from '@/constants/services'

// Define the Service type for TypeScript
interface Service {
  num: string
  title: string
  description: string
  href: string
}

export default function ServicesClient() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className='container mx-auto px-2 xl:px-0'>
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2.4,
                duration: 0.4,
                ease: 'easeInOut',
              },
            }}
            className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
          >
            {services.map(
              (service: Service, index: number) => (
                <div
                  key={index}
                  className='flex-1 flex flex-col justify-center gap-6 group'
                >
                  {/* Top */}
                  <div className='w-full flex items-center justify-between'>
                    <div className='text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500'>
                      {service.num}
                    </div>
                    <Link
                      aria-label={`View my ${service.title} works`}
                      href={service.href}
                      className='lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45 xl:-translate-x-0 -translate-x-3'
                    >
                      <BsArrowDownRight className='text-primary text-2xl' />
                    </Link>
                  </div>
                  {/* Title */}
                  <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 '>
                    {service.title}
                  </h2>
                  {/* Description */}
                  <p className='text-white/60'>
                    {service.description}
                  </p>
                  {/* Border */}
                  <div className='border-b border-white/20 w-full xl:mb-5'>
                    {service.title}
                  </div>
                </div>
              ),
            )}
          </motion.div>
        </LazyMotion>
      </div>
    </section>
  )
}
