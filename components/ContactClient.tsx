'use client'

import { info } from '@/constants/info'
import {
  domAnimation,
  LazyMotion,
  motion,
} from 'framer-motion'
import Form from './ContactForm'

const ContactClient = () => {
  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 2.4,
            duration: 0.4,
            ease: 'easeInOut',
          },
        }}
        className='py-6 '
      >
        <div className='container mx-auto'>
          <div className='flex flex-col xl:flex-row gap-[30px]'>
            {/* form */}
            <Form />

            {/* info */}
            <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 xl:w-[40%]'>
              <ul className='flex flex-col gap-10 xl:bg-[#27272c] xl:rounded-xl xl:h-full xl:w-full xl:justify-center '>
                {info.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center gap-6 xl:ml-2'
                  >
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] rounded-md text-accent-default flex justify-center items-center'>
                      <div className='text-[28px]'>
                        {item.icon}
                      </div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>
                        {item.title}
                      </p>
                      <h3 className='text-xl'>
                        {item.description}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </LazyMotion>
  )
}

export default ContactClient
