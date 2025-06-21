import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

//constants
import { services } from '@/constants/services'

import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Explore my professional services: full-stack web development, personalized tutoring, English teaching, and SEO optimization.',
  keywords: [
    'web developer',
    'portfolio',
    'introduction',
    'freelance',
    'english teacher',
    'private tutor',
    'web development',
    'tutoring',
    'seo',
    'code',
    'mathematics',
  ],
  ogImage:
    'https://gitlab.com/nguyennanhcd1/image-container/-/raw/main/portfolio-image/Screenshot%202025-06-21%20073227.png?ref_type=heads',
})

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ml-2'>
      <div className='container mx-auto'>
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
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-6 group'
              >
                {/* top */}
                <div className='w-full flex items-center justify-between'>
                  <div className='text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[60px] h-[60px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <BsArrowDownRight className='text-primary text-2xl' />
                  </Link>
                </div>
                {/* title*/}
                <h2 className='text-[42px] font-bold leading-none text-white  group-hover:text-accent-default transition-all duration-500'>
                  {service.title}
                </h2>
                {/* description*/}
                <p className='text-white/60'>
                  {service.description}
                </p>
                {/* border*/}
                <div className='border-b border-white/20 w-full xl:mb-5'>
                  {service.title}
                </div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
